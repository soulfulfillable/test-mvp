import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/rendering.dart';

import 'svg_path.dart';

/// 웹 엔진에서 뽑은 도해 장면(`tools/howitworks/export_lessons.js`)을 그린다.
/// 그림 결(손떨림 선·단면 해칭·모눈)은 웹 미리보기와 같게 맞춘다.
const kRed = Color(0xFFD63A2A);
const kInk = Color(0xFF24272C);

/// 테스트에서만 바꾼다(테스트 기본 글꼴 Ahem 은 네모라 스크린샷에서 안 읽힘).
String? diagramFontFamily;

class Leaf {
  Leaf(this.raw);
  final Map<String, dynamic> raw;

  bool get isText => raw['k'] == 't';
  String get fill => (raw['f'] as String?) ?? 'none';
  String get stroke => (raw['s'] as String?) ?? 'none';
  double get sw => (raw['sw'] as num?)?.toDouble() ?? 0;
  double get opacity => (raw['o'] as num?)?.toDouble() ?? 1;
  bool get ink => raw['ink'] == 1;
  int? get part => raw['part'] as int?;
  int? get topPart => raw['tp'] as int?;
  bool get topDims => raw['td'] == 1;
  String? get clip => raw['c'] as String?;

  Path? _base, _rough;
  Path get base => _base ??= _build();
  Path get rough => _rough ??= roughen(base);

  Path _build() {
    var p = parseSvgPath(raw['d'] as String);
    if (raw['fr'] == 1) p.fillType = PathFillType.evenOdd;
    final m = raw['m'] as List?;
    if (m != null) p = p.transform(matrixOf(m));
    if (raw['fr'] == 1) p.fillType = PathFillType.evenOdd;
    return p;
  }
}

Float64List matrixOf(List m) {
  final a = (m[0] as num).toDouble(), b = (m[1] as num).toDouble(), c = (m[2] as num).toDouble();
  final d = (m[3] as num).toDouble(), e = (m[4] as num).toDouble(), f = (m[5] as num).toDouble();
  return Float64List.fromList([a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, e, f, 0, 1]);
}

class Run {
  Run(Map<String, dynamic> r)
      : dyn = r['dyn'] == 1,
        _static = ((r['dyn'] == 1 ? r['s'] : r['l']) as List).map((e) => Leaf(e as Map<String, dynamic>)).toList(),
        _uniqRaw = r['u'] as List?,
        frameIdx = (r['f'] as List?)?.cast<int>();
  final bool dyn;
  final List<Leaf> _static;
  final List? _uniqRaw;
  final List<int>? frameIdx;
  final Map<int, List<Leaf>> _uniq = {};

  List<Leaf> at(int? frame) {
    if (!dyn || frame == null) return _static;
    final k = frameIdx![math.min(frame, frameIdx!.length - 1)];
    return _uniq[k] ??= (_uniqRaw![k] as List).map((e) => Leaf(e as Map<String, dynamic>)).toList();
  }
}

class Scene {
  Scene(Map<String, dynamic> s, List vb)
      : w = (vb[0] as num).toDouble(),
        h = (vb[1] as num).toDouble(),
        fps = (s['fps'] as num).toInt(),
        frames = (s['frames'] as num).toInt(),
        runs = (s['runs'] as List).map((r) => Run(r as Map<String, dynamic>)).toList(),
        _clipsRaw = (s['clips'] as Map).cast<String, dynamic>(),
        lead0 = _leadMap(s['lead0']),
        lead = (s['lead'] as List?)?.map(_leadMap).toList();
  final double w, h;
  final int fps, frames;
  final List<Run> runs;
  final Map<String, dynamic> _clipsRaw;
  final Map<int, Offset> lead0;
  final List<Map<int, Offset>>? lead;
  final Map<String, Path> _clips = {};

  Path clipPath(String id) => _clips[id] ??= () {
        final c = _clipsRaw[id] as Map;
        return parseSvgPath(c['d'] as String).transform(matrixOf(c['m'] as List));
      }();

  static Map<int, Offset> _leadMap(dynamic m) {
    if (m == null) return {};
    return (m as Map).map((k, v) => MapEntry(int.parse(k as String), Offset((v[0] as num).toDouble(), (v[1] as num).toDouble())));
  }

  Map<int, Offset> leadAt(int? frame) => frame == null || lead == null ? lead0 : lead![math.min(frame, lead!.length - 1)];
}

// ---------- 손떨림: 웹의 feTurbulence + feDisplacementMap(scale 2.2) 흉내 ----------
double _hash(int x, int y, int s) {
  var h = x * 374761393 + y * 668265263 + s * 2147483647;
  h = (h ^ (h >> 13)) * 1274126177;
  h = h ^ (h >> 16);
  return (h & 0xffff) / 0xffff;
}

