// 테스트 로봇 — 모든 화면의 모든 버튼을 실제로 눌러 본다.
// 막힌 길(버튼이 안 먹음)·깨진 레이아웃(overflow 는 Flutter 가 예외로 던져 실패)·잘린 글자·VoiceOver 로 못 누르는 버튼을 잡는다.
// 기기 3종 × 라이트/다크 × 큰 글씨까지 돌고, 화면마다 스크린샷을 build/robot_shots/ 에 남긴다.
// 실행: flutter test test/robot_test.dart  → 누른 버튼 목록이 로그로 찍힌다.
import 'dart:io';
import 'dart:ui' as ui;
import 'dart:ui' show Tristate;

import 'package:bible/core/ads.dart';
import 'package:bible/core/notify.dart';
import 'package:bible/core/plan.dart';
import 'package:bible/core/share.dart';
import 'package:bible/core/store.dart';
import 'package:bible/core/web_demo.dart';
import 'package:bible/main.dart';
import 'package:clock/clock.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

final pressed = <String>[];
final screens = <String>{};
final shots = <String>[];

const devices = {
  'iPhone 13 (1170x2532)': (Size(390, 844), 3.0),
  'iPhone SE (750x1334)': (Size(375, 667), 2.0),
  'iPhone 15 Pro Max (1290x2796)': (Size(430, 932), 3.0),
};

/// 테스트 시계 — 바꾸면 앱의 '오늘' 이 바뀐다.
var now = DateTime(2026, 10, 6, 8, 30);
late FakeNotifier notifier;

Future<void> boot(
  WidgetTester t, {
  Size size = const Size(390, 844),
  double ratio = 3,
  Map<String, Object> prefs = const {},
  Brightness brightness = Brightness.light,
  double textScale = 1,
  bool resetPrefs = true,
}) async {
  t.view.physicalSize = size * ratio;
  t.view.devicePixelRatio = ratio;
  t.view.padding = FakeViewPadding(top: 47 * ratio, bottom: 34 * ratio);
  addTearDown(t.view.reset);
  t.platformDispatcher.platformBrightnessTestValue = brightness;
  t.platformDispatcher.textScaleFactorTestValue = textScale;
  addTearDown(t.platformDispatcher.clearAllTestValues);
  if (resetPrefs) SharedPreferences.setMockInitialValues(prefs);
  Ads.i = FakeAds();
  notifier = FakeNotifier();
  Notifier.i = notifier;
  Outside.log.clear();
  Outside.shareCsv = (name, csv) async => Outside.log.add('share $name\n$csv');
  Outside.open = (url) async => Outside.log.add('open $url');
  AppStore.i = AppStore();
  await t.runAsync(AppStore.i.load);
  await t.pumpWidget(const BibleApp());
  await t.pump(const Duration(milliseconds: 400));
}

Future<T> at<T>(Future<T> Function() body) => withClock(Clock(() => now), body);

Future<void> settle(WidgetTester t) async {
  await t.pump();
  await t.pump(const Duration(milliseconds: 400));
  await t.pump(const Duration(milliseconds: 1200));
}

Future<void> press(WidgetTester t, Finder f, String label) async {
  expect(f, findsOneWidget, reason: 'button not found: $label');
  final r = t.getRect(f);
  final view = t.view.physicalSize / t.view.devicePixelRatio;
  if (r.top < 100 || r.bottom > view.height - 170) {
    await t.ensureVisible(f);
    await t.pump();
    await t.pump(const Duration(milliseconds: 800));
  }
  await t.tap(f);
  pressed.add(label);
  await settle(t);
}

Future<void> tab(WidgetTester t, String name) => press(t, find.text(name).last, 'Tab: $name');

String textOf(WidgetTester t, Key k) {
  final f = find.byKey(k);
  final w = t.widget(f) is Text ? t.widget<Text>(f) : t.widget<Text>(find.descendant(of: f, matching: find.byType(Text)).first);
  return w.data ?? w.textSpan?.toPlainText() ?? '';
}

/// 화면 점검 한 묶음: 한글 없음 · 잘린 글자 없음 · VoiceOver 버튼 · 스크린샷.
Future<void> check(WidgetTester t, String screen, {String? shot}) async {
  screens.add(screen);
  final ko = RegExp(r'[가-힣]');
  for (final e in find.byType(RichText).evaluate()) {
    final s = (e.widget as RichText).text.toPlainText();
    expect(ko.hasMatch(s), isFalse, reason: 'Korean text on $screen: $s');
  }
  for (final ro in t.allRenderObjects.whereType<RenderParagraph>()) {
    if (!ro.attached || !ro.hasSize) continue;
    expect(ro.didExceedMaxLines, isFalse, reason: '$screen: text cut off: "${ro.text.toPlainText()}"');
  }
  expectButtonsTappable(t, screen);
  if (shot != null) await takeShot(t, shot);
}

