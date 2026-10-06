// 테스트 로봇 — 모든 화면의 모든 버튼을 실제로 눌러 본다.
// 막힌 길(버튼이 안 먹거나 가려짐 — 다른 게 맞으면 실패)·뒤로가기 불가·깨진 레이아웃(overflow 는 예외로 실패)·
// 잘린 글자(…)·VoiceOver 로 못 누르는 버튼을 잡는다. 3개 기기, 큰 글씨, 다크 모드, 키보드, 24시간, 자정, 북극권, 광고 실패까지.
// 실행: flutter test test/robot_test.dart
//   → 누른 버튼 목록이 로그로 찍히고, 화면별 스크린샷이 build/robot_shots/ 에 저장된다.
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/cupertino.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:solunar/core/ads.dart';
import 'package:solunar/core/device_zone.dart';
import 'package:solunar/core/format.dart';
import 'package:solunar/core/location.dart';
import 'package:solunar/core/places.dart';
import 'package:solunar/core/solunar.dart';
import 'package:solunar/core/store.dart';
import 'package:solunar/core/zone.dart';
import 'package:solunar/main.dart';
import 'package:solunar/screens/settings_screen.dart';

final pressed = <String>[];
final shots = <String>[];
final opened = <Uri>[];

/// 실제 기기 크기 (논리 픽셀, 배율, 위·아래 안전 영역)
const devices = {
  'iPhone 13 (1170x2532)': (Size(390, 844), 3.0, 47.0, 34.0),
  'iPhone SE (750x1334)': (Size(375, 667), 2.0, 20.0, 0.0),
  'iPhone 15 Pro Max (1290x2796)': (Size(430, 932), 3.0, 59.0, 34.0),
};
const iphone13 = 'iPhone 13 (1170x2532)';

/// Fri Oct 2 2026, 12:00 PM CDT in Austin.
final testNow = DateTime.utc(2026, 10, 2, 17);
const austinFix = LocationResult.found(30.2672, -97.7431);
const austin = Place(name: 'Austin, TX', lat: 30.267, lng: -97.743, tz: 'America/Chicago');
const austinPrefs = {'place': '{"name":"Austin, TX","lat":30.267,"lng":-97.743,"tz":"America/Chicago"}'};

late FakeLocation loc;
late DateTime clockNow;

var _fontsLoaded = false;

/// 테스트 기본 글꼴(Ahem)은 글자가 정사각형이라 잘림 검사가 틀린다 → SDK Roboto(SF 와 폭 비슷)를
/// iOS 시스템 글꼴 이름으로 넣고(Glance dB 노하우), CupertinoIcons 글꼴도 넣어 스크린샷에 아이콘이 보이게.
Future<void> loadFonts() async {
  if (_fontsLoaded) return;
  _fontsLoaded = true;
  final root = '${Platform.environment['FLUTTER_ROOT'] ?? '/opt/flutter'}/bin/cache/artifacts/material_fonts';
  Future<void> family(String name, List<String> paths) async {
    final loader = FontLoader(name);
    for (final p in paths) {
      final file = File(p);
      if (!file.existsSync()) {
        // ignore: avoid_print
        print('WARNING: font not found $p — truncation checks use test font');
        return;
      }
      loader.addFont(Future.value(ByteData.sublistView(file.readAsBytesSync())));
    }
    await loader.load();
  }

  for (final f in ['CupertinoSystemText', 'CupertinoSystemDisplay']) {
    await family(f, [for (final w in ['Regular', 'Medium', 'Bold']) '$root/Roboto-$w.ttf']);
  }
  final pub = Platform.environment['PUB_CACHE'] ?? '${Platform.environment['HOME']}/.pub-cache';
  final icons = Directory('$pub/hosted/pub.dev')
      .listSync()
      .whereType<Directory>()
      .where((d) => d.path.contains('cupertino_icons-1.'))
      .map((d) => '${d.path}/assets/CupertinoIcons.ttf')
      .toList();
  if (icons.isNotEmpty) await family('packages/cupertino_icons/CupertinoIcons', [icons.last]);
}

