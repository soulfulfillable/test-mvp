/// 읽기 계획: 어떤 장을(범위) 어떤 순서로 며칠에 나눌지.
library;

import 'bible.dart';

enum Scope { whole, newTestament, psalmsProverbs }

enum Order { canonical, chronological }

extension ScopeText on Scope {
  String get title => switch (this) {
    Scope.whole => 'Whole Bible',
    Scope.newTestament => 'New Testament',
    Scope.psalmsProverbs => 'Psalms & Proverbs',
  };

  /// 고를 수 있는 기간(일). 첫 값이 기본. 장 수보다 긴 기간은 빈 날이 생기므로 넣지 않는다.
  List<int> get lengths => switch (this) {
    Scope.whole => const [365, 180, 90],
    Scope.newTestament => const [260, 90, 30],
    Scope.psalmsProverbs => const [180, 90, 60],
  };

  bool get hasOrder => this != Scope.psalmsProverbs;
}

extension OrderText on Order {
  String get title => switch (this) {
    Order.canonical => 'Bible Order',
    Order.chronological => 'Chronological',
  };
}

String lengthTitle(int days) => switch (days) {
  365 => '1 Year',
  260 => '260 Days',
  180 => '6 Months',
  90 => '90 Days',
  60 => '60 Days',
  30 => '30 Days',
  _ => '$days Days',
};

bool _inScope(Scope s, int id) {
  final b = chapterOf(id).$1;
  return switch (s) {
    Scope.whole => true,
    Scope.newTestament => b.isNew,
    Scope.psalmsProverbs => b.name == 'Psalms' || b.name == 'Proverbs',
  };
}

/// 범위·순서에 맞는 장 번호 순서.
List<int> sequenceFor(Scope s, Order o) {
  final base = o == Order.chronological && s.hasOrder
      ? chronologicalOrder
      : List<int>.generate(totalChapters, (i) => i);
  return [for (final id in base) if (_inScope(s, id)) id];
}

/// 장 순서를 [days] 일로 나눈 경계(길이 days+1, 처음 0·끝 seq.length).
/// 장을 쪼개지 않고, 절 수를 무게로 써서 하루 분량을 고르게 한다(시편 117편 2절 / 119편 176절).
/// 매일 적어도 한 장.
List<int> splitByVerses(List<int> seq, int days) {
  assert(days >= 1 && days <= seq.length);
  final w = [for (final id in seq) versesOf(id)];
  final total = w.fold<int>(0, (a, b) => a + b);
  final cuts = <int>[0];
  var pos = 0, acc = 0;
  for (var d = 1; d < days; d++) {
    final target = total * d / days;
    // 남은 날마다 한 장씩은 남겨 둔다
    final maxPos = seq.length - (days - d);
    var next = pos + 1;
    acc += w[pos];
    while (next < maxPos && (acc + w[next] / 2) <= target) {
      acc += w[next];
      next++;
    }
    cuts.add(next);
    pos = next;
  }
  cuts.add(seq.length);
  return cuts;
}

/// 연대순(근사) — 장 묶음 단위. 공개된 연대순 계획(Blue Letter Bible 1년 연대순 등)의 큰 흐름을 따라
/// 장을 쪼개지 않는 선에서 직접 구성했다. 근거·출처는 bible_app/store/chronological.md.
/// 1,189장이 정확히 한 번씩 들어가는지는 테스트가 확인한다.
const _chrono = <(String, int, int)>[
  ('Gen', 1, 11), ('Job', 1, 42), ('Gen', 12, 50),
  ('Exod', 1, 40), ('Lev', 1, 27), ('Num', 1, 36), ('Deut', 1, 34), ('Ps', 90, 90),
  ('Josh', 1, 24), ('Judg', 1, 21), ('Ruth', 1, 4),
  ('1 Sam', 1, 31), ('1 Chr', 1, 10), ('2 Sam', 1, 4), ('Ps', 1, 41),
  ('2 Sam', 5, 10), ('1 Chr', 11, 19), ('Ps', 42, 72),
  ('2 Sam', 11, 24), ('1 Chr', 20, 29), ('Ps', 73, 89),
  ('1 Kgs', 1, 11), ('2 Chr', 1, 9), ('Prov', 1, 31), ('Eccl', 1, 12), ('Song', 1, 8),
  ('1 Kgs', 12, 22), ('2 Chr', 10, 20), ('Obad', 1, 1),
  ('2 Kgs', 1, 14), ('2 Chr', 21, 25), ('Joel', 1, 3), ('Jonah', 1, 4), ('Amos', 1, 9), ('Hos', 1, 14),
  ('2 Kgs', 15, 16), ('2 Chr', 26, 28), ('Isa', 1, 39), ('Mic', 1, 7),
  ('2 Kgs', 17, 20), ('2 Chr', 29, 32), ('Ps', 91, 106), ('Isa', 40, 66),
  ('2 Kgs', 21, 23), ('2 Chr', 33, 35), ('Nah', 1, 3), ('Zeph', 1, 3), ('Hab', 1, 3),
  ('Jer', 1, 52), ('2 Kgs', 24, 25), ('2 Chr', 36, 36), ('Lam', 1, 5),
  ('Ezek', 1, 48), ('Dan', 1, 12),
  ('Ezra', 1, 6), ('Hag', 1, 2), ('Zech', 1, 14), ('Esth', 1, 10), ('Ezra', 7, 10),
  ('Ps', 107, 150), ('Neh', 1, 13), ('Mal', 1, 4),
  ('Luke', 1, 24), ('Matt', 1, 28), ('Mark', 1, 16), ('John', 1, 21),
  ('Acts', 1, 14), ('Jas', 1, 5), ('Gal', 1, 6), ('Acts', 15, 18), ('1 Thes', 1, 5), ('2 Thes', 1, 3),
  ('Acts', 19, 19), ('1 Cor', 1, 16), ('2 Cor', 1, 13), ('Rom', 1, 16), ('Acts', 20, 28),
  ('Eph', 1, 6), ('Phil', 1, 4), ('Col', 1, 4), ('Phlm', 1, 1),
  ('1 Tim', 1, 6), ('Titus', 1, 3), ('1 Pet', 1, 5), ('Heb', 1, 13), ('2 Tim', 1, 4), ('2 Pet', 1, 3),
  ('Jude', 1, 1), ('1 Jn', 1, 5), ('2 Jn', 1, 1), ('3 Jn', 1, 1), ('Rev', 1, 22),
];