void expectButtonsTappable(WidgetTester t, String where) {
  final sem = t.ensureSemantics();
  final bad = <String>[];
  void visit(SemanticsNode n) {
    final d = n.getSemanticsData();
    final f = d.flagsCollection;
    if (f.isButton && !d.hasAction(SemanticsAction.tap) && f.isEnabled != Tristate.isFalse) bad.add(d.label);
    n.visitChildren((c) {
      visit(c);
      return true;
    });
  }

  visit(t.binding.renderViews.first.owner!.semanticsOwner!.rootSemanticsNode!);
  sem.dispose();
  expect(bad, isEmpty, reason: '$where: buttons without a tap action: $bad');
}

Future<void> takeShot(WidgetTester t, String name) async {
  final layer = t.binding.renderViews.first.debugLayer! as OffsetLayer;
  final ratio = t.view.devicePixelRatio;
  await t.runAsync(() async {
    final img = await layer.toImage(Offset.zero & t.view.physicalSize, pixelRatio: ratio > 2 ? 2 / ratio : 1);
    final png = await img.toByteData(format: ui.ImageByteFormat.png);
    final dir = Directory('build/robot_shots')..createSync(recursive: true);
    File('${dir.path}/$name.png').writeAsBytesSync(png!.buffer.asUint8List());
  });
  shots.add(name);
}

Future<void> finish(WidgetTester t) async {
  await t.pumpWidget(const SizedBox());
  await t.pump(const Duration(seconds: 1));
}

/// 테스트 기본 글꼴(Ahem)은 글자마다 정사각형이라 가짜 넘침이 난다 → SDK Roboto 를 iOS 시스템 글꼴 이름으로.
Future<void> loadFonts() async {
  const dir = 'bin/cache/artifacts/material_fonts';
  final root = Platform.environment['FLUTTER_ROOT'] ?? '/opt/flutter';
  for (final family in ['CupertinoSystemText', 'CupertinoSystemDisplay']) {
    final loader = FontLoader(family);
    for (final w in ['Regular', 'Medium', 'Bold']) {
      final f = File('$root/$dir/Roboto-$w.ttf');
      if (f.existsSync()) loader.addFont(Future.value(ByteData.sublistView(f.readAsBytesSync())));
    }
    await loader.load();
  }
  // 아이콘이 네모로 찍히지 않게 CupertinoIcons 글꼴도
  final home = Platform.environment['PUB_CACHE'] ?? '${Platform.environment['HOME']}/.pub-cache';
  final icons = File('$home/hosted/pub.dev/cupertino_icons-1.0.9/assets/CupertinoIcons.ttf');
  if (icons.existsSync()) {
    await (FontLoader('packages/cupertino_icons/CupertinoIcons')
          ..addFont(Future.value(ByteData.sublistView(icons.readAsBytesSync()))))
        .load();
  }
}

String reading(WidgetTester t) => textOf(t, const Key('reading')).replaceAll('\n', ' · ');
String kicker(WidgetTester t) => textOf(t, const Key('kicker'));
String count(WidgetTester t) => textOf(t, const Key('count'));

