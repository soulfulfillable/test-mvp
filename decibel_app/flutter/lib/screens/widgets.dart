import 'dart:math' as math;

import 'package:flutter/cupertino.dart';
import 'package:flutter/scheduler.dart';

import '../core/levels.dart';
import '../core/meter.dart';
import '../core/theme.dart';

/// 게이지 눈금 범위 (dB). 휴대폰 마이크는 20 dB 아래를 못 잰다.
const gaugeMin = 20.0, gaugeMax = 130.0;

/// 시그니처: 아날로그 VU 미터처럼 관성 있게 움직이는 바늘 + 지나간 눈금이 구간 색으로 켜지는 링.
/// 숫자는 바늘이 아니라 실제 측정값을 그대로 보여 준다 (바늘 움직임은 보기용).
class Gauge extends StatefulWidget {
  const Gauge({
    super.key,
    required this.value,
    required this.max,
    required this.unit,
    required this.active,
  });

  /// 지금 값 (없으면 null).
  final double? value;
  final double? max;
  final String unit;
  final bool active;

  @override
  State<Gauge> createState() => _GaugeState();
}

class _GaugeState extends State<Gauge> with SingleTickerProviderStateMixin {
  late final Ticker _ticker = createTicker(_tick);
  double _pos = gaugeMin, _vel = 0;
  Duration _last = Duration.zero;

  // 약간 덜 감쇠된 스프링 → 실제 바늘처럼 살짝 넘쳤다 돌아온다
  static const _k = 140.0;
  static final _c = 2 * math.sqrt(_k) * 0.55;

  double get _target =>
      (widget.value ?? gaugeMin).clamp(gaugeMin, gaugeMax).toDouble();

  @override
  void didUpdateWidget(Gauge old) {
    super.didUpdateWidget(old);
    if (!_ticker.isActive && (_target - _pos).abs() > 0.01) {
      _last = Duration.zero;
      _ticker.start();
    }
  }

  void _tick(Duration t) {
    final dt = _last == Duration.zero
        ? 1 / 60
        : ((t - _last).inMicroseconds / 1e6).clamp(0.0, 1 / 20);
    _last = t;
    final a = _k * (_target - _pos) - _c * _vel;
    _vel += a * dt;
    _pos += _vel * dt;
    if ((_target - _pos).abs() < 0.02 && _vel.abs() < 0.05) {
      _pos = _target;
      _vel = 0;
      _ticker.stop();
    }
    setState(() {});
  }

