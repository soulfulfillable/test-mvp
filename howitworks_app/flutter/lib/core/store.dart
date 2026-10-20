import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// 기기에만 저장하는 기록: 처음 연 날(레슨 해금 기준), 푼 퀴즈, 저장한 레슨, 연속 기록. 계정·서버 없음.
class Store extends ChangeNotifier {
  Store(this._p, {DateTime Function()? now}) : _now = now ?? DateTime.now {
    if (_p.getInt(_kInstall) == null) _p.setInt(_kInstall, today);
  }
  final SharedPreferences _p;
  final DateTime Function() _now;
  static const _kInstall = 'installDay', _kDone = 'done', _kSaved = 'saved', _kStreakDay = 'streakDay', _kStreakN = 'streakN';
  static const lessonCount = 30;

  static Future<Store> open({DateTime Function()? now}) async => Store(await SharedPreferences.getInstance(), now: now);

  /// 달력 날짜 번호(현지 날짜 기준)
  int get today {
    final n = _now();
    return DateTime.utc(n.year, n.month, n.day).millisecondsSinceEpoch ~/ 86400000;
  }

  /// 앱을 쓴 지 며칠째인지 (처음 연 날 = 1일째)
  int get dayNumber => today - (_p.getInt(_kInstall) ?? today) + 1;

  /// 오늘의 레슨 번호 (1~30, 30일이 지나면 처음부터 다시)
  int get todayLesson => (dayNumber - 1) % lessonCount + 1;

  bool unlocked(int day) => dayNumber > lessonCount || day <= dayNumber;
  int daysUntil(int day) => day - dayNumber;

  int? pick(String key) => _p.getInt('$_kDone.$key');
  bool done(String key) => pick(key) != null;
  void answer(String key, int i) {
    _p.setInt('$_kDone.$key', i);
    notifyListeners();
  }

  Set<String> get saved => (_p.getStringList(_kSaved) ?? const []).toSet();
  bool isSaved(String key) => saved.contains(key);
  void toggleSave(String key) {
    final s = saved;
    s.contains(key) ? s.remove(key) : s.add(key);
    _p.setStringList(_kSaved, s.toList());
    notifyListeners();
  }

  /// 오늘 앱을 열었으면 연속 기록을 갱신하고 돌려준다
  int touchStreak() {
    final last = _p.getInt(_kStreakDay), n = _p.getInt(_kStreakN) ?? 0;
    if (last == today) return n;
    final next = last == today - 1 ? n + 1 : 1;
    _p.setInt(_kStreakDay, today);
    _p.setInt(_kStreakN, next);
    return next;
  }

  int get streak => _p.getInt(_kStreakN) ?? 0;
}
