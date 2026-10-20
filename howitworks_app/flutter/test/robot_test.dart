// 테스트 로봇 — 모든 화면·모든 버튼을 실제로 누른다 (레슨 30개 × 번호 6개·화살표·재생/정지·퀴즈·출처·저장·다음·뒤로,
// 잠긴 레슨, 날짜 넘김, 큰 글씨·다크 모드·작은/큰 기기). 넘침(overflow)은 Flutter 가 예외로 던져 실패시킨다.
// 실행: flutter test test/robot_test.dart  → 누른 버튼 수·화면 목록이 끝에 찍히고 build/robot_shots/ 에 화면 사진.
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/cupertino.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:howthingswork/app.dart';
import 'package:howthingswork/core/lesson.dart';
import 'package:howthingswork/core/scene.dart';
import 'package:howthingswork/core/store.dart';
import 'package:howthingswork/screens/widgets.dart';
import 'package:shared_preferences/shared_preferences.dart';

final pressed = <String>[];
final shots = <String>[];
final opened = <String>[];
late LessonLibrary lib;

Future<void> loadFonts() async {
  final root = Platform.environment['FLUTTER_ROOT'] ?? '/opt/flutter-sdk/flutter';
  for (final family in ['CupertinoSystemText', 'CupertinoSystemDisplay', 'Roboto', 'Noteworthy']) {
    final loader = FontLoader(family);
    for (final w in ['Regular', 'Medium', 'Bold']) {
      final f = File('$root/bin/cache/artifacts/material_fonts/Roboto-$w.ttf');
      if (f.existsSync()) loader.addFont(Future.value(ByteData.sublistView(f.readAsBytesSync())));
    }
    await loader.load();
  }
  final icons = File('$root/bin/cache/artifacts/material_fonts/../../pkg/sky_engine/lib/_embedder.yaml');
  if (icons.existsSync()) {}
  // CupertinoIcons 글꼴 (pub 캐시)
  final pub = Platform.environment['PUB_CACHE'] ?? '${Platform.environment['HOME']}/.pub-cache';
  final dir = Directory('$pub/hosted/pub.dev');
  if (dir.existsSync()) {
    final ci = dir.listSync().whereType<Directory>().where((d) => d.path.contains('cupertino_icons-')).toList();
    if (ci.isNotEmpty) {
      final ttf = File('${ci.last.path}/assets/CupertinoIcons.ttf');
      if (ttf.existsSync()) {
        final l = FontLoader('packages/cupertino_icons/CupertinoIcons')..addFont(Future.value(ByteData.sublistView(ttf.readAsBytesSync())));
        await l.load();
      }
    }
  }
  diagramFontFamily = 'Roboto';
}

Future<Store> boot(
  WidgetTester t, {
  Size size = const Size(390, 844),
  double ratio = 3,
  int installedDaysAgo = 0,
  Brightness brightness = Brightness.light,
  double textScale = 1,
  DateTime? now,
}) async {
  t.view.physicalSize = size * ratio;
  t.view.devicePixelRatio = ratio;
  t.view.padding = FakeViewPadding(top: 47 * ratio, bottom: 34 * ratio);
  addTearDown(t.view.reset);
  t.platformDispatcher.platformBrightnessTestValue = brightness;
  t.platformDispatcher.textScaleFactorTestValue = textScale;
  addTearDown(t.platformDispatcher.clearAllTestValues);
  final today = now ?? DateTime(2026, 10, 20, 9);
  final d = DateTime.utc(today.year, today.month, today.day).millisecondsSinceEpoch ~/ 86400000;
  SharedPreferences.setMockInitialValues({'installDay': d - installedDaysAgo});
  final store = await Store.open(now: () => today);
  openUrl = (u) async => opened.add(u);
  await t.pumpWidget(HowThingsWorkApp(library: lib, store: store));
  await settle(t);
  return store;
}

/// 레슨 본문은 gzip 을 풀어 읽는 진짜 비동기라 runAsync 로 기다린다
Future<void> settle(WidgetTester t) async {
  for (var i = 0; i < 6; i++) {
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
    await t.pump(const Duration(milliseconds: 200));
  }
}