  @override
  void dispose() {
    _ticker.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final v = widget.value;
    final base = textOf(context);
    final label = dyn(context, CupertinoColors.label);
    final secondary = dyn(context, CupertinoColors.secondaryLabel);
    return LayoutBuilder(
      builder: (context, c) {
        final size = math.min(c.maxWidth, c.maxHeight / 0.82);
        return Center(
          child: SizedBox(
            width: size,
            height: size * 0.82,
            child: Semantics(
              label: v == null
                  ? 'No reading yet'
                  : '${fmtDb(v)} ${widget.unit}, ${bandOf(v).name}',
              child: CustomPaint(
                painter: _GaugePainter(
                  needle: v == null ? null : _pos,
                  max: widget.max,
                  lit: [for (final b in bands) dyn(context, b.color)],
                  off: dyn(context, CupertinoColors.tertiarySystemFill),
                  pointer: dyn(context, accent),
                  tickLabel: base.copyWith(
                    fontSize: kSmall,
                    color: dyn(context, CupertinoColors.tertiaryLabel),
                  ),
                ),
                child: Padding(
                  padding: EdgeInsets.only(top: size * 0.25),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      FittedBox(
                        child: Text(
                          v == null ? '—' : fmtDb(v),
                          key: const Key('current'),
                          style: base.copyWith(
                            fontSize: size * 0.32,
                            height: 1,
                            fontWeight: FontWeight.w600,
                            letterSpacing: -2,
                            color: v == null || !widget.active
                                ? secondary
                                : label,
                            fontFeatures: tabular,
                          ),
                        ),
                      ),
                      Text(
                        widget.unit,
                        style: base.copyWith(fontSize: kBody, color: secondary),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}

class _GaugePainter extends CustomPainter {
  _GaugePainter({
    required this.needle,
    required this.max,
    required this.lit,
    required this.off,
    required this.pointer,
    required this.tickLabel,
  });
  final double? needle, max;
  final List<Color> lit;
  final Color off, pointer;
  final TextStyle tickLabel;

  static const start = math.pi * 5 / 6; // 150°
  static const sweep = math.pi * 4 / 3; // 240°
  static const step = 2.5; // 눈금 간격 dB

  double _t(double db) =>
      ((db - gaugeMin) / (gaugeMax - gaugeMin)).clamp(0.0, 1.0);
  Offset _at(Offset c, double a, double r) =>
      c + Offset(math.cos(a), math.sin(a)) * r;

  Color _bandColor(double db) {
    var i = 0;
    for (var k = 0; k < bands.length; k++) {
      if (db >= bands[k].from) i = k;
    }
    return lit[i];
  }

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final c = Offset(w / 2, w * 0.5);
    final r = w * 0.44;
    final len = w * 0.075;
    final n = needle;

    // 눈금 링: 바늘이 지나간 눈금만 구간 색으로 켜진다
    for (var db = gaugeMin; db <= gaugeMax + 0.01; db += step) {
      final a = start + sweep * _t(db);
      final on = n != null && db <= n + 0.01;
      final major = (db % 20).abs() < 0.01;
      canvas.drawLine(
        _at(c, a, r - len * (major ? 1.25 : 1)),
        _at(c, a, r),
        Paint()
          ..color = on ? _bandColor(db) : off
          ..strokeWidth = w * 0.012
          ..strokeCap = StrokeCap.round,
      );
      if (major && db <= 120) {
        final tp = TextPainter(
          text: TextSpan(text: db.toInt().toString(), style: tickLabel),
          textDirection: TextDirection.ltr,
        )..layout();
        final p = _at(c, a, r - len * 1.25 - w * 0.06);
        tp.paint(canvas, p - Offset(tp.width / 2, tp.height / 2));
      }
    }

    // 최대값: 링 바깥 작은 점
    final m = max;
    if (m != null && m.isFinite && m > gaugeMin) {
      canvas.drawCircle(
        _at(c, start + sweep * _t(m), r + w * 0.03),
        w * 0.011,
        Paint()..color = pointer,
      );
    }

    // 바늘: 숫자를 가리지 않게 링 근처만 그린다
    if (n != null) {
      final a = start + sweep * _t(n);
      canvas.drawLine(
        _at(c, a, r - len * 1.9),
        _at(c, a, r + w * 0.012),
        Paint()
          ..color = pointer
          ..strokeWidth = w * 0.014
          ..strokeCap = StrokeCap.round,
      );
    }
  }

  @override
  bool shouldRepaint(_GaugePainter old) =>
      old.needle != needle || old.max != max || old.off != off;
}

/// 최근 1분 그래프 (0.1초 간격 점). 오른쪽 끝이 지금. 85 dB(청력 주의) 선 하나만 표시.
class LiveChart extends StatelessWidget {
  const LiveChart({super.key, required this.points});
  final List<double> points;

  @override
  Widget build(BuildContext context) => Semantics(
    label: 'Last minute chart',
    child: CustomPaint(
      painter: _LivePainter(
        points,
        line: dyn(context, accent),
        grid: dyn(context, CupertinoColors.separator),
        warn: dyn(context, CupertinoColors.systemRed),
        label: textOf(context).copyWith(
          fontSize: kSmall,
          color: dyn(context, CupertinoColors.tertiaryLabel),
        ),
      ),
      size: Size.infinite,
    ),
  );
}

class _LivePainter extends CustomPainter {
  _LivePainter(
    this.points, {
    required this.line,
    required this.grid,
    required this.warn,
    required this.label,
  });
  final List<double> points;
  final Color line, grid, warn;
  final TextStyle label;
  static const lo = 20.0, hi = 120.0;

  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width, h = size.height;
    double y(double db) => h - ((db.clamp(lo, hi) - lo) / (hi - lo)) * h;
    canvas.drawLine(Offset(0, h), Offset(w, h), Paint()..color = grid);
    // 85 dB 점선
    final p85 = Paint()
      ..color = warn.withValues(alpha: 0.7)
      ..strokeWidth = 1;
    for (var x = 0.0; x < w; x += 8) {
      canvas.drawLine(Offset(x, y(85)), Offset(x + 4, y(85)), p85);
    }
    final tp = TextPainter(
      text: TextSpan(
        text: '85',
        style: label.copyWith(color: warn),
      ),
      textDirection: TextDirection.ltr,
    )..layout();
    tp.paint(canvas, Offset(0, y(85) - tp.height - 1));

    final n = points.length;
    if (n < 2) return;
    const total = MeterEngine.recentPoints;
    final dx = w / (total - 1);
    final x0 = w - (n - 1) * dx;
    final path = Path()..moveTo(x0, y(points[0]));
    for (var i = 1; i < n; i++) {
      path.lineTo(x0 + i * dx, y(points[i]));
    }
    canvas.drawPath(
      path,
      Paint()
        ..color = line
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..strokeJoin = StrokeJoin.round,
    );
  }

  @override
  bool shouldRepaint(_LivePainter old) => true;
}

/// 리포트 그래프 (흰 종이): 시간에 따른 평균(막대, 구간 색) + 최대(선).
class ReportChart extends StatelessWidget {
  const ReportChart({super.key, required this.stats, required this.labels});
  final List<SecondStat> stats;

  /// 아래 축 글자 (처음·가운데·끝).
  final List<String> labels;

  @override
  Widget build(BuildContext context) => CustomPaint(
    painter: _ReportPainter(stats, labels, textOf(context)),
    size: Size.infinite,
  );
}

class _ReportPainter extends CustomPainter {
  _ReportPainter(this.stats, this.labels, this.base);
  final List<SecondStat> stats;
  final List<String> labels;
  final TextStyle base;

  @override
  void paint(Canvas canvas, Size size) {
    const left = 28.0, bottom = 18.0;
    final w = size.width - left, h = size.height - bottom;
    var hi = 100.0, lo = 30.0;
    for (final s in stats) {
      if (s.max > hi - 5) hi = (s.max / 10).ceil() * 10 + 10;
      if (s.leq < lo + 5) lo = math.max(0, (s.leq / 10).floor() * 10 - 10);
    }
    double y(double db) => h - ((db.clamp(lo, hi) - lo) / (hi - lo)) * h;
    final style = base.copyWith(fontSize: 9, color: Paper.sub);
    final grid = Paint()
      ..color = Paper.line
      ..strokeWidth = 1;
    final step = (hi - lo) > 70 ? 20.0 : 10.0;
    for (var db = (lo / step).ceil() * step; db <= hi; db += step) {
      canvas.drawLine(Offset(left, y(db)), Offset(size.width, y(db)), grid);
      final tp = TextPainter(
        text: TextSpan(text: db.toInt().toString(), style: style),
        textDirection: TextDirection.ltr,
      )..layout();
      tp.paint(canvas, Offset(0, y(db) - tp.height / 2));
    }
    if (stats.isNotEmpty) {
      final bw = w / stats.length;
      for (var i = 0; i < stats.length; i++) {
        final s = stats[i];
        canvas.drawRect(
          Rect.fromLTRB(
            left + i * bw + bw * 0.12,
            y(s.leq),
            left + (i + 1) * bw - bw * 0.12,
            h,
          ),
          // 흰 종이라 라이트 색(동적 색의 기본값)을 그대로 쓴다
          Paint()..color = Color(bandOf(s.leq).color.toARGB32()),
        );
      }
      final peak = Path();
      for (var i = 0; i < stats.length; i++) {
        final p = Offset(left + (i + 0.5) * bw, y(stats[i].max));
        i == 0 ? peak.moveTo(p.dx, p.dy) : peak.lineTo(p.dx, p.dy);
      }
      canvas.drawPath(
        peak,
        Paint()
          ..color = Paper.ink.withValues(alpha: 0.55)
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.2,
      );
    }
    for (var i = 0; i < labels.length; i++) {
      final tp = TextPainter(
        text: TextSpan(text: labels[i], style: style),
        textDirection: TextDirection.ltr,
      )..layout();
      final fx = labels.length == 1 ? 0.0 : i / (labels.length - 1);
      final x = left + w * fx - tp.width * fx;
      tp.paint(canvas, Offset(x, h + 4));
    }
  }

  @override
  bool shouldRepaint(_ReportPainter old) => old.stats != stats;
}

/// 평균·최대·시간: 카드 없이 가는 세로선으로만 나눈 한 줄.
class StatRow extends StatelessWidget {
  const StatRow({super.key, required this.items});

  /// (제목, 값, 단위, key)
  final List<(String, String, String, Key)> items;

  @override
  Widget build(BuildContext context) {
    final base = textOf(context);
    final sep = dyn(context, CupertinoColors.separator);
    return IntrinsicHeight(
      child: Row(
        children: [
          for (var i = 0; i < items.length; i++) ...[
            if (i > 0) Container(width: 0.5, color: sep),
            Expanded(
              child: Column(
                children: [
                  Text(
                    items[i].$1,
                    style: base.copyWith(
                      fontSize: kSmall,
                      color: dyn(context, CupertinoColors.secondaryLabel),
                    ),
                  ),
                  const SizedBox(height: 2),
                  FittedBox(
                    child: Text.rich(
                      TextSpan(
                        text: items[i].$2,
                        children: [
                          if (items[i].$3.isNotEmpty)
                            TextSpan(
                              text: ' ${items[i].$3}',
                              style: TextStyle(
                                fontWeight: FontWeight.w400,
                                color: dyn(
                                  context,
                                  CupertinoColors.secondaryLabel,
                                ),
                              ),
                            ),
                        ],
                      ),
                      key: items[i].$4,
                      style: base.copyWith(
                        fontSize: kBody,
                        fontWeight: FontWeight.w600,
                        fontFeatures: tabular,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}

/// 리플 없는 iOS 식 글자 버튼 (Reset·Report 같은 보조 동작).
class TextAction extends StatelessWidget {
  const TextAction({
    super.key,
    required this.label,
    required this.icon,
    required this.onTap,
  });
  final String label;
  final IconData icon;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) => CupertinoButton(
    padding: const EdgeInsets.symmetric(horizontal: 8),
    minimumSize: const Size(64, 44),
    onPressed: onTap,
    child: Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon, size: 22),
        const SizedBox(height: 2),
        Text(label, style: const TextStyle(fontSize: kSmall)),
      ],
    ),
  );
}

/// 상단 "‹ 뒤로". Flutter 기본 뒤로 버튼은 VoiceOver 용 누르기 동작이 빠진 노드를 만든다
/// (로봇 검사로 확인) → 같은 모양을 직접 그리고 접근성 tap 을 단다.
class BackLink extends StatelessWidget {
  const BackLink({super.key, this.label = 'Back'});
  final String label;

  @override
  Widget build(BuildContext context) {
    void pop() => Navigator.maybePop(context);
    return Semantics(
      button: true,
      label: 'Back',
      onTap: pop,
      excludeSemantics: true,
      child: CupertinoButton(
        key: const Key('back'),
        padding: EdgeInsets.zero,
        minimumSize: const Size(44, 44),
        onPressed: pop,
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(CupertinoIcons.back, size: 26),
            Text(label, style: const TextStyle(fontSize: kBody)),
          ],
        ),
      ),
    );
  }
}

/// 묶음 목록 머리글 — 설정 앱처럼 13pt 회색 대문자 (Flutter 기본은 20pt 굵게라 다르다).
class SectionHeader extends StatelessWidget {
  const SectionHeader(this.text, {super.key});
  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text.toUpperCase(),
    style: TextStyle(
      fontSize: kSmall,
      fontWeight: FontWeight.w400,
      color: dyn(context, CupertinoColors.secondaryLabel),
    ),
  );
}

/// 묶음 목록 아래 설명 — 13pt 회색.
class SectionFooter extends StatelessWidget {
  const SectionFooter(this.text, {super.key});
  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: TextStyle(
      fontSize: kSmall,
      height: 1.35,
      color: dyn(context, CupertinoColors.secondaryLabel),
    ),
  );
}

/// 강조색 버튼 하나 (높이 50, 모서리 14). 다크 모드의 밝은 청록 위에는 검정 글씨.
class PrimaryButton extends StatelessWidget {
  const PrimaryButton({
    super.key,
    required this.label,
    required this.icon,
    required this.onPressed,
  });
  final String label;
  final IconData icon;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    final fg = CupertinoTheme.brightnessOf(context) == Brightness.dark
        ? CupertinoColors.black
        : CupertinoColors.white;
    return CupertinoButton(
      color: dyn(context, accent),
      borderRadius: BorderRadius.circular(14),
      minimumSize: const Size(0, 50),
      padding: const EdgeInsets.symmetric(horizontal: 16),
      onPressed: onPressed,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 20, color: fg),
          const SizedBox(width: 8),
          Flexible(
            child: Text(
              label,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                fontSize: kBody,
                fontWeight: FontWeight.w600,
                color: fg,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// 레벨 숫자 + 구간 색 점. 노랑 글씨는 흰 바탕에서 안 읽혀서 색은 점으로만 보여 준다.
class LevelNumber extends StatelessWidget {
  const LevelNumber(this.db, {super.key, this.suffix = ''});
  final double db;
  final String suffix;

  @override
  Widget build(BuildContext context) => Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Container(
        width: 8,
        height: 8,
        decoration: BoxDecoration(
          color: dyn(context, bandOf(db).color),
          shape: BoxShape.circle,
        ),
      ),
      const SizedBox(width: 8),
      Flexible(
        child: FittedBox(
          fit: BoxFit.scaleDown,
          child: Text(
            '${fmtDb(db)}$suffix',
            style: textOf(context)
                .copyWith(fontWeight: FontWeight.w600, fontFeatures: tabular),
          ),
        ),
      ),
    ],
  );
}
