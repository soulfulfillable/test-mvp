/// 읽기 진행 저장소 — 기기 안에만 저장(계정·서버 없음).
library;

import 'dart:convert';

import 'package:clock/clock.dart';
import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'bible.dart';
import 'notify.dart';
import 'plan.dart';

int today() => dayNumber(clock.now());

class AppStore extends ChangeNotifier {
  AppStore();
  static AppStore i = AppStore();

  static const _key = 'bible.state.v1';

  Scope scope = Scope.whole;
  Order order = Order.canonical;
  int length = 365;
  late Schedule schedule = Schedule.fresh(scope, order, length, today());

  /// 마친 날마다 '읽었다고 누른 날짜'. 길이 = 마친 날 수 (앞에서부터 차례로 마친다).
  List<int> doneOn = [];

  bool reminderOn = false;

  /// 알림 시각 (자정부터 분). 기본 오전 7시.
  int reminderMinute = 7 * 60;

  /// 처음 켠 사람인가 (계획을 아직 안 골랐다) — 안내 한 줄만 보여 준다.
  bool fresh = true;

  int get done => doneOn.length;
  bool get finished => done >= schedule.length;
  int get chaptersRead => schedule.cuts[done.clamp(0, schedule.length)];
  int get chaptersTotal => schedule.seq.length;

  /// 읽은 장 번호들.
  Iterable<int> get readIds => schedule.seq.take(chaptersRead);

  /// 계획과 상관없이 직접 체크한 장 (Map → 책 → 장). 새 계획을 시작해도 지워지지 않는다.
  Set<int> checked = {};

  /// 지도에 채워지는 장 = 계획에서 읽은 장 ∪ 직접 체크한 장.
  Set<int> get allRead => {...readIds, ...checked};

  /// 계획에서 읽음으로 들어간 장인가 (책 화면에서 직접 해제할 수 없다 — 오늘 화면의 Undo 로).
  bool readInPlan(int id) => readIds.contains(id);

  void toggleChapter(int id) {
    if (id < 0 || id >= totalChapters || readInPlan(id)) return;
    checked.contains(id) ? checked.remove(id) : checked.add(id);
    _changed();
  }

  void checkAll(Iterable<int> ids) {
    checked.addAll(ids.where((id) => id >= 0 && id < totalChapters));
    _changed();
  }

  void uncheckAll(Iterable<int> ids) {
    checked.removeAll(ids);
    _changed();
  }

  /// 다음에 읽을 날(0부터). 다 읽었으면 null.
  int? get nextDay => finished ? null : done;

  /// 오늘 기준으로 밀린 날 수(+) 또는 앞선 날 수(-).
  int get behind => schedule.dueBy(today()) - done;

  /// 오늘 이미 하루치를 읽었나.
  bool get readToday => doneOn.isNotEmpty && doneOn.last == today();

  /// 연속으로 읽은 날 (오늘이나 어제까지 이어진 것만).
  int get streak {
    final days = doneOn.toSet();
    var d = today();
    if (!days.contains(d)) d--;
    var n = 0;
    while (days.contains(d)) {
      n++;
      d--;
    }
    return n;
  }

  Future<void> load() async {
    try {
      final p = await SharedPreferences.getInstance();
      final raw = p.getString(_key);
      if (raw != null) _restore(jsonDecode(raw));
    } catch (e) {
      // 깨진 저장 한 줄로 앱이 멈추지 않게 — 처음 상태로 연다
      debugPrint('restore failed: $e');
    }
    notifyListeners();
    syncReminders();
  }

  void _restore(Object? j) {
    if (j is! Map) throw const FormatException('state');
    // 직접 체크한 장은 계획 부분이 깨져도 살린다
    final c = j['checked'];
    if (c is List) {
      checked = {
        for (final v in c)
          if (v is int && v >= 0 && v < totalChapters) v,
      };
    }
    final s = Scope.values.byName(j['scope'] as String);
    final o = Order.values.byName(j['order'] as String);
    final len = j['length'] as int;
    final cuts = (j['cuts'] as List).cast<int>();
    final dates = (j['dates'] as List).cast<int>();
    final doneOn0 = (j['doneOn'] as List).cast<int>();
    final seq = sequenceFor(s, o);
    // 형식 검사: 경계가 늘어나는 순서이고 장 수와 맞아야 한다
    if (cuts.length != dates.length + 1 ||
        cuts.first != 0 ||
        cuts.last != seq.length) {
      throw const FormatException('cuts');
    }
    for (var k = 1; k < cuts.length; k++) {
      if (cuts[k] <= cuts[k - 1]) throw const FormatException('cuts order');
    }
    if (doneOn0.length > dates.length) throw const FormatException('done');
    scope = s;
    order = o;
    length = len;
    schedule = Schedule(seq: seq, cuts: List.of(cuts), dates: List.of(dates));
    doneOn = List.of(doneOn0);
    reminderOn = j['reminderOn'] == true;
    final m = j['reminderMinute'];
    reminderMinute = m is int && m >= 0 && m < 1440 ? m : 7 * 60;
    fresh = j['fresh'] == true;
  }

