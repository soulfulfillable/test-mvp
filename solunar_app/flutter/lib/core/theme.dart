import 'package:flutter/cupertino.dart';

import 'solunar.dart';

/// 앱 이름 (스토어 이름은 store/ios-listing.md).
const kAppName = 'Glance Solunar';

/// DESIGN.md: 강조색은 하나. 해 뜰 녘 주황 — Glance 다른 앱(dB 청록·Speed 민트·Tides 바다)과 겹치지 않게.
/// 라이트는 흰 바탕 글자 대비 4.5:1 이상, 다크는 밝게. 나머지는 iOS 시스템 색(라이트/다크 자동)만.
const accent = CupertinoDynamicColor.withBrightness(color: Color(0xFFB4500A), darkColor: Color(0xFFFF9F45));

/// 달 그림 (밝은 면 / 어두운 면). 달은 달색이라 강조색과 따로 둔다.
const moonLit = Color(0xFFF2E3A6);
const moonDark = CupertinoDynamicColor.withBrightness(color: Color(0xFF3A4A63), darkColor: Color(0xFF4A5468));

/// 동적 색을 지금 밝기로.
Color dyn(BuildContext context, Color c) => CupertinoDynamicColor.resolve(c, context);

CupertinoThemeData buildTheme() => const CupertinoThemeData(
  primaryColor: accent,
  scaffoldBackgroundColor: CupertinoColors.systemGroupedBackground,
  barBackgroundColor: CupertinoColors.systemGroupedBackground,
);

/// 글자 크기는 화면마다 3단계까지 (DESIGN.md): 본문 17, 보조 13, 그리고 화면의 주인공 하나.
const double kBody = 17, kSmall = 13;

TextStyle textOf(BuildContext context) => CupertinoTheme.of(context).textTheme.textStyle;

const tabular = [FontFeature.tabularFigures()];

/// 점수 등급은 강조색 하나의 진하기로만 (색을 늘리지 않는다).
Color ratingColor(BuildContext context, Rating r) => switch (r) {
  Rating.best => dyn(context, accent),
  Rating.good => dyn(context, accent).withValues(alpha: 0.62),
  Rating.fair => dyn(context, accent).withValues(alpha: 0.32),
  Rating.slow => dyn(context, CupertinoColors.systemGrey3),
};