final List<int> chronologicalOrder = [
  for (final (short, a, z) in _chrono)
    for (var c = a; c <= z; c++) bookNamed(short).chapterId(c),
];

/// 날짜는 '그 지역 달력의 날' 하나로 다룬다 (시각·시간대 없이 1970-01-01 부터 며칠째).
int dayNumber(DateTime t) => DateTime.utc(t.year, t.month, t.day).millisecondsSinceEpoch ~/ 86400000;
DateTime dateOf(int day) {
  final u = DateTime.fromMillisecondsSinceEpoch(day * 86400000, isUtc: true);
  return DateTime(u.year, u.month, u.day);
}

/// 실제 일정: N 일 각각의 날짜와 장 목록. 밀렸을 때 '남은 장 다시 나누기'·'뒤로 미루기'를 하면 바뀐다.
class Schedule {
  Schedule({required this.seq, required this.cuts, required this.dates})
    : assert(cuts.length == dates.length + 1 && cuts.first == 0 && cuts.last == seq.length);

  factory Schedule.fresh(Scope s, Order o, int days, int startDay) {
    final seq = sequenceFor(s, o);
    return Schedule(
      seq: seq,
      cuts: splitByVerses(seq, days),
      dates: [for (var i = 0; i < days; i++) startDay + i],
    );
  }

  final List<int> seq;
  final List<int> cuts;

  /// 날마다 예정일(dayNumber).
  final List<int> dates;

  int get length => dates.length;
  List<int> chaptersOn(int day) => seq.sublist(cuts[day], cuts[day + 1]);
  int get endDay => dates.last;

  /// 오늘까지 마쳤어야 할 날 수 (오늘 분량 포함).
  int dueBy(int today) => dates.where((d) => d <= today).length;

  /// [done] 일까지 읽은 상태에서 남은 장을 오늘부터 원래 끝나는 날까지 다시 고르게 나눈다.
  /// 남은 날이 남은 장보다 적거나 끝날이 지났으면 null (그땐 미루기만).
  Schedule? spreadRemaining(int done, int today) {
    final remainingDays = endDay - today + 1;
    final rest = seq.sublist(cuts[done]);
    if (remainingDays < 1 || rest.isEmpty) return null;
    final n = remainingDays < rest.length ? remainingDays : rest.length;
    final restCuts = splitByVerses(rest, n);
    return Schedule(
      seq: seq,
      cuts: [...cuts.sublist(0, done), for (final c in restCuts) cuts[done] + c],
      dates: [...dates.sublist(0, done), for (var i = 0; i < n; i++) today + i],
    );
  }

  /// 남은 날을 그대로 두고 오늘부터 다시 시작 (끝나는 날이 그만큼 늦어진다).
  Schedule shiftFrom(int done, int today) => Schedule(
    seq: seq,
    cuts: cuts,
    dates: [...dates.sublist(0, done), for (var i = 0; i < length - done; i++) today + i],
  );

  /// 시작일 바꾸기 — 지금까지 읽은 날은 그대로, 날짜만 다시 붙인다.
  Schedule withStart(int startDay) =>
      Schedule(seq: seq, cuts: cuts, dates: [for (var i = 0; i < length; i++) startDay + i]);

  Map<String, Object> toJson() => {'cuts': cuts, 'dates': dates};
}