  Map<String, Object> toJson() => {
    'scope': scope.name,
    'order': order.name,
    'length': length,
    ...schedule.toJson(),
    'doneOn': doneOn,
    'reminderOn': reminderOn,
    'reminderMinute': reminderMinute,
    'fresh': fresh,
    'checked': (checked.toList()..sort()),
  };

  void _changed() {
    notifyListeners();
    // 저장·알림은 기다리지 않는다 (플랫폼 응답이 늦어도 화면은 바로)
    SharedPreferences.getInstance()
        .then((p) => p.setString(_key, jsonEncode(toJson())))
        .catchError((Object e) {
          debugPrint('save failed: $e');
          return false;
        });
    syncReminders();
  }

  /// 앱 복귀(자정 넘김) 때 화면을 다시 그린다.
  void refresh() => notifyListeners();

  /// 웹 미리보기 예시 상태 — 저장하지 않는다.
  void showDemo(Scope s, Order o, int days, int behindBy) {
    scope = s;
    order = s.hasOrder ? o : Order.canonical;
    length = s.lengths.first;
    final t = today();
    final start = t - days - behindBy;
    schedule = Schedule.fresh(scope, order, length, start);
    final n = days.clamp(0, schedule.length);
    doneOn = [for (var i = 0; i < n; i++) t - n + i - behindBy];
    fresh = false;
    notifyListeners();
  }

  void markRead() {
    if (finished) return;
    doneOn.add(today());
    fresh = false;
    _changed();
  }

  void undo() {
    if (doneOn.isEmpty) return;
    doneOn.removeLast();
    _changed();
  }

  /// 새 계획 — 지도도 새로 시작한다.
  void startPlan(Scope s, Order o, int len, {int? startDay}) {
    scope = s;
    order = s.hasOrder ? o : Order.canonical;
    length = len;
    schedule = Schedule.fresh(scope, order, len, startDay ?? today());
    doneOn = [];
    fresh = false;
    _changed();
  }

  void setStart(int startDay) {
    schedule = schedule.withStart(startDay);
    fresh = false;
    _changed();
  }

  /// 밀린 날: 남은 장을 원래 끝나는 날까지 다시 나눈다 (가능할 때).
  bool get canSpread {
    final s = schedule.spreadRemaining(done, today());
    return s != null && behind > 0;
  }

  Schedule? previewSpread() => schedule.spreadRemaining(done, today());
  Schedule previewShift() => schedule.shiftFrom(done, today());

  void spread() {
    final s = schedule.spreadRemaining(done, today());
    if (s == null) return;
    schedule = s;
    _changed();
  }

  void shift() {
    schedule = schedule.shiftFrom(done, today());
    _changed();
  }

  void setReminder({bool? on, int? minute}) {
    if (on != null) reminderOn = on;
    if (minute != null) reminderMinute = minute;
    _changed();
  }

  /// 앞으로 30일 알림 (그날 읽을 분량을 본문에). 하루에 하루치를 읽는다고 보고 미리 적는다.
  List<PlannedNotice> plannedReminders() {
    if (!reminderOn || finished) return const [];
    final now = clock.now();
    final out = <PlannedNotice>[];
    var day = done;
    // 오늘 이미 읽었으면 오늘 알림은 없다
    for (var k = readToday ? 1 : 0; k < 30 && day < schedule.length; k++) {
      final d = dateOf(today() + k);
      final at = DateTime(
        d.year,
        d.month,
        d.day,
        reminderMinute ~/ 60,
        reminderMinute % 60,
      );
      if (!at.isAfter(now)) continue;
      final ids = schedule.chaptersOn(day);
      out.add(
        PlannedNotice(
          k + 1,
          at,
          "Today's reading",
          '${readingLabel(ids)} · about ${minutesFor(ids)} min',
        ),
      );
      day++;
    }
    return out;
  }

  void syncReminders() {
    Notifier.i
        .sync(plannedReminders())
        .catchError((Object e) => debugPrint('$e'));
  }

  /// 백업용 CSV: 날마다 한 줄 (예정일, 분량, 읽은 날).
  String exportCsv() {
    final b = StringBuffer('day,scheduled,reading,chapters,read_on\n');
    for (var i = 0; i < schedule.length; i++) {
      final ids = schedule.chaptersOn(i);
      final read = i < doneOn.length ? isoDate(dateOf(doneOn[i])) : '';
      b.writeln(
        '${i + 1},${isoDate(dateOf(schedule.dates[i]))},"${readingLabel(ids)}",${ids.length},$read',
      );
    }
    return b.toString();
  }
}

String isoDate(DateTime d) =>
    '${d.year}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';
