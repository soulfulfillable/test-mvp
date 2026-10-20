import 'dart:math' as math;
import 'dart:ui';

/// SVG path `d` 문자열 → Flutter [Path]. 웹 엔진의 도해 데이터를 그대로 그리기 위한 최소 구현
/// (M L H V C S Q T A Z, 대·소문자 모두).
Path parseSvgPath(String d) {
  final p = _Parser(d);
  final path = Path();
  double cx = 0, cy = 0, sx = 0, sy = 0; // 현재점, 부분경로 시작점
  double? lcx, lcy; // 직전 C/S 제어점 (S 반사용)
  double? lqx, lqy; // 직전 Q/T 제어점
  String cmd = '';
  while (true) {
    p.skipSep();
    if (p.done) break;
    final c = p.peek();
    if (RegExp(r'[A-Za-z]').hasMatch(c)) {
      cmd = c;
      p.i++;
    } else if (cmd.isEmpty) {
      break; // 잘못된 시작
    }
    final rel = cmd == cmd.toLowerCase();
    final up = cmd.toUpperCase();
    double nx() => p.number() + (rel ? cx : 0);
    double ny() => p.number() + (rel ? cy : 0);
    switch (up) {
      case 'M':
        cx = nx();
        cy = ny();
        sx = cx;
        sy = cy;
        path.moveTo(cx, cy);
        cmd = rel ? 'l' : 'L'; // 이어지는 좌표쌍은 선
        lcx = lqx = null;
        break;
      case 'L':
        cx = nx();
        cy = ny();
        path.lineTo(cx, cy);
        lcx = lqx = null;
        break;
      case 'H':
        cx = p.number() + (rel ? cx : 0);
        path.lineTo(cx, cy);
        lcx = lqx = null;
        break;
      case 'V':
        cy = p.number() + (rel ? cy : 0);
        path.lineTo(cx, cy);
        lcx = lqx = null;
        break;
      case 'C':
        final x1 = nx(), y1 = ny(), x2 = nx(), y2 = ny(), x = nx(), y = ny();
        path.cubicTo(x1, y1, x2, y2, x, y);
        lcx = x2;
        lcy = y2;
        cx = x;
        cy = y;
        lqx = null;
        break;
      case 'S':
        final rx1 = lcx != null ? 2 * cx - lcx : cx, ry1 = lcy != null && lcx != null ? 2 * cy - lcy : cy;
        final x2 = nx(), y2 = ny(), x = nx(), y = ny();
        path.cubicTo(rx1, ry1, x2, y2, x, y);
        lcx = x2;
        lcy = y2;
        cx = x;
        cy = y;
        lqx = null;
        break;
      case 'Q':
        final x1 = nx(), y1 = ny(), x = nx(), y = ny();
        path.quadraticBezierTo(x1, y1, x, y);
        lqx = x1;
        lqy = y1;
        cx = x;
        cy = y;
        lcx = null;
        break;
      case 'T':
        final qx = lqx != null ? 2 * cx - lqx : cx, qy = lqx != null && lqy != null ? 2 * cy - lqy : cy;
        final x = nx(), y = ny();
        path.quadraticBezierTo(qx, qy, x, y);
        lqx = qx;
        lqy = qy;
        cx = x;
        cy = y;
        lcx = null;
        break;
      case 'A':
        final rx = p.number().abs(), ry = p.number().abs(), rot = p.number();
        final large = p.flag(), sweep = p.flag();
        final x = nx(), y = ny();
        if (rx == 0 || ry == 0) {
          path.lineTo(x, y);
        } else {
          path.arcToPoint(Offset(x, y),
              radius: Radius.elliptical(rx, ry), rotation: rot, largeArc: large, clockwise: sweep);
        }
        cx = x;
        cy = y;
        lcx = lqx = null;
        break;
      case 'Z':
        path.close();
        cx = sx;
        cy = sy;
        lcx = lqx = null;
        // Z 뒤에 숫자가 오면 무시하고 다음 명령을 기다린다
        p.skipSep();
        if (!p.done && !RegExp(r'[A-Za-z]').hasMatch(p.peek())) p.number();
        break;
      default:
        p.i++;
    }
  }
  return path;
}

class _Parser {
  _Parser(this.s);
  final String s;
  int i = 0;
  bool get done => i >= s.length;
  String peek() => s[i];
  void skipSep() {
    while (!done && (s[i] == ' ' || s[i] == ',' || s[i] == '\n' || s[i] == '\t' || s[i] == '\r')) {
      i++;
    }
  }

  static final _num = RegExp(r'[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?');
  double number() {
    skipSep();
    final m = _num.matchAsPrefix(s, i);
    if (m == null) {
      i = math.min(i + 1, s.length);
      return 0;
    }
    i = m.end;
    return double.parse(m.group(0)!);
  }

  bool flag() {
    skipSep();
    if (done) return false;
    final c = s[i];
    i++;
    return c == '1';
  }
}
