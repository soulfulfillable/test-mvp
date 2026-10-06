import 'package:flutter/cupertino.dart';

/// 앱 이름 — 정해지면 여기 한 곳만 바꾼다 (스토어 이름은 store/ios-listing.md).
const kAppName = 'Bible Reading Plan';

/// 개인정보처리방침 (GitHub Pages).
const kPrivacyUrl = 'https://soulfulfillable.github.io/test-mvp/bible-privacy.html';

/// DESIGN.md: 강조색은 하나. 따뜻한 포도주색(성찬) — Glance 앱들(청록·민트·바다·초록)과 겹치지 않고,
/// 보라·남색 그라데이션이나 크림+테라코타 같은 'AI 기본값' 과도 다르다. 나머지는 iOS 시스템 색만.
const accent = CupertinoDynamicColor.withBrightness(
  color: Color(0xFF8E2C48),
  darkColor: Color(0xFFE07A96),
);

/// 지도에서 아직 안 읽은 칸.
const cellOff = CupertinoDynamicColor.withBrightness(
  color: Color(0xFFE5E5EA),
  darkColor: Color(0xFF2C2C2E),
);

Color dyn(BuildContext context, Color c) => CupertinoDynamicColor.resolve(c, context);

CupertinoThemeData buildTheme() => const CupertinoThemeData(
  primaryColor: accent,
  scaffoldBackgroundColor: CupertinoColors.systemBackground,
  barBackgroundColor: CupertinoColors.systemBackground,
);

/// 글자 크기는 화면마다 3단계까지 (DESIGN.md): 본문 17, 보조 13, 그리고 화면의 주인공 하나(34).
const double kBody = 17, kSmall = 13, kHero = 34;

TextStyle textOf(BuildContext context) => CupertinoTheme.of(context).textTheme.textStyle;

const tabular = [FontFeature.tabularFigures()];

const _months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const _days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

/// "Tuesday, October 6"
String fmtLongDate(DateTime t) => '${_days[t.weekday - 1]}, ${_months[t.month - 1]} ${t.day}';

/// "Oct 6, 2027"
String fmtDate(DateTime t) => '${_months[t.month - 1].substring(0, 3)} ${t.day}, ${t.year}';

/// "7:00 AM"
String fmtMinute(int m) {
  final h = m ~/ 60, mm = (m % 60).toString().padLeft(2, '0');
  return '${h % 12 == 0 ? 12 : h % 12}:$mm ${h < 12 ? 'AM' : 'PM'}';
}

/// 1189 → "1,189"
String fmtInt(int n) => n.toString().replaceAllMapped(RegExp(r'\B(?=(\d{3})+(?!\d))'), (_) => ',');