Future<void> boot(
  WidgetTester t, {
  String device = iphone13,
  Map<String, Object>? prefs,
  LocationResult location = austinFix,
  bool granted = false,
  DateTime? now,
  String deviceZone = 'America/Chicago',
  double textScale = 1,
  bool dark = false,
  bool keepPrefs = false,
  FakeAds? ads,
}) async {
  await t.runAsync(loadFonts);
  final (size, ratio, top, bottom) = devices[device]!;
  t.view.physicalSize = size * ratio;
  t.view.devicePixelRatio = ratio;
  t.view.padding = FakeViewPadding(top: top * ratio, bottom: bottom * ratio);
  t.platformDispatcher.textScaleFactorTestValue = textScale;
  t.platformDispatcher.platformBrightnessTestValue = dark ? Brightness.dark : Brightness.light;
  addTearDown(t.view.reset);
  addTearDown(t.platformDispatcher.clearTextScaleFactorTestValue);
  addTearDown(t.platformDispatcher.clearPlatformBrightnessTestValue);
  if (!keepPrefs) SharedPreferences.setMockInitialValues(prefs ?? {});
  clockNow = now ?? testNow;
  loc = FakeLocation(location, granted: granted);
  LocationService.i = loc;
  DeviceZone.i = FakeDeviceZone(deviceZone);
  Ads.i = ads ?? FakeAds();
  openLink = (u) async {
    opened.add(u);
    return true;
  };
  AppStore.i = AppStore()..clock = (() => clockNow);
  await t.runAsync(() => AppStore.i.load());
  await t.pumpWidget(const SizedBox()); // a fresh launch, not a rebuild of the old tree
  await t.pumpWidget(const SolunarApp());
  await settle(t);
}

Future<void> settle(WidgetTester t) async {
  for (var i = 0; i < 6; i++) {
    await t.pump(const Duration(milliseconds: 150));
  }
}

/// Dispose the app so its timers stop before the test ends.
Future<void> finish(WidgetTester t) async {
  await t.pumpWidget(const SizedBox());
  await t.pump(const Duration(seconds: 5));
}

Finder key(String k) => find.byKey(Key(k));

Finder scrollableOf(String listKey) => find.descendant(of: key(listKey), matching: find.byType(Scrollable)).first;

/// Scroll a lazily built list from the top until [f] exists.
Future<void> seeIn(WidgetTester t, String listKey, Finder f) async {
  if (f.evaluate().isEmpty) {
    await t.drag(scrollableOf(listKey), const Offset(0, 5000));
    await settle(t);
    await t.scrollUntilVisible(f, 200, scrollable: scrollableOf(listKey));
  }
  await t.pump();
}

/// 버튼이 화면 안에 있고 덮여 있지 않은지 확인하고 누른다 (다른 게 맞으면 hitTestWarningShouldBeFatal 로 실패).
Future<void> press(WidgetTester t, Finder f, String label) async {
  // ignore: avoid_print
  if (const bool.fromEnvironment('TRACE')) print('▶ $label');
  expect(f, findsOneWidget, reason: 'button not found: $label');
  final screen = Offset.zero & t.view.physicalSize / t.view.devicePixelRatio;
  if (!screen.contains(t.getCenter(f))) {
    // Only scroll when it is off screen: scrolling a visible button collapses the large title mid-tap.
    await t.ensureVisible(f);
    await t.pump(const Duration(milliseconds: 300));
  }
  expect(screen.contains(t.getCenter(f)), isTrue, reason: 'button off screen: $label');
  await t.tap(f);
  pressed.add(label);
  await settle(t);
  expectNoTruncatedText(t, 'after $label');
}

Future<void> back(WidgetTester t, String label) => press(t, key('back'), 'Back ($label)');

/// Names that are allowed to end in "…" (a long place name in the large title, one-line list titles).
const _ellipsisOk = ['place-name', 'fav-', 'town-'];

/// 화면의 글자가 '…' 이나 잘림으로 끊기지 않았는지.
void expectNoTruncatedText(WidgetTester t, String where) {
  for (final e in find.byType(RichText).evaluate()) {
    final ro = e.renderObject;
    if (ro is! RenderParagraph || !ro.attached || !ro.hasSize) continue;
    if (!ro.didExceedMaxLines) continue;
    var allowed = false;
    e.visitAncestorElements((a) {
      final k = a.widget.key;
      if (k is ValueKey<String> && _ellipsisOk.any((p) => k.value.startsWith(p))) {
        allowed = true;
        return false;
      }
      // The collapsed nav bar title is a one-line copy of the large title.
      if (a.widget is CupertinoSliverNavigationBar) {
        allowed = true;
        return false;
      }
      return true;
    });
    expect(allowed, isTrue, reason: '$where: text cut off: "${ro.text.toPlainText()}"');
  }
}

/// VoiceOver: every button node must have a tap action (Glance dB / MPG lesson).
void expectButtonsTappable(WidgetTester t, String where) {
  final sem = t.ensureSemantics();
  final bad = <String>[];
  void visit(SemanticsNode n) {
    final d = n.getSemanticsData();
    final f = d.flagsCollection;
    if (f.isButton && !d.hasAction(SemanticsAction.tap) && f.isEnabled != ui.Tristate.isFalse) bad.add(d.label);
    // A button that reads a whole list section (many lines) means rows got merged into one stop.
    if (f.isButton && d.label.split('\n').length > 4) bad.add('merged: ${d.label.replaceAll('\n', ' / ')}');
    n.visitChildren((c) {
      visit(c);
      return true;
    });
  }

  visit(t.binding.renderViews.first.owner!.semanticsOwner!.rootSemanticsNode!);
  sem.dispose();
  expect(bad, isEmpty, reason: '$where: buttons without a tap action: $bad');
  pressed.add('VoiceOver tappable: $where');
}