double _vnoise(double x, double y, int s) {
  final xi = x.floor(), yi = y.floor();
  final fx = x - xi, fy = y - yi;
  final u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy);
  final a = _hash(xi, yi, s), b = _hash(xi + 1, yi, s), c = _hash(xi, yi + 1, s), d = _hash(xi + 1, yi + 1, s);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

Offset wobble(double x, double y) {
  const f = 0.04, scale = 2.2 * 1.6;
  double n(int s) => _vnoise(x * f, y * f, s) * 0.67 + _vnoise(x * f * 2, y * f * 2, s + 7) * 0.33;
  return Offset(x + (n(1) - 0.5) * scale, y + (n(2) - 0.5) * scale);
}

Path roughen(Path p) {
  final out = Path()..fillType = p.fillType;
  for (final m in p.computeMetrics()) {
    final len = m.length;
    if (len < 0.01) continue;
    final steps = math.max(2, (len / 2.5).ceil());
    for (var i = 0; i <= steps; i++) {
      final t = m.getTangentForOffset(len * i / steps);
      if (t == null) continue;
      final q = wobble(t.position.dx, t.position.dy);
      if (i == 0) {
        out.moveTo(q.dx, q.dy);
      } else {
        out.lineTo(q.dx, q.dy);
      }
    }
    if (m.isClosed) out.close();
  }
  return out;
}

Path dashed(Path p, List<double> da) {
  if (da.isEmpty || da.every((v) => v <= 0)) return p;
  final out = Path();
  for (final m in p.computeMetrics()) {
    var d = 0.0, i = 0, on = true;
    while (d < m.length) {
      final seg = da[i % da.length];
      if (on) out.addPath(m.extractPath(d, math.min(d + seg, m.length)), Offset.zero);
      d += seg;
      i++;
      on = !on;
    }
  }
  return out;
}

Color parseColor(String s) {
  var h = s.substring(1);
  if (h.length == 6) h = '${h}ff';
  final v = int.parse(h, radix: 16);
  return Color.fromARGB(v & 0xff, (v >> 24) & 0xff, (v >> 16) & 0xff, (v >> 8) & 0xff);
}

// ---------- 무늬 (userSpaceOnUse, 뷰박스 좌표) ----------
void paintPattern(Canvas c, String name, Rect r, double alpha) {
  Paint line(Color col, double w) => Paint()
    ..color = col.withValues(alpha: col.a * alpha)
    ..strokeWidth = w
    ..style = PaintingStyle.stroke;
  if (name == 'grid') {
    c.drawRect(r, Paint()..color = const Color(0xFFFFFFFF).withValues(alpha: alpha));
    final p = line(const Color(0xFFDCE6F0), .6);
    for (var x = (r.left / 10).floor() * 10.0; x <= r.right; x += 10) {
      c.drawLine(Offset(x, r.top), Offset(x, r.bottom), p);
    }
    for (var y = (r.top / 10).floor() * 10.0; y <= r.bottom; y += 10) {
      c.drawLine(Offset(r.left, y), Offset(r.right, y), p);
    }
  } else if (name == 'hatch' || name == 'fabric') {
    final hatch = name == 'hatch';
    c.drawRect(r, Paint()..color = (hatch ? const Color(0xFFFFFFFF) : const Color(0xFFF3F1EC)).withValues(alpha: alpha));
    final p = hatch ? line(const Color(0xFF3A3E44), .55) : line(const Color(0xFFC9C4B8), .5);
    // SVG: patternTransform rotate(45) + 세로선 x=2.25 (간격 4.5) / 천: rotate(-30) + 가로선 y=0 (간격 3)
    final ang = (hatch ? 45 : -30) * math.pi / 180, gap = hatch ? 4.5 : 3.0;
    final cs = math.cos(-ang), sn = math.sin(-ang);
    double minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
    for (final q in [r.topLeft, r.topRight, r.bottomLeft, r.bottomRight]) {
      final x = q.dx * cs - q.dy * sn, y = q.dx * sn + q.dy * cs;
      minX = math.min(minX, x); maxX = math.max(maxX, x);
      minY = math.min(minY, y); maxY = math.max(maxY, y);
    }
    c.save();
    c.rotate(ang);
    if (hatch) {
      for (var x = (minX / gap).floor() * gap + 2.25; x <= maxX; x += gap) {
        c.drawLine(Offset(x, minY), Offset(x, maxY), p);
      }
    } else {
      for (var y = (minY / gap).floor() * gap; y <= maxY; y += gap) {
        c.drawLine(Offset(minX, y), Offset(maxX, y), p);
      }
    }
    c.restore();
  } else {
    c.drawRect(r, Paint()..color = const Color(0xFFECEEF1).withValues(alpha: alpha));
  }
}

// ---------- 그리기 ----------
class DiagramPainter extends CustomPainter {
  DiagramPainter({
    required this.scene,
    required this.parts,
    this.focus = const {},
    this.frame,
    this.badges = true,
    this.rough = true,
  });
  final Scene scene;
  final List<PartRef> parts;
  final Set<int> focus;
  final int? frame;
  final bool badges, rough;