void main() {
  WidgetController.hitTestWarningShouldBeFatal = true;
  setUpAll(loadFonts);
  setUp(() => now = DateTime(2026, 10, 6, 8, 30));
  tearDownAll(() {
    // ignore: avoid_print
    print(
      'ROBOT pressed ${pressed.toSet().length} distinct buttons (${pressed.length} presses) on ${screens.length} screens:\n'
      '  screens: ${screens.join(', ')}\n'
      '  buttons: ${pressed.toSet().join(', ')}\n'
      '  shots: ${shots.length}',
    );
  });

  testWidgets('first launch: today = Genesis 1–3, no ad on Today, Change Plan opens Plan', (t) async {
    await at(() async {
      await boot(t);
      expect(reading(t), 'Genesis 1–3');
      expect(kicker(t), "TODAY'S READING");
      expect(textOf(t, const Key('date')), 'TUESDAY, OCTOBER 6');
      expect(textOf(t, const Key('plan-line')), 'Whole Bible · Day 1 of 365');
      expect(count(t), '0 of 1,189 chapters');
      expect(find.byKey(const Key('banner')), findsNothing, reason: 'no ads on Today');
      expect(find.byKey(const Key('undo')), findsNothing);
      await check(t, 'Today (first launch)', shot: '01-today-first');
      await press(t, find.byKey(const Key('change-plan')), 'Today: Change Plan');
      expect(find.byKey(const Key('scope-whole')), findsOneWidget);
      expect(find.byKey(const Key('banner')), findsOneWidget, reason: 'banner on Plan');
      await finish(t);
    });
  });

  testWidgets('Mark as Read fills the map, Undo, Read Ahead, saved across restarts', (t) async {
    await at(() async {
      await boot(t);
      await press(t, find.byKey(const Key('mark-read')), 'Today: Mark as Read');
      expect(kicker(t), 'DAY 1 · READ');
      expect(reading(t), 'Genesis 1–3');
      expect(count(t), '3 of 1,189 chapters');
      expect(textOf(t, const Key('next')), 'Next: Genesis 4–6');
      expect(find.byKey(const Key('mark-read')), findsNothing);
      expect(find.byKey(const Key('change-plan')), findsNothing, reason: 'first-run note goes away');
      await check(t, 'Today (read)', shot: '02-today-read');

      // 연타해도 하루치만
      await t.tap(find.byKey(const Key('read-ahead')));
      await t.pump(const Duration(milliseconds: 50));
      await t.tap(find.byKey(const Key('read-ahead')));
      pressed.add('Today: Read Ahead (double tap)');
      await settle(t);
      expect(count(t), '6 of 1,189 chapters');
      expect(reading(t), 'Genesis 4–6');
      expect(textOf(t, const Key('next')), 'Next: Genesis 7–10');

      await press(t, find.byKey(const Key('undo')), 'Today: Undo');
      expect(count(t), '3 of 1,189 chapters');

      // 다시 켜도 그대로
      await finish(t);
      await boot(t, resetPrefs: false);
      expect(count(t), '3 of 1,189 chapters');
      expect(kicker(t), 'DAY 1 · READ');

      // 다음 날 아침 — 다음 분량이 주인공
      now = DateTime(2026, 10, 7, 7);
      AppStore.i.refresh();
      await settle(t);
      expect(kicker(t), "TODAY'S READING");
      expect(reading(t), 'Genesis 4–6');
      expect(find.byKey(const Key('undo')), findsOneWidget);
      await press(t, find.byKey(const Key('undo')), 'Today: Undo Last');
      expect(count(t), '0 of 1,189 chapters');
      await finish(t);
    });
  });

  testWidgets('behind: gentle note, Adjust Schedule → spread keeps finish date, continue moves it', (t) async {
    await at(() async {
      await boot(t);
      await press(t, find.byKey(const Key('mark-read')), 'Today: Mark as Read');
      final end = AppStore.i.schedule.endDay;
      now = DateTime(2026, 10, 12, 9); // 6일 뒤
      AppStore.i.refresh();
      await settle(t);
      expect(kicker(t), 'PICK UP WHERE YOU LEFT OFF');
      expect(reading(t), 'Genesis 4–6');
      expect(textOf(t, const Key('behind')), "You're 5 readings behind the calendar — that's okay.");
      await check(t, 'Today (behind)', shot: '03-today-behind');
      await press(t, find.byKey(const Key('adjust')), 'Today: Adjust Schedule');
      await check(t, 'Adjust sheet', shot: '04-adjust-sheet');
      await press(t, find.byKey(const Key('spread')), 'Adjust: Spread the rest');
      expect(AppStore.i.schedule.endDay, end);
      expect(AppStore.i.behind, 1);
      expect(kicker(t), "TODAY'S READING");
      expect(find.byKey(const Key('behind')), findsNothing);

      now = DateTime(2026, 10, 20, 9);
      AppStore.i.refresh();
      await settle(t);
      await press(t, find.byKey(const Key('adjust')), 'Today: Adjust Schedule (2)');
      await press(t, find.byKey(const Key('shift')), 'Adjust: Continue from today');
      expect(AppStore.i.schedule.endDay, greaterThan(end));
      expect(AppStore.i.behind, 1);
      await finish(t);
    });
  });

  testWidgets('Map: books of the plan, chapters fill, streak, banner at bottom', (t) async {
    await at(() async {
      await boot(t);
      for (var d = 0; d < 3; d++) {
        now = DateTime(2026, 10, 6 + d, 8);
        AppStore.i.refresh();
        await settle(t);
        await press(t, find.byKey(const Key('mark-read')), 'Today: Mark as Read (day ${d + 1})');
      }
      await tab(t, 'Map');
      expect(textOf(t, const Key('map-summary')), '10 of 1,189 chapters · 0%');
      expect(textOf(t, const Key('streak')), '3 days in a row');
      expect(find.text('OLD TESTAMENT'), findsOneWidget);
      expect(find.bySemanticsLabel('Genesis, 10 of 50 chapters read'), findsOneWidget);
      expect(find.byKey(const Key('banner')), findsOneWidget);
      await check(t, 'Map', shot: '05-map');
      await t.drag(find.byKey(const Key('map-list')), const Offset(0, -3000));
      await settle(t);
      expect(find.text('NEW TESTAMENT'), findsOneWidget);
      await check(t, 'Map (scrolled)', shot: '06-map-nt');
      await tab(t, 'Today');
      expect(reading(t), isNotEmpty);
      await finish(t);
    });
  });

  testWidgets('Plan: every row — scope, length, order, start date, reminder, export, privacy', (t) async {
    await at(() async {
      await boot(t);
      await press(t, find.byKey(const Key('mark-read')), 'Today: Mark as Read');
      await tab(t, 'Plan');
      await check(t, 'Plan', shot: '07-plan');

      // 진행이 있으면 묻는다 — 취소하면 그대로
      await press(t, find.byKey(const Key('scope-newTestament')), 'Plan: New Testament');
      expect(find.text('Start a New Plan?'), findsOneWidget);
      await check(t, 'New plan dialog', shot: '08-plan-confirm');
      await press(t, find.text('Cancel'), 'Dialog: Cancel');
      expect(AppStore.i.scope, Scope.whole);
      expect(AppStore.i.done, 1);
      await press(t, find.byKey(const Key('scope-newTestament')), 'Plan: New Testament (again)');
      await press(t, find.byKey(const Key('confirm-new-plan')), 'Dialog: Start New Plan');
      expect(AppStore.i.scope, Scope.newTestament);
      expect(AppStore.i.length, 260);
      expect(AppStore.i.done, 0);

      // 진행 0 이면 바로 바뀐다
      await press(t, find.byKey(const Key('len-90')), 'Plan: 90 Days');
      expect(AppStore.i.length, 90);
      await press(t, find.byKey(const Key('order-chronological')), 'Plan: Chronological');
      expect(AppStore.i.order, Order.chronological);
      await tab(t, 'Today');
      expect(reading(t), startsWith('Luke 1'));
      expect(textOf(t, const Key('plan-line')), 'New Testament · Chronological · Day 1 of 90');
      await tab(t, 'Plan');
      await press(t, find.byKey(const Key('scope-psalmsProverbs')), 'Plan: Psalms & Proverbs');
      expect(find.byKey(const Key('order')), findsNothing, reason: 'no order choice for Psalms & Proverbs');
      await press(t, find.byKey(const Key('len-60')), 'Plan: 60 Days');
      await press(t, find.byKey(const Key('scope-whole')), 'Plan: Whole Bible');
      expect(AppStore.i.length, 365);

      // 시작일
      await press(t, find.byKey(const Key('start-date')), 'Plan: Start Date');
      await check(t, 'Start date picker', shot: '09-start-date');
      await t.drag(find.byType(CupertinoPicker).at(1), const Offset(0, 40));
      await settle(t);
      await press(t, find.byKey(const Key('picker-done')), 'Picker: Done');
      expect(textOf(t, const Key('start-value')), isNot('Oct 6, 2026'));
      expect(textOf(t, const Key('end-value')), isNotEmpty);

      // 알림
      await press(t, find.byKey(const Key('reminder')), 'Plan: Daily Reminder on');
      expect(notifier.asked, 1);
      expect(AppStore.i.reminderOn, isTrue);
      expect(notifier.scheduled, isNotEmpty);
      expect(notifier.scheduled.first.body, contains('about'));
      expect(notifier.scheduled.every((n) => n.when.isAfter(now)), isTrue);
      expect(notifier.scheduled.first.when.hour, 7);
      await press(t, find.byKey(const Key('reminder-time')), 'Plan: Reminder Time');
      await press(t, find.byKey(const Key('picker-done')), 'Picker: Done (time)');
      await check(t, 'Plan (reminder on)', shot: '10-plan-reminder');

      // 허락 안 하면 켜지지 않는다
      await press(t, find.byKey(const Key('reminder')), 'Plan: Daily Reminder off');
      expect(AppStore.i.reminderOn, isFalse);
      expect(notifier.scheduled, isEmpty);
      notifier.allow = false;
      await press(t, find.byKey(const Key('reminder')), 'Plan: Daily Reminder (denied)');
      expect(AppStore.i.reminderOn, isFalse);

      await press(t, find.byKey(const Key('export')), 'Plan: Export CSV');
      final csv = Outside.log.last;
      expect(csv, startsWith('share bible-reading-'));
      expect(csv.split('\n').where((l) => l.isNotEmpty).length, 1 + 1 + 365);
      await press(t, find.byKey(const Key('privacy')), 'Plan: Privacy Policy');
      expect(Outside.log.last, 'open https://soulfulfillable.github.io/test-mvp/bible-privacy.html');
      await finish(t);
    });
  });

  testWidgets('reminder is skipped for a day already read', (t) async {
    await at(() async {
      await boot(t);
      AppStore.i.setReminder(on: true, minute: 20 * 60);
      expect(notifier.scheduled.first.when.day, 6);
      await press(t, find.byKey(const Key('mark-read')), 'Today: Mark as Read');
      expect(notifier.scheduled.first.when.day, 7);
      expect(notifier.scheduled.first.body, startsWith('Genesis 4–6'));
      await finish(t);
    });
  });

  testWidgets('finish a whole plan → Plan Complete → Start a New Plan', (t) async {
    await at(() async {
      await boot(t);
      AppStore.i.startPlan(Scope.psalmsProverbs, Order.canonical, 60);
      await settle(t);
      for (var i = 0; i < 59; i++) {
        AppStore.i.markRead();
      }
      await settle(t);
      expect(textOf(t, const Key('plan-line')), 'Psalms & Proverbs · Day 59 of 60');
      await press(t, find.byKey(const Key('read-ahead')), 'Today: Read Ahead (last)');
      expect(kicker(t), 'PLAN COMPLETE');
      expect(count(t), '181 of 181 chapters');
      await check(t, 'Today (complete)', shot: '11-today-complete');
      await press(t, find.byKey(const Key('new-plan')), 'Today: Start a New Plan');
      expect(find.byKey(const Key('scope-whole')), findsOneWidget);
      await finish(t);
    });
  });

  testWidgets('broken saved data opens a fresh plan instead of a gray screen', (t) async {
    await at(() async {
      for (final junk in ['{', '[]', '{"scope":"whole"}', '{"scope":"nope","order":"canonical","length":3,"cuts":[0,5],"dates":[1],"doneOn":[]}',
        '{"scope":"whole","order":"canonical","length":365,"cuts":[0,3],"dates":[1],"doneOn":[]}']) {
        await boot(t, prefs: {'bible.state.v1': junk});
        expect(reading(t), 'Genesis 1–3', reason: junk);
        await finish(t);
      }
    });
  });

  testWidgets('web demo link (?demo=40&behind=3) shows a realistic state without saving', (t) async {
    await at(() async {
      await boot(t);
      applyWebDemo(Uri.parse('https://x/?demo=40&behind=3'));
      await settle(t);
      expect(AppStore.i.done, 40);
      expect(kicker(t), 'PICK UP WHERE YOU LEFT OFF');
      final p = await SharedPreferences.getInstance();
      expect(p.getString('bible.state.v1'), isNull);
      await finish(t);
    });
  });

  for (final dev in devices.entries) {
    for (final dark in [false, true]) {
      for (final scale in [1.0, 1.35]) {
        final tag = '${dev.key.split(' (').first.replaceAll(' ', '')}-${dark ? 'dark' : 'light'}-${scale == 1 ? '100' : '135'}';
        testWidgets('layout $tag: every tab, mid-plan', (t) async {
          await at(() async {
            await boot(t, size: dev.value.$1, ratio: dev.value.$2, brightness: dark ? Brightness.dark : Brightness.light, textScale: scale);
            AppStore.i.showDemo(Scope.whole, Order.chronological, 120, 3);
            await settle(t);
            await check(t, 'Today $tag', shot: 'L-$tag-today');
            await t.drag(find.byKey(const Key('today-list')), const Offset(0, -2000));
            await settle(t);
            await check(t, 'Today scrolled $tag');
            await tab(t, 'Map');
            await check(t, 'Map $tag', shot: 'L-$tag-map');
            await tab(t, 'Plan');
            await check(t, 'Plan $tag', shot: 'L-$tag-plan');
            await t.drag(find.byKey(const Key('plan-list')), const Offset(0, -3000));
            await settle(t);
            await check(t, 'Plan bottom $tag');
            await finish(t);
          });
        });
      }
    }
  }
}