String textOf(WidgetTester t, String k) {
  final w = t.widget<Text>(key(k));
  return w.data ?? w.textSpan!.toPlainText();
}

Future<void> shot(WidgetTester t, String name) async {
  final view = t.binding.renderViews.first;
  final layer = view.debugLayer! as OffsetLayer;
  final ratio = t.view.devicePixelRatio;
  await t.runAsync(() async {
    final img = await layer.toImage(Offset.zero & t.view.physicalSize, pixelRatio: ratio > 2 ? 2 / ratio : 1);
    final png = await img.toByteData(format: ui.ImageByteFormat.png);
    final dir = Directory('build/robot_shots')..createSync(recursive: true);
    File('${dir.path}/$name.png').writeAsBytesSync(png!.buffer.asUint8List());
  });
  shots.add(name);
}

void keyboard(WidgetTester t, bool up) {
  t.view.viewInsets = up ? FakeViewPadding(bottom: 336 * t.view.devicePixelRatio) : FakeViewPadding.zero;
}

Future<void> toTop(WidgetTester t, [String list = 'home-list']) async {
  await t.drag(scrollableOf(list), const Offset(0, 5000));
  await settle(t);
  await t.pump(const Duration(seconds: 1)); // let the bounce finish (a moving list ignores taps)
}

/// Scroll a list top to bottom, checking text on the way.
Future<void> sweep(WidgetTester t, String list, String where, {Key? last}) async {
  await toTop(t, list);
  for (var i = 0; i < 12; i++) {
    expectNoTruncatedText(t, '$where scroll $i');
    await t.drag(scrollableOf(list), const Offset(0, -260));
    await t.pump(const Duration(milliseconds: 100));
  }
  if (last != null) expect(find.byKey(last), findsOneWidget, reason: '$where: end of list reachable');
  await toTop(t, list);
}

Future<void> hunting(WidgetTester t, bool on) => press(t, find.text(on ? 'Hunting' : 'Fishing'), on ? 'Mode: Hunting' : 'Mode: Fishing');

SolunarDay engineDay(Place p, DateTime wallDay) => SolunarDay(p, wallDay);

