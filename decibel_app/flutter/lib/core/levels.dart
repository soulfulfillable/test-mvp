import 'dart:math' as math;

import 'package:flutter/cupertino.dart';

/// 숫자를 몰라도 읽히게 — 레벨 구간 이름과 색.
class Band {
  const Band(this.name, this.from, this.color);
  final String name;
  final double from;
  final Color color;
}

/// iOS 의미 색(라이트/다크 자동). 초록 = 괜찮음, 노랑·주황 = 시끄러움, 빨강·분홍 = 귀에 위험.
const bands = [
  Band('Quiet', -999, CupertinoColors.systemGreen),
  Band('Moderate', 40, CupertinoColors.systemGreen),
  Band('Loud', 65, CupertinoColors.systemYellow),
  Band('Very loud', 80, CupertinoColors.systemOrange),
  Band('Dangerous', 95, CupertinoColors.systemRed),
  Band('Painful', 120, CupertinoColors.systemPink),
];

Band bandOf(double db) {
  var b = bands.first;
  for (final x in bands) {
    if (db >= x.from) b = x;
  }
  return b;
}

/// "어느 정도 소리인가" 비유 표. 값은 CDC·NIDCD 가 쓰는 대표값 (dBA).
class Ref {
  const Ref(this.db, this.title, this.like);
  final int db;
  final String title;

  /// 측정 화면에 뜨는 한 줄 비유.
  final String like;
}

const refs = [
  Ref(10, 'Normal breathing', 'Like breathing'),
  Ref(20, 'Rustling leaves, ticking watch', 'Like rustling leaves'),
  Ref(30, 'Soft whisper', 'Like a soft whisper'),
  Ref(40, 'Quiet library, fridge hum', 'Like a quiet library'),
  Ref(50, 'Moderate rain, quiet office', 'Like moderate rain'),
  Ref(60, 'Normal conversation', 'Like normal conversation'),
  Ref(70, 'Washing machine, vacuum', 'Like a vacuum cleaner'),
  Ref(80, 'City traffic, lawnmower', 'Like a lawnmower'),
  Ref(90, 'Power tools, leaf blower up close', 'Like power tools'),
  Ref(95, 'Motorcycle', 'Like a motorcycle'),
  Ref(100, 'Subway train, car horn', 'Like a subway train'),
  Ref(110, 'Rock concert, yelling up close', 'Like a rock concert'),
  Ref(120, 'Siren up close, thunder', 'Like a siren up close'),
  Ref(140, 'Fireworks, gunshot', 'Like fireworks'),
];

/// 지금 레벨에 가장 가까운 비유 (아래쪽 기준, 5 dB 여유).
Ref? refOf(double db) {
  if (db < 7) return null;
  Ref best = refs.first;
  for (final r in refs) {
    if (db + 5 >= r.db) best = r;
  }
  return best;
}

/// 지금 레벨을 한 줄 비유로: "Like normal conversation".
String likeText(double db) => refOf(db)?.like ?? 'Almost silent';

/// NIOSH 권고(85 dBA 8시간, 3 dB 마다 절반)에 따른 하루 허용 시간.
/// 85 dBA 미만이면 null (제한 없음).
Duration? nioshDailyLimit(double dba) {
  if (dba < 85) return null;
  final hours = 8 / math.pow(2, (dba - 85) / 3);
  return Duration(seconds: (hours * 3600).round());
}

String fmtLimit(Duration d) {
  if (d.inMinutes >= 60) {
    final h = d.inMinutes / 60;
    return h >= 2 || h == h.roundToDouble()
        ? '${h.round()} hr'
        : '${h.toStringAsFixed(1)} hr';
  }
  if (d.inMinutes >= 1) return '${d.inMinutes} min';
  return '${math.max(1, d.inSeconds)} sec';
}