Future<void> reveal(WidgetTester t, Finder f) async {
  if (f.evaluate().isEmpty) {
    final sc = find.byWidgetPredicate((w) => w is Scrollable && w.axisDirection == AxisDirection.down).last;
    // 아래로 찾다가 끝까지 가도 없으면 위로 (목록에서 돌아오면 스크롤 위치가 아래일 수 있다)
    for (final dy in [300.0, -300.0]) {
      if (f.evaluate().isNotEmpty) break;
      for (var i = 0; i < 80 && f.evaluate().isEmpty; i++) {
        final pos = t.state<ScrollableState>(sc).position;
        if ((dy > 0 && pos.pixels >= pos.maxScrollExtent) || (dy < 0 && pos.pixels <= pos.minScrollExtent)) break;
        pos.jumpTo((pos.pixels + dy).clamp(pos.minScrollExtent, pos.maxScrollExtent));
        await t.pump(const Duration(milliseconds: 50));
      }
    }
    if (f.evaluate().isNotEmpty) await t.ensureVisible(f);
    await t.pump(const Duration(milliseconds: 300));
  }
}

Future<void> press(WidgetTester t, Finder f, String label, {bool scroll = true}) async {
  if (scroll) await reveal(t, f);
  expect(f, findsOneWidget, reason: 'button not found: $label');
  if (scroll) {
    final r = t.getRect(f);
    final view = t.view.physicalSize / t.view.devicePixelRatio;
    if (r.top < 110 || r.bottom > view.height - 100) {
      await t.ensureVisible(f);
      await t.pump();
      await t.pump(const Duration(milliseconds: 600));
      // 아래 탭 바에 가려지지 않게 조금 더 올린다
      final r2 = t.getRect(f);
      if (r2.bottom > view.height - 100) {
        await t.drag(find.byType(Scrollable).last, const Offset(0, -160));
        await t.pump(const Duration(milliseconds: 400));
      }
    }
  }
  await t.tap(f);
  pressed.add(label);
  await t.pump();
  await t.pump(const Duration(milliseconds: 300));
}

Future<void> shot(WidgetTester t, String name) async {
  await t.pump(const Duration(milliseconds: 300));
  final view = t.binding.renderViews.first;
  final layer = view.debugLayer! as OffsetLayer;
  await t.runAsync(() async {
    final img = await layer.toImage(Offset.zero & t.view.physicalSize);
    final png = await img.toByteData(format: ui.ImageByteFormat.png);
    final dir = Directory('build/robot_shots')..createSync(recursive: true);
    File('${dir.path}/$name.png').writeAsBytesSync(png!.buffer.asUint8List());
  });
  shots.add(name);
}

String callout(WidgetTester t) => find
    .descendant(of: find.byKey(const Key('callout')), matching: find.byType(Text))
    .evaluate()
    .map((e) => (e.widget as Text).data ?? '')
    .join(' ');

void noKorean(WidgetTester t, String where) {
  final bad = find.byType(Text).evaluate().map((e) => (e.widget as Text).data ?? '').where((s) => RegExp(r'[가-힣]').hasMatch(s));
  expect(bad, isEmpty, reason: 'Korean text on $where');
}

/// 버튼처럼 보이는 접근성 노드는 모두 tap 동작이 있어야 한다 (VoiceOver 로 누를 수 있게)
void buttonsTappable(WidgetTester t, String where) {
  final root = t.binding.pipelineOwner.semanticsOwner!.rootSemanticsNode!;
  final bad = <String>[];
  void visit(SemanticsNode n) {
    final d = n.getSemanticsData();
    if (d.flagsCollection.isButton && d.flagsCollection.isEnabled != ui.Tristate.isFalse && !d.hasAction(SemanticsAction.tap)) bad.add(d.label);
    n.visitChildren((c) {
      visit(c);
      return true;
    });
  }

  visit(root);
  expect(bad, isEmpty, reason: '$where: buttons without tap action: $bad');
}