  @override
  void paint(Canvas canvas, Size size) {
    final s = size.width / scene.w;
    canvas.save();
    canvas.scale(s);
    final full = Rect.fromLTWH(0, 0, scene.w, scene.h);
    canvas.clipRect(full);
    paintPattern(canvas, 'grid', full, 1);
    for (final run in scene.runs) {
      for (final lf in run.at(frame)) {
        _leaf(canvas, lf);
      }
    }
    if (badges) _badges(canvas);
    canvas.restore();
  }

  void _leaf(Canvas c, Leaf lf) {
    var a = lf.opacity;
    if (focus.isNotEmpty && lf.topDims && !(lf.topPart != null && focus.contains(lf.topPart))) a *= .25;
    if (a <= 0.003) return;
    final clip = lf.clip;
    if (clip != null) {
      c.save();
      c.clipPath(scene.clipPath(clip));
    }
    if (lf.isText) {
      _text(c, lf, a);
    } else {
      final geo = rough ? lf.rough : lf.base;
      final f = lf.fill;
      if (f != 'none') {
        if (f.startsWith('#')) {
          final col = parseColor(f);
          c.drawPath(geo, Paint()..color = col.withValues(alpha: col.a * a));
        } else {
          c.save();
          c.clipPath(geo);
          paintPattern(c, f, geo.getBounds().inflate(2), a);
          c.restore();
        }
      }
      final st = lf.stroke;
      if (st != 'none' && lf.sw > 0) {
        var col = parseColor(st);
        if (lf.ink && lf.part != null && focus.contains(lf.part)) col = kRed;
        final da = (lf.raw['da'] as List?)?.map((e) => (e as num).toDouble()).toList();
        final p = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = lf.sw
          ..color = col.withValues(alpha: col.a * a)
          ..strokeCap = lf.raw['lc'] == 1 ? StrokeCap.round : StrokeCap.butt
          ..strokeJoin = lf.raw['lj'] == 1 ? StrokeJoin.round : StrokeJoin.miter;
        c.drawPath(da == null ? geo : dashed(geo, da), p);
      }
    }
    if (clip != null) c.restore();
  }

  void _text(Canvas c, Leaf lf, double a) {
    final r = lf.raw;
    final f = lf.fill;
    final col = f.startsWith('#') ? parseColor(f) : kInk;
    final hand = r['hand'] == 1;
    final tp = TextPainter(
      text: TextSpan(
        text: r['tx'] as String,
        style: TextStyle(
          fontSize: (r['fs'] as num).toDouble(),
          color: col.withValues(alpha: col.a * a),
          fontWeight: r['fw'] == 1 ? FontWeight.w600 : FontWeight.w400,
          fontFamily: hand ? 'Noteworthy' : diagramFontFamily,
          fontFamilyFallback: hand ? ['Bradley Hand', 'Chalkboard SE', ?diagramFontFamily] : null,
        ),
      ),
      textDirection: TextDirection.ltr,
    )..layout();
    var x = (r['x'] as num).toDouble();
    final y = (r['y'] as num).toDouble();
    final ta = r['ta'];
    if (ta == 'middle') x -= tp.width / 2;
    if (ta == 'end') x -= tp.width;
    final m = r['m'] as List?;
    c.save();
    if (m != null) c.transform(matrixOf(m));
    tp.paint(c, Offset(x, y - tp.computeDistanceToActualBaseline(TextBaseline.alphabetic)));
    c.restore();
  }

  void _badges(Canvas c) {
    final lead = scene.leadAt(frame);
    for (final p in parts) {
      final at = lead[p.n] ?? p.at;
      final on = focus.contains(p.n);
      c.drawLine(p.num, at, Paint()
        ..color = kRed
        ..strokeWidth = .9);
      c.drawCircle(at, 1.8, Paint()..color = kRed);
      c.drawCircle(p.num, 9, Paint()..color = on ? kRed : const Color(0xFFFFFFFF));
      c.drawCircle(p.num, 9, Paint()
        ..color = kRed
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.5);
      final tp = TextPainter(
        text: TextSpan(text: '${p.n}', style: TextStyle(fontFamily: diagramFontFamily, fontSize: 11, fontWeight: FontWeight.w600, color: on ? const Color(0xFFFFFFFF) : kRed)),
        textDirection: TextDirection.ltr,
      )..layout();
      tp.paint(c, p.num - Offset(tp.width / 2, tp.height / 2));
    }
  }

  @override
  bool shouldRepaint(DiagramPainter o) =>
      o.frame != frame || o.focus.length != focus.length || !o.focus.containsAll(focus) || o.scene != scene || o.badges != badges;
}

class PartRef {
  const PartRef(this.n, this.at, this.num);
  final int n;
  final Offset at, num;
}
