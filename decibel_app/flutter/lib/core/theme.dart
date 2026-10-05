import 'package:flutter/cupertino.dart';

/// 앱 이름 — 정해지면 여기 한 곳만 바꾼다 (스토어 이름은 store/ios-listing.md).
const kAppName = 'Glance dB';

/// 개인정보처리방침 (GitHub Pages).
const kPrivacyUrl =
    'https://soulfulfillable.github.io/test-mvp/decibel-privacy.html';

/// DESIGN.md: 강조색은 하나. 오실로스코프 파형 같은 청록 — Glance 다른 앱(민트·바다·초록)과 겹치지 않게.
/// 나머지는 iOS 시스템 색(라이트/다크 자동)만 쓴다.
const accent = CupertinoDynamicColor.withBrightness(
  color: Color(0xFF00848A),
  darkColor: Color(0xFF2FD0D6),
);

/// 리포트 이미지는 늘 흰 종이 (인쇄·전달용) — 화면 테마와 무관.
class Paper {
  static const bg = Color(0xFFFFFFFF);
  static const ink = Color(0xFF1C1C1E);
  static const sub = Color(0xFF6C6C70);
  static const line = Color(0xFFE5E5EA);
  static const tint = Color(0xFF00848A);
}

/// 동적 색을 지금 밝기로.
Color dyn(BuildContext context, Color c) =>
    CupertinoDynamicColor.resolve(c, context);

CupertinoThemeData buildTheme() => const CupertinoThemeData(
  primaryColor: accent,
  scaffoldBackgroundColor: CupertinoColors.systemBackground,
  barBackgroundColor: CupertinoColors.systemBackground,
);

/// 글자 크기는 화면마다 3단계까지 (DESIGN.md): 본문 17, 보조 13, 그리고 화면의 주인공 하나.
const double kBody = 17, kSmall = 13;

TextStyle textOf(BuildContext context) =>
    CupertinoTheme.of(context).textTheme.textStyle;

const tabular = [FontFeature.tabularFigures()];

const _months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const _days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

/// "Fri, Oct 2, 2026"
String fmtDate(DateTime t) =>
    '${_days[t.weekday - 1]}, ${_months[t.month - 1]} ${t.day}, ${t.year}';

/// "Oct 2"
String fmtDateShort(DateTime t) => '${_months[t.month - 1]} ${t.day}';

/// "10:42 PM" (seconds: "10:42:13 PM")
String fmtClock(DateTime t, {bool seconds = false}) {
  final h = t.hour % 12 == 0 ? 12 : t.hour % 12;
  final m = t.minute.toString().padLeft(2, '0');
  final s = seconds ? ':${t.second.toString().padLeft(2, '0')}' : '';
  return '$h:$m$s ${t.hour < 12 ? 'AM' : 'PM'}';
}

/// 측정 시간: "0:42", "12:05", "1:02:33"
String fmtDuration(Duration d) {
  final h = d.inHours, m = d.inMinutes % 60, s = d.inSeconds % 60;
  final ss = s.toString().padLeft(2, '0');
  return h > 0 ? '$h:${m.toString().padLeft(2, '0')}:$ss' : '$m:$ss';
}

/// 말로 쓴 시간: "42 sec", "12 min 5 sec", "1 hr 2 min"
String fmtDurationWords(Duration d) {
  final h = d.inHours, m = d.inMinutes % 60, s = d.inSeconds % 60;
  if (h > 0) return m > 0 ? '$h hr $m min' : '$h hr';
  if (m > 0) return s > 0 ? '$m min $s sec' : '$m min';
  return '$s sec';
}

/// 휴대폰 마이크가 잴 수 있는 바닥. 이보다 작으면 숫자 대신 "<20".
const kFloorDb = 20.0;

/// 화면에 보이는 dB 숫자 (소수점 없이).
String fmtDb(double v) =>
    !v.isFinite || v < kFloorDb ? '<${kFloorDb.toInt()}' : v.round().toString();
