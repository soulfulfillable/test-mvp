import 'dart:convert';
import 'dart:io' show gzip;

import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

import 'scene.dart';

class Part {
  Part(Map<String, dynamic> m)
      : n = m['n'] as int,
        name = m['name'] as String,
        desc = m['desc'] as String,
        at = _off(m['at']),
        num = _off(m['num']);
  final int n;
  final String name, desc;
  final Offset at, num;
}

Offset _off(dynamic v) => Offset((v[0] as num).toDouble(), (v[1] as num).toDouble());

class Step {
  Step(Map<String, dynamic> m)
      : text = m['text'] as String,
        parts = (m['parts'] as List).cast<int>(),
        t0 = ((m['t'] as List)[0] as num).toDouble(),
        t1 = ((m['t'] as List)[1] as num).toDouble();
  final String text;
  final List<int> parts;
  final double t0, t1;
}

class Quiz {
  Quiz(Map<String, dynamic> m)
      : q = m['q'] as String,
        opts = (m['opts'] as List).cast<String>(),
        answer = m['a'] as int,
        why = m['why'] as String;
  final String q, why;
  final List<String> opts;
  final int answer;
}

/// 레슨 1개. 원본은 `howitworks_app/lessons/NN-key.js` (웹 미리보기와 같은 원본) → export_lessons.js 로 뽑은 JSON.
class Lesson {
  Lesson(Map<String, dynamic> m)
      : key = m['key'] as String,
        title = m['title'] as String,
        cat = m['cat'] as String,
        mins = m['mins'] as int,
        day = m['day'] as int,
        summary = m['summary'] as String,
        why = m['why'] as String,
        fact = m['fact'] as String,
        dur = (m['dur'] as num).toDouble(),
        parts = (m['parts'] as List).map((e) => Part(e as Map<String, dynamic>)).toList(),
        steps = (m['steps'] as List).map((e) => Step(e as Map<String, dynamic>)).toList(),
        quiz = Quiz(m['quiz'] as Map<String, dynamic>),
        sources = (m['sources'] as List).map((e) => ((e as List)[0] as String, e[1] as String)).toList(),
        scene = Scene(m['scene'] as Map<String, dynamic>, m['vb'] as List);
  final String key, title, cat, summary, why, fact;
  final int mins, day;
  final double dur;
  final List<Part> parts;
  final List<Step> steps;
  final Quiz quiz;
  final List<(String, String)> sources;
  final Scene scene;

  List<PartRef> get partRefs => [for (final p in parts) PartRef(p.n, p.at, p.num)];
  double get aspect => scene.w / scene.h;
}

class LessonIndexEntry {
  LessonIndexEntry(Map<String, dynamic> m)
      : key = m['key'] as String,
        title = m['title'] as String,
        cat = m['cat'] as String,
        day = m['day'] as int,
        mins = m['mins'] as int;
  final String key, title, cat;
  final int day, mins;
}

/// 레슨 묶음. 목록은 index.json, 본문(도해 포함)은 열 때 한 개씩 풀어 읽는다.
class LessonLibrary {
  LessonLibrary(this.index, this._bundle);
  final List<LessonIndexEntry> index;
  final AssetBundle _bundle;
  final Map<String, Lesson> _cache = {};

  static Future<LessonLibrary> load([AssetBundle? bundle]) async {
    final b = bundle ?? rootBundle;
    final idx = jsonDecode(await b.loadString('assets/lessons/index.json')) as List;
    final list = idx.map((e) => LessonIndexEntry(e as Map<String, dynamic>)).toList()..sort((a, b) => a.day.compareTo(b.day));
    return LessonLibrary(list, b);
  }

  Lesson? cached(String key) => _cache[key];

  Future<Lesson> lesson(String key) async {
    final c = _cache[key];
    if (c != null) return c;
    final data = await _bundle.load('assets/lessons/$key.json.gz');
    final raw = utf8.decode(gzip.decode(data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes)));
    return _cache[key] = Lesson(jsonDecode(raw) as Map<String, dynamic>);
  }
}