void main() {
  WidgetController.hitTestWarningShouldBeFatal = true;
  setUpAll(() async {
    await loadFonts();
    lib = await LessonLibrary.load();
  });
  tearDownAll(() {
    // ignore: avoid_print
    print('\n누른 버튼 ${pressed.length}개 · 화면 사진 ${shots.length}장 · 연 출처 링크 ${opened.length}개\n화면: ${shots.join(', ')}');
  });

  test('레슨 30개, 날짜 1~30 빠짐없이', () {
    expect(lib.index.length, 30);
    expect(lib.index.map((e) => e.day).toList(), List.generate(30, (i) => i + 1));
  });

  testWidgets('첫 실행: 오늘(1일째) = 전자레인지, 나머지는 잠김', (t) async {
    final sem = t.ensureSemantics();
    await boot(t);
    expect(find.text('Today'), findsWidgets);
    expect(find.byKey(const Key('lesson-title')), findsOneWidget);
    expect(find.text('Microwave Oven'), findsOneWidget);
    expect(find.text('1-day streak'), findsOneWidget);
    noKorean(t, 'Today');
    buttonsTappable(t, 'Today');
    await shot(t, '01-today');
    // 다음 레슨은 잠김
    await t.ensureVisible(find.byKey(const Key('next-lesson')));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.text('Tomorrow'), findsOneWidget);
    await press(t, find.byKey(const Key('next-lesson')), 'Today: locked next lesson (does nothing)');
    expect(find.byKey(const Key('back')), findsNothing);
    // Library: 잠긴 레슨 → 안내
    await press(t, find.byKey(const Key('tab-library')), 'Tab: Library', scroll: false);
    await settle(t);
    expect(find.text('0 of 30 learned · a new one every day'), findsOneWidget);
    await shot(t, '02-library-first-day');
    await press(t, find.byKey(const Key('cat-toilet')), 'Library: locked Flush Toilet');
    expect(find.text('Unlocks tomorrow'), findsWidgets);
    await press(t, find.byKey(const Key('lock-ok')), 'Locked dialog: OK', scroll: false);
    await t.pump(const Duration(milliseconds: 600));
    expect(find.byType(CupertinoAlertDialog), findsNothing);
    await press(t, find.byKey(const Key('cat-microwave')), 'Library: Microwave Oven');
    await settle(t);
    expect(find.byKey(const Key('back')), findsOneWidget);
    await press(t, find.byKey(const Key('back')), 'Lesson: Back', scroll: false);
    await settle(t);
    expect(find.text('Library'), findsWidgets);
    sem.dispose();
  });

  testWidgets('날짜가 지나면 다음 레슨이 오늘의 레슨 (3일째 = 냉장고, 연속 기록 끊김/이어짐)', (t) async {
    await boot(t, installedDaysAgo: 2);
    expect(find.text('Refrigerator'), findsOneWidget);
    expect(find.textContaining('DAY 3'), findsOneWidget);
  });

  testWidgets('30일 뒤엔 처음부터 다시, 모두 열림', (t) async {
    await boot(t, installedDaysAgo: 30);
    expect(find.text('Microwave Oven'), findsOneWidget);
  });

  testWidgets('레슨 30개 전부: 번호 6개·화살표·재생/정지·퀴즈·출처·저장·다음 레슨', (t) async {
    final sem = t.ensureSemantics();
    final store = await boot(t, installedDaysAgo: 40);
    await press(t, find.byKey(const Key('tab-library')), 'Tab: Library', scroll: false);
    await settle(t);
    for (final e in lib.index) {
      final L = await t.runAsync(() => lib.lesson(e.key));
      await press(t, find.byKey(Key('cat-${e.key}')), 'Library: ${e.title}');
      await settle(t);
      expect(find.text(e.title), findsWidgets, reason: 'lesson opens: ${e.key}');
      noKorean(t, e.key);
      for (final p in L!.parts) {
        await press(t, find.byKey(Key('badge-${p.n}')), '${e.key}: number ${p.n}');
        expect(callout(t), contains(p.name), reason: '${e.key} badge ${p.n}');
      }
      if (e.day <= 3) await shot(t, 'lesson-${e.key}-part6');
      await press(t, find.byKey(const Key('prev-part')), '${e.key}: previous part');
      expect(callout(t), contains(L.parts[4].name));
      await press(t, find.byKey(const Key('next-part')), '${e.key}: next part');
      expect(callout(t), contains(L.parts[5].name));
      await press(t, find.byKey(const Key('badge-6')), '${e.key}: number 6 again → clear');
      expect(callout(t), contains('Tap a number'));
      // 재생
      await press(t, find.byKey(const Key('play')), '${e.key}: See it work');
      final mid = L.steps[L.steps.length > 2 ? 2 : 0];
      await t.pump(Duration(milliseconds: ((mid.t0 + mid.t1) / 2 * 1000).round()));
      expect(find.text('Stop'), findsOneWidget, reason: '${e.key}: playing');
      if (e.day <= 3 || e.key == 'four-stroke-engine') await shot(t, 'lesson-${e.key}-playing');
      await t.pump(Duration(milliseconds: (L.dur * 1000).round()));
      await t.pump(const Duration(milliseconds: 100));
      expect(find.text('See it work'), findsOneWidget, reason: '${e.key}: back after playing');
      await press(t, find.byKey(const Key('play')), '${e.key}: See it work again');
      await t.pump(const Duration(milliseconds: 500));
      await press(t, find.byKey(const Key('play')), '${e.key}: Stop');
      expect(find.text('See it work'), findsOneWidget);
      // 퀴즈 (첫 레슨은 일부러 틀린다)
      final pick = e.day == 1 ? (L.quiz.answer + 1) % 3 : L.quiz.answer;
      await press(t, find.byKey(Key('opt-$pick')), '${e.key}: quiz option $pick');
      expect(find.text(pick == L.quiz.answer ? '1 more thing you know.' : 'Not quite — now you know.'), findsOneWidget);
      expect(store.done(e.key), isTrue);
      await press(t, find.byKey(const Key('opt-0')), '${e.key}: quiz after answer (locked)');
      expect(store.pick(e.key), pick);
      // 출처
      final before = opened.length;
      await press(t, find.byKey(const Key('src-0')), '${e.key}: source 1');
      expect(opened.length, before + 1);
      expect(opened.last, L.sources.first.$2);
      // 저장
      if (e.day % 10 == 1) {
        await press(t, find.byKey(const Key('save')), '${e.key}: Save');
        expect(store.isSaved(e.key), isTrue);
      }
      if (e.day == 1) {
        buttonsTappable(t, 'lesson ${e.key}');
        await shot(t, 'lesson-${e.key}-quiz');
      }
      await press(t, find.byKey(const Key('back')), '${e.key}: Back', scroll: false);
      await settle(t);
    }
    await reveal(t, find.text('30 of 30 learned · a new one every day'));
    expect(find.text('30 of 30 learned · a new one every day'), findsOneWidget);
    await reveal(t, find.text('SAVED'));
    expect(find.text('SAVED'), findsOneWidget);
    await shot(t, '03-library-all-learned');
    // 다음 레슨 버튼 + 저장 해제
    await press(t, find.byKey(const Key('saved-microwave')), 'Library: Saved → Microwave');
    await settle(t);
    await press(t, find.byKey(const Key('save')), 'microwave: Unsave');
    expect(store.isSaved('microwave'), isFalse);
    await press(t, find.byKey(const Key('next-lesson')), 'microwave: Next lesson');
    await settle(t);
    expect(find.text('Flush Toilet'), findsWidgets);
    await press(t, find.byKey(const Key('back')), 'toilet: Back', scroll: false);
    await settle(t);
    sem.dispose();
  });

  for (final dev in {
    'iPhone SE': (const Size(375, 667), 2.0),
    'iPhone 15 Pro Max': (const Size(430, 932), 3.0),
  }.entries) {
    testWidgets('${dev.key}: Today 끝까지 스크롤 (넘침 없음)', (t) async {
      await boot(t, size: dev.value.$1, ratio: dev.value.$2, installedDaysAgo: 5);
      await reveal(t, find.byKey(const Key('next-lesson')));
      expect(find.byKey(const Key('next-lesson')), findsOneWidget);
      await shot(t, '06-today-bottom-${dev.key.replaceAll(' ', '-')}');
    });
  }

  testWidgets('큰 글씨(135%) + 다크 모드: 모든 레슨 화면이 넘치지 않음', (t) async {
    await boot(t, installedDaysAgo: 40, textScale: 1.35, brightness: Brightness.dark);
    await shot(t, '04-today-dark-large-text');
    await press(t, find.byKey(const Key('badge-1')), 'dark: number 1');
    await press(t, find.byKey(const Key('tab-library')), 'Tab: Library', scroll: false);
    await settle(t);
    await shot(t, '05-library-dark-large-text');
    for (final e in lib.index) {
      await press(t, find.byKey(Key('cat-${e.key}')), 'dark/large: ${e.title}');
      await settle(t);
      await reveal(t, find.byKey(const Key('next-lesson')));
      await press(t, find.byKey(const Key('back')), 'dark/large: back', scroll: false);
      await settle(t);
    }
  });
}