void main() {
  WidgetController.hitTestWarningShouldBeFatal = true;
  tearDownAll(() {
    // ignore: avoid_print
    print('\n누른 버튼 (${pressed.toSet().length}종, ${pressed.length}회):\n  ${pressed.toSet().join('\n  ')}');
    // ignore: avoid_print
    print('스크린샷 ${shots.length}장: build/robot_shots/');
  });

  testWidgets('첫 실행: 안내 화면 없이 바로 메인(폰 시간대의 큰 마을) → 내 위치 → 모든 버튼', (t) async {
    await boot(t);
    // First launch: real times straight away for the biggest town in the phone's zone.
    expect(textOf(t, 'place-name'), 'Chicago, IL');
    expect(textOf(t, 'place-detail'), 'Biggest town in your time zone · Times in CDT');
    expect(loc.asked, 0, reason: 'no location prompt before the button');
    expectButtonsTappable(t, 'first launch');
    await shot(t, '01-first-launch');
    await press(t, key('use-location'), 'Use My Location (first launch)');
    expect(loc.asked, 1);
    expect(textOf(t, 'place-name'), 'My Location');
    expect(textOf(t, 'place-detail'), 'in Austin, TX · Times in CDT');
    expect(key('use-location'), findsNothing);

    // 화면 숫자 = 엔진 계산값
    final today = engineDay(AppStore.i.place!, DateTime.utc(2026, 10, 2));
    expect(textOf(t, 'score-number'), '${today.score.total}');
    expect(textOf(t, 'score-rating'), '${today.score.rating.label} day');
    expect(textOf(t, 'day-title'), 'Today · Oct 2');
    final status = NowStatus.at(testNow, SolunarDay.week(AppStore.i.place!, testNow, count: 3));
    expect(
      textOf(t, 'now-title'),
      status.current != null ? '${status.current!.kind.label} period now' : 'Next: ${status.next!.kind.label} period',
    );
    for (var i = 0; i < today.periods.length; i++) {
      await seeIn(t, 'home-list', key('period-$i'));
    }
    final z = PlaceZone('America/Chicago');
    await seeIn(t, 'home-list', key('sunrise'));
    expect(textOf(t, 'sunrise'), clock(today.sun.sunrise!, z));
    // VoiceOver: each list row is its own stop (the legal-light section used to read as one button).
    await seeIn(t, 'home-list', key('legal-change'));
    expectButtonsTappable(t, 'home (lists)');
    final sem = t.ensureSemantics();
    expect(find.bySemanticsLabel(RegExp(r'^Adjust for Your State')), findsOneWidget);
    expect(find.bySemanticsLabel(RegExp(r'Starts[\s\S]*Adjust')), findsNothing, reason: 'rows merged into one button');
    sem.dispose();
    await toTop(t);
    expectButtonsTappable(t, 'home');
    await shot(t, '02-home');
    await t.drag(scrollableOf('home-list'), const Offset(0, -640));
    await settle(t);
    await shot(t, '03-home-scrolled');

    // 사냥 보기: 다이얼 가운데가 허용 시간 카운트다운으로
    await toTop(t);
    await hunting(t, true);
    expect(AppStore.i.huntMode, isTrue);
    final legal = today.legalLight(30, 30)!;
    expect(textOf(t, 'legal-label'), 'Shooting light ends in');
    expect(textOf(t, 'legal-big'), duration(legal.end.difference(testNow)));
    expect(key('score-number'), findsNothing);
    await shot(t, '04-hunting');
    await hunting(t, false);
    expect(key('score-number'), findsOneWidget);

    // 주간 띠: 날마다 눌러 본다 → 점수가 그날로 바뀐다
    for (var i = 1; i < 7; i++) {
      await toTop(t);
      await press(t, key('day-$i'), 'Week strip day $i');
      final d = engineDay(AppStore.i.place!, DateTime.utc(2026, 10, 2 + i));
      expect(textOf(t, 'score-number'), '${d.score.total}');
      expect(key('now-card'), findsNothing, reason: 'no "now" for another day');
    }
    await toTop(t);
    await press(t, key('day-0'), 'Week strip Today');
    expect(textOf(t, 'day-title'), 'Today · Oct 2');

    // 점수 설명 화면
    await seeIn(t, 'home-list', key('how-scored'));
    await press(t, key('how-scored'), 'How Is This Scored?');
    expect(textOf(t, 'score-phase'), '${today.score.phasePoints} / 60');
    expect(textOf(t, 'score-timing'), '${today.score.timingPoints} / 25');
    expect(textOf(t, 'score-distance'), '${today.score.distancePoints} / 15');
    expectButtonsTappable(t, 'score page');
    await shot(t, '05-score');
    await back(t, 'Score');
    expect(key('home-list'), findsOneWidget);

    // 즐겨찾기: GPS 지점은 이름을 받는다
    await toTop(t);
    await press(t, key('fav-toggle'), '☆ Save (GPS spot)');
    expect(key('fav-name'), findsOneWidget);
    await shot(t, '06-save-spot');
    await press(t, key('fav-cancel'), 'Save spot · Cancel');
    expect(AppStore.i.favorites, isEmpty);
    await press(t, key('fav-toggle'), '☆ Save (GPS spot) again');
    await t.enterText(key('fav-name'), 'Deer stand');
    await press(t, key('fav-save'), 'Save spot · Save');
    expect(AppStore.i.favorites.single.name, 'Deer stand');
    expect(find.byIcon(CupertinoIcons.star_fill), findsOneWidget);
    await press(t, key('fav-toggle'), '★ Remove');
    expect(AppStore.i.favorites, isEmpty);
    await press(t, key('fav-toggle'), '☆ Save again');
    await t.enterText(key('fav-name'), 'Deer stand');
    await press(t, key('fav-save'), 'Save spot · Save (2)');

    // 설정: 사냥 허용 시간 오프셋
    await press(t, key('settings'), 'Settings');
    expectButtonsTappable(t, 'settings');
    await shot(t, '07-settings');
    await press(t, key('before-plus'), 'Before sunrise +5');
    expect(textOf(t, 'before-value'), '35 min');
    await press(t, key('before-minus'), 'Before sunrise −5');
    await press(t, key('after-minus'), 'After sunset −5');
    expect(textOf(t, 'after-value'), '25 min');
    await press(t, key('after-plus'), 'After sunset +5');
    await press(t, key('preset-30-0'), 'Quick set 30 / sunset');
    expect((AppStore.i.beforeSunrise, AppStore.i.afterSunset), (30, 0));
    await press(t, key('preset-0-0'), 'Quick set sunrise / sunset');
    for (var i = 0; i < 20; i++) {
      if (t.widget<CupertinoButton>(key('after-plus')).onPressed == null) break;
      await t.tap(key('after-plus'));
      await t.pump();
    }
    expect(AppStore.i.afterSunset, 90, reason: 'stops at 90');
    expect(t.widget<CupertinoButton>(key('before-minus')).onPressed, isNull, reason: 'stops at 0');
    await press(t, key('preset-30-30'), 'Quick set 30 / 30');
    await seeIn(t, 'settings-list', key('privacy-link'));
    await press(t, key('privacy-link'), 'Privacy Policy');
    expect(opened.last, privacyUrl);
    await back(t, 'Settings');
    expect(key('home-list'), findsOneWidget);

    // 사냥 허용 시간 칸의 "Adjust for Your State" → 같은 설정 화면
    await seeIn(t, 'home-list', key('legal-change'));
    await press(t, key('legal-change'), 'Adjust for Your State');
    expect(key('settings-list'), findsOneWidget);
    await back(t, 'Settings from Adjust');

    // 30일 달력: 영상 안 보면 잠김 그대로, 보면 24시간 열림
    await seeIn(t, 'home-list', key('open-calendar'));
    expect(textOf(t, 'calendar-hint'), 'A short video opens it for 24 h');
    await press(t, key('open-calendar'), '30-Day Calendar (locked)');
    await shot(t, '08-unlock-dialog');
    await press(t, key('unlock-cancel'), 'Unlock · Not Now');
    expect(AppStore.i.calendarOpen, isFalse);
    await press(t, key('open-calendar'), '30-Day Calendar (locked) again');
    await press(t, key('unlock-watch'), 'Unlock · Watch Video');
    expect((Ads.i as FakeAds).shown, [RewardPlacement.calendar]);
    expect(AppStore.i.calendarOpen, isTrue);
    expect(key('calendar-list'), findsOneWidget);
    expectButtonsTappable(t, 'calendar');
    await shot(t, '09-calendar');
    for (var i = 0; i < 30; i++) {
      await seeIn(t, 'calendar-list', key('cal-$i'));
    }
    await toTop(t, 'calendar-list');
    await seeIn(t, 'calendar-list', key('cal-20'));
    await press(t, key('cal-20'), 'Calendar day +20');
    expect(textOf(t, 'day-title'), dayLabel(DateTime.utc(2026, 10, 22)));
    await seeIn(t, 'home-list', key('open-calendar'));
    await press(t, key('open-calendar'), '30-Day Calendar (open)');
    expect((Ads.i as FakeAds).shown.length, 1, reason: 'no second video within 24 h');
    await seeIn(t, 'calendar-list', key('best-0'));
    await press(t, key('best-0'), 'Best day #1');
    final best = SolunarDay.week(AppStore.i.place!, testNow, count: 30).reduce((a, b) => b.score.total > a.score.total ? b : a);
    expect(textOf(t, 'score-number'), '${best.score.total}');
    await toTop(t);
    await press(t, key('day-0'), 'Week strip Today (after calendar)');

    // 장소: 검색 → 고르기, 저장한 곳, 내 위치
    await press(t, key('place-button'), 'Change place → Places');
    expect(key('fav-0'), findsOneWidget);
    expectButtonsTappable(t, 'places');
    await shot(t, '10-places');
    await t.enterText(key('place-search'), 'austin mn');
    await t.pump();
    expect(find.descendant(of: key('town-0'), matching: find.text('Austin, MN')), findsOneWidget);
    await shot(t, '11-places-search');
    await press(t, key('search-clear'), 'Search · Clear');
    expect(t.widget<CupertinoButton>(key('search-clear')).onPressed, isNull, reason: 'nothing to clear');
    expect(key('fav-0'), findsOneWidget);
    await t.enterText(key('place-search'), 'austin mn');
    await t.pump();
    await press(t, key('town-0'), 'Town result Austin, MN');
    expect(textOf(t, 'place-name'), 'Austin, MN');
    expect(textOf(t, 'place-detail'), 'Times in CDT');
    final mn = engineDay(AppStore.i.place!, DateTime.utc(2026, 10, 2));
    expect(textOf(t, 'score-number'), '${mn.score.total}');
    await press(t, key('place-button'), 'Places (2)');
    await press(t, key('fav-0'), 'Saved place Deer stand');
    expect(textOf(t, 'place-name'), 'Deer stand');
    await press(t, key('place-button'), 'Places (3)');
    await press(t, key('fav-del-0'), 'Delete saved place');
    expect(key('no-favorites'), findsOneWidget);
    await press(t, key('places-gps'), 'Places · Use My Location');
    expect(textOf(t, 'place-name'), 'My Location');
    await press(t, key('place-button'), 'Places (4)');
    await back(t, 'Places');
    expect(key('home-list'), findsOneWidget);
    await finish(t);
  });

  testWidgets('위치 거부: 안내 한 줄 → 마을 검색으로', (t) async {
    await boot(t, location: const LocationResult.failed(LocationProblem.denied));
    await press(t, key('use-location'), 'Use My Location (denied)');
    expect(textOf(t, 'location-error'), contains('search for a town'));
    expect(find.textContaining(RegExp('station', caseSensitive: false)), findsNothing, reason: 'tides wording left over');
    expect(textOf(t, 'place-name'), 'Chicago, IL', reason: 'still shows the guess');
    await press(t, key('place-button'), 'Places (after denial)');
    await press(t, key('places-gps'), 'Places · Use My Location (denied)');
    expect(key('places-error'), findsOneWidget);
    await t.enterText(key('place-search'), 'zzqqxx');
    await t.pump();
    expect(key('no-results'), findsOneWidget);
    await t.enterText(key('place-search'), 'Bangor, ME');
    await t.pump();
    await press(t, key('town-0'), 'Town result Bangor, ME');
    expect(textOf(t, 'place-name'), 'Bangor, ME');
    expect(textOf(t, 'place-detail'), 'Times in EDT');
    expect(key('use-location'), findsNothing, reason: 'a chosen town is no longer a guess');
    // A town (not GPS) saves without asking for a name.
    await press(t, key('fav-toggle'), '☆ Save town');
    expect(key('fav-name'), findsNothing);
    expect(AppStore.i.favorites.single.name, 'Bangor, ME');
    await finish(t);
  });

  testWidgets('다시 켜기: 장소·보기·설정 유지, 내 위치 따라가기는 움직였을 때만 바뀜', (t) async {
    await boot(t, granted: true);
    await press(t, key('use-location'), 'Use My Location');
    await hunting(t, true);
    await press(t, key('settings'), 'Settings');
    await press(t, key('preset-30-0'), 'Quick set 30 / sunset');
    await back(t, 'Settings');
    await finish(t);
    // Relaunch on the same spot: no new prompt, same place, still the Hunting view.
    await boot(t, granted: true, keepPrefs: true);
    expect(textOf(t, 'place-name'), 'My Location');
    expect(key('legal-big'), findsOneWidget);
    expect((AppStore.i.beforeSunrise, AppStore.i.afterSunset), (30, 0));
    await seeIn(t, 'home-list', key('legal-rule'));
    expect(textOf(t, 'legal-rule'), startsWith('30 min before sunrise to 0 min after sunset'));
    await finish(t);
    // Relaunch 200 miles away (Dallas): follows the phone.
    await boot(t, granted: true, keepPrefs: true, location: const LocationResult.found(32.7767, -96.7970));
    expect(textOf(t, 'place-detail'), startsWith('in Dallas, TX'));
    await finish(t);
    // Relaunch with no fix (indoors, no signal): keeps the last spot instead of failing.
    await boot(t, granted: true, keepPrefs: true, location: const LocationResult.failed(LocationProblem.unavailable));
    expect(textOf(t, 'place-detail'), startsWith('in Dallas, TX'));
    await finish(t);
  });

  for (final device in devices.keys) {
    for (final dark in [false, true]) {
      testWidgets('레이아웃: $device ${dark ? '다크' : '라이트'} — 메인 끝까지(낚시·사냥), 설정, 점수, 달력, 키보드', (t) async {
        await boot(t, device: device, dark: dark, prefs: {
          ...austinPrefs,
          'calendarUntil': testNow.add(const Duration(hours: 5)).toIso8601String(),
        });
        await sweep(t, 'home-list', device, last: const Key('footer'));
        await hunting(t, true);
        await sweep(t, 'home-list', '$device hunting', last: const Key('footer'));
        if (device == iphone13 && dark) await shot(t, '12-dark-hunting');
        await hunting(t, false);
        if (device == iphone13 && dark) await shot(t, '13-dark-home');
        await press(t, key('settings'), 'Settings ($device)');
        await sweep(t, 'settings-list', 'settings $device', last: const Key('privacy-link'));
        await back(t, 'Settings ($device)');
        await seeIn(t, 'home-list', key('how-scored'));
        await press(t, key('how-scored'), 'Score ($device)');
        await sweep(t, 'score-list', 'score $device');
        await back(t, 'Score ($device)');
        await seeIn(t, 'home-list', key('open-calendar'));
        await press(t, key('open-calendar'), 'Calendar ($device)');
        await sweep(t, 'calendar-list', 'calendar $device', last: const Key('best-4'));
        await back(t, 'Calendar ($device)');
        // Places with the keyboard up: field keeps focus, results still tappable above the keyboard.
        await toTop(t);
        await press(t, key('place-button'), 'Places ($device)');
        await t.tap(key('place-search'));
        keyboard(t, true);
        await t.pump();
        await t.enterText(key('place-search'), 'spring');
        await t.pump();
        expect(
          t.widget<EditableText>(find.descendant(of: key('place-search'), matching: find.byType(EditableText))).focusNode.hasFocus,
          isTrue,
        );
        if (device == iphone13 && !dark) await shot(t, '14-places-keyboard');
        await press(t, key('town-0'), 'Town result with keyboard ($device)');
        keyboard(t, false);
        await t.pump();
        expect(textOf(t, 'place-name'), 'Spring, TX');
        await finish(t);
      });
    }
  }

  testWidgets('큰 글씨 135% · iPhone SE: 겹침·잘림 없음', (t) async {
    await boot(t, device: 'iPhone SE (750x1334)', textScale: 1.35, prefs: {
      'place': '{"name":"Deer stand by the long creek","detail":"near Fredericksburg, TX","lat":30.27,"lng":-98.87,"tz":"America/Chicago"}',
    });
    await sweep(t, 'home-list', 'SE 135%', last: const Key('footer'));
    await hunting(t, true);
    await sweep(t, 'home-list', 'SE 135% hunting', last: const Key('footer'));
    await shot(t, '15-se-135-hunting');
    await seeIn(t, 'home-list', key('how-scored'));
    await press(t, key('how-scored'), 'Score (135%)');
    await sweep(t, 'score-list', 'score 135%');
    await back(t, 'Score (135%)');
    await toTop(t);
    await press(t, key('settings'), 'Settings (135%)');
    await sweep(t, 'settings-list', 'settings 135%', last: const Key('privacy-link'));
    await back(t, 'Settings (135%)');
    await seeIn(t, 'home-list', key('open-calendar'));
    await press(t, key('open-calendar'), 'Calendar unlock (135%)');
    await press(t, key('unlock-watch'), 'Watch (135%)');
    await sweep(t, 'calendar-list', 'calendar 135%', last: const Key('best-4'));
    await back(t, 'Calendar (135%)');
    await finish(t);
  });

  testWidgets('하루 24시간 내내: 지금 줄·사냥 카운트다운이 시각에 맞게 바뀐다', (t) async {
    await boot(t, prefs: {...austinPrefs, 'huntMode': true});
    final z = PlaceZone('America/Chicago');
    for (var h = 0; h < 24; h++) {
      clockNow = z.fromWall(DateTime.utc(2026, 10, 2, h, 10));
      await t.pump(const Duration(seconds: 21)); // the screen's own tick
      final days = SolunarDay.week(austin, clockNow, count: 3);
      final l = days.first.legalLight(30, 30)!;
      final label = textOf(t, 'legal-label');
      if (clockNow.isBefore(l.start)) {
        expect(label, 'Shooting light starts in', reason: 'h=$h');
      } else if (clockNow.isBefore(l.end)) {
        expect(label, 'Shooting light ends in', reason: 'h=$h');
      } else {
        expect(label, startsWith('Ended'), reason: 'h=$h');
        expect(textOf(t, 'legal-big'), clock(days[1].legalLight(30, 30)!.start, z));
      }
      final s = NowStatus.at(clockNow, days);
      expect(
        textOf(t, 'now-title'),
        s.current != null ? '${s.current!.kind.label} period now' : 'Next: ${s.next!.kind.label} period',
        reason: 'h=$h',
      );
      expectNoTruncatedText(t, 'h=$h');
      pressed.add('clock ${h.toString().padLeft(2, '0')}:10');
    }
    await finish(t);
  });

  testWidgets('자정이 지나면 "오늘"이 다음 날로 바뀐다 (앱을 켜 둔 채)', (t) async {
    await boot(t, prefs: austinPrefs);
    await press(t, key('day-2'), 'Week strip day 2');
    clockNow = DateTime.utc(2026, 10, 3, 5, 1); // 12:01 AM CDT Oct 3
    await t.pump(const Duration(seconds: 21));
    expect(textOf(t, 'day-title'), 'Tomorrow · Oct 4', reason: 'the picked day stays, now "tomorrow"');
    await toTop(t);
    await press(t, key('day-0'), 'Week strip Today (new day)');
    expect(textOf(t, 'day-title'), 'Today · Oct 3');
    clockNow = DateTime.utc(2026, 10, 5, 6); // two days later: the picked day is in the past
    await t.pump(const Duration(seconds: 21));
    expect(textOf(t, 'day-title'), 'Today · Oct 5');
    await finish(t);
  });

  testWidgets('광고 실패 경로: 중간에 닫음 / 영상 없음 / 늦게 옴', (t) async {
    await boot(t, prefs: austinPrefs, ads: FakeAds(result: RewardResult.closedEarly));
    await seeIn(t, 'home-list', key('open-calendar'));
    await press(t, key('open-calendar'), 'Calendar (video closed early)');
    await press(t, key('unlock-watch'), 'Watch → closed early');
    expect(AppStore.i.calendarOpen, isFalse);
    expect(key('closed-early'), findsOneWidget);
    await press(t, key('closed-early-ok'), 'Closed early · OK');
    expect(key('calendar-list'), findsNothing);
    await finish(t);

    await boot(t, prefs: austinPrefs, ads: FakeAds(result: RewardResult.unavailable, ready: false, delay: const Duration(seconds: 8)));
    await seeIn(t, 'home-list', key('open-calendar'));
    await press(t, key('open-calendar'), 'Calendar (no video)');
    await t.tap(key('unlock-watch'));
    pressed.add('Watch → no video');
    await t.pump(const Duration(milliseconds: 300));
    expect(key('video-loading'), findsOneWidget, reason: 'loading shown while waiting');
    await t.pump(const Duration(seconds: 8));
    await settle(t);
    expect(key('video-loading'), findsNothing);
    expect(AppStore.i.calendarOpen, isTrue, reason: 'no ad to show → open anyway');
    expect(key('calendar-list'), findsOneWidget);
    await back(t, 'Calendar (no video)');
    await finish(t);

    await boot(t, prefs: austinPrefs, ads: FakeAds(ready: false, delay: const Duration(seconds: 3)));
    await seeIn(t, 'home-list', key('open-calendar'));
    await press(t, key('open-calendar'), 'Calendar (slow video)');
    await t.tap(key('unlock-watch'));
    pressed.add('Watch → slow video');
    await t.pump(const Duration(milliseconds: 300));
    expect(key('video-loading'), findsOneWidget);
    await t.pump(const Duration(seconds: 3));
    await settle(t);
    expect(AppStore.i.calendarOpen, isTrue);
    expect(key('calendar-list'), findsOneWidget);
    await finish(t);
  });

  testWidgets('어디서나: 북극권 한겨울·백야·하와이·애리조나·캐나다·시드니 폰', (t) async {
    final spots = [
      ('{"name":"Utqiagvik, AK","lat":71.291,"lng":-156.789,"tz":"America/Anchorage"}', DateTime.utc(2026, 12, 15, 21), 'AKST'),
      ('{"name":"Utqiagvik, AK","lat":71.291,"lng":-156.789,"tz":"America/Anchorage"}', DateTime.utc(2026, 6, 21, 21), 'AKDT'),
      ('{"name":"Honolulu, HI","lat":21.307,"lng":-157.858,"tz":"Pacific/Honolulu"}', testNow, 'HST'),
      ('{"name":"Phoenix, AZ","lat":33.448,"lng":-112.074,"tz":"America/Phoenix"}', testNow, 'MST'),
      ('{"name":"Thunder Bay, ON","lat":48.382,"lng":-89.246,"tz":"America/Toronto"}', testNow, 'EDT'),
    ];
    for (final (json, now, abbr) in spots) {
      await boot(t, now: now, prefs: {'place': json, 'huntMode': true});
      expect(textOf(t, 'place-detail'), 'Times in $abbr');
      if (abbr == 'AKST') expect(textOf(t, 'legal-big'), 'No sunrise');
      if (abbr == 'AKDT') expect(textOf(t, 'legal-big'), 'Sun up all day');
      await sweep(t, 'home-list', abbr, last: const Key('footer'));
      for (var i = 1; i < 7; i++) {
        await toTop(t);
        await press(t, key('day-$i'), 'Week strip day $i ($abbr)');
      }
      await finish(t);
    }
    // A phone set to Sydney time with no US town in that zone: the guess falls back to New York.
    await boot(t, location: const LocationResult.found(-33.87, 151.21), deviceZone: 'Australia/Sydney');
    expect(textOf(t, 'place-name'), 'New York City, NY');
    await press(t, key('use-location'), 'Use My Location (Sydney)');
    expect(textOf(t, 'place-detail'), 'Times in AEST', reason: 'GPS spot follows the phone zone');
    expect(textOf(t, 'place-name'), 'My Location');
    await sweep(t, 'home-list', 'Sydney', last: const Key('footer'));
    await finish(t);
  });

  testWidgets('저장한 곳 20개 · 긴 이름: 목록이 끝까지 내려가고 지우기가 된다', (t) async {
    final favs = [
      for (var i = 0; i < 20; i++)
        '{"name":"Spot number $i with a really long name by the creek","lat":${30 + i * 0.1},"lng":-97.7,"tz":"America/Chicago"}',
    ];
    await boot(t, prefs: {...austinPrefs, 'favorites': '[${favs.join(',')}]'});
    await press(t, key('place-button'), 'Places (20 saved)');
    await seeIn(t, 'places-list', key('fav-19'));
    await press(t, key('fav-del-19'), 'Delete saved #20');
    expect(AppStore.i.favorites.length, 19);
    await seeIn(t, 'places-list', key('fav-10'));
    await press(t, key('fav-10'), 'Saved place #11');
    expect(textOf(t, 'place-name'), startsWith('Spot number 10'));
    await finish(t);
  });
}
