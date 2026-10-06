import 'dart:math' as math;

import 'package:flutter/cupertino.dart';

import '../core/format.dart';
import '../core/solunar.dart';
import '../core/theme.dart';

/// Moon disk drawn from the illuminated fraction (no emoji fonts needed).
class MoonIcon extends StatelessWidget {
  const MoonIcon({super.key, required this.illumination, required this.waxing, this.size = 18});

  final double illumination;
  final bool waxing;
  final double size;

  @override
  Widget build(BuildContext context) => SizedBox(
    width: size,
    height: size,
    child: CustomPaint(painter: _MoonPainter(illumination, waxing, dyn(context, moonDark))),
  );
}

class _MoonPainter extends CustomPainter {
  _MoonPainter(this.f, this.waxing, this.dark);
  final double f;
  final bool waxing;
  final Color dark;

  @override
  void paint(Canvas canvas, Size size) {
    final r = size.width / 2;
    canvas.translate(r, r);
    canvas.drawCircle(Offset.zero, r, Paint()..color = dark);
    if (f < 0.01) {
      canvas.drawCircle(
        Offset.zero,
        r - 0.5,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = moonLit.withValues(alpha: 0.35),
      );
      return;
    }
    if (!waxing) canvas.scale(-1, 1); // lit limb on the left when waning
    final rx = r * (2 * f - 1).abs();
    final lit = Path()
      ..moveTo(0, -r)
      ..arcToPoint(Offset(0, r), radius: Radius.circular(r), clockwise: true)
      ..arcToPoint(Offset(0, -r), radius: Radius.elliptical(math.max(rx, 0.01), r), clockwise: f > 0.5);
    canvas.drawPath(lit, Paint()..color = moonLit);
  }

  @override
  bool shouldRepaint(_MoonPainter old) => old.f != f || old.waxing != waxing || old.dark != dark;
}

/// A tap target that VoiceOver can press too. (`Semantics(button, excludeSemantics)` alone
/// gives a node with no tap action — caught by other apps' robots.)
class Tap extends StatelessWidget {
  const Tap({super.key, required this.label, required this.onTap, required this.child, this.selected});
  final String label;
  final VoidCallback onTap;
  final Widget child;
  final bool? selected;

  @override
  Widget build(BuildContext context) => Semantics(
    button: true,
    selected: selected,
    label: label,
    onTap: onTap,
    excludeSemantics: true,
    child: CupertinoButton(
      padding: EdgeInsets.zero,
      minimumSize: const Size(44, 44),
      pressedOpacity: 0.55,
      onPressed: onTap,
      child: child,
    ),
  );
}

/// "‹ Back" drawn by hand: Flutter's own back button makes a VoiceOver node with no tap action.
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

/// Grouped-list header like Settings: 13 pt grey capitals (Flutter's default is 20 pt bold).
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

/// Grouped-list footnote, 13 pt grey.
class SectionFooter extends StatelessWidget {
  const SectionFooter(this.text, {super.key, this.textKey});
  final String text;
  final Key? textKey;

  @override
  Widget build(BuildContext context) => Text(
    text,
    key: textKey,
    style: TextStyle(fontSize: kSmall, height: 1.35, color: dyn(context, CupertinoColors.secondaryLabel)),
  );
}

/// The one filled button style (height 50, corners 14). Black text on the bright dark-mode orange.
class PrimaryButton extends StatelessWidget {
  const PrimaryButton({super.key, required this.label, required this.icon, required this.onPressed});
  final String label;
  final IconData icon;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    final fg = CupertinoTheme.brightnessOf(context) == Brightness.dark ? CupertinoColors.black : CupertinoColors.white;
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
              style: TextStyle(fontSize: kBody, fontWeight: FontWeight.w600, color: fg),
            ),
          ),
        ],
      ),
    );
  }
}

/// A short bar whose length is the day's score (0–100): longer bar, better day.
class ScoreBar extends StatelessWidget {
  const ScoreBar({super.key, required this.score, this.width = 26});
  final Score score;
  final double width;

  @override
  Widget build(BuildContext context) => Container(
    width: width,
    height: 4,
    decoration: BoxDecoration(color: dyn(context, CupertinoColors.systemFill), borderRadius: BorderRadius.circular(2)),
    alignment: Alignment.centerLeft,
    child: FractionallySizedBox(
      widthFactor: (score.total / 100).clamp(0.04, 1.0),
      child: Container(
        decoration: BoxDecoration(color: ratingColor(context, score.rating), borderRadius: BorderRadius.circular(2)),
      ),
    ),
  );
}

/// Seven days like the Calendar app's week row: weekday, date in a circle, score bar.
class WeekStrip extends StatelessWidget {
  const WeekStrip({super.key, required this.days, required this.selected, required this.onPick});
  final List<SolunarDay> days;
  final DateTime selected;
  final ValueChanged<DateTime> onPick;

  @override
  Widget build(BuildContext context) {
    final base = textOf(context);
    final a = dyn(context, accent);
    final onAccent = CupertinoTheme.brightnessOf(context) == Brightness.dark
        ? CupertinoColors.black
        : CupertinoColors.white;
    return Row(
      children: [
        for (final (i, d) in days.indexed)
          Expanded(
            child: Tap(
              key: Key('day-$i'),
              selected: d.wallDay == selected,
              label: '${longDay(d.wallDay)} ${monthDay(d.wallDay)}, score ${d.score.total} ${d.score.rating.label}',
              onTap: () => onPick(d.wallDay),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    i == 0 ? 'Today' : shortDay(d.wallDay),
                    maxLines: 1,
                    style: base.copyWith(
                      fontSize: kSmall,
                      color: i == 0 ? a : dyn(context, CupertinoColors.secondaryLabel),
                    ),
                  ),
                  const SizedBox(height: 4),
                  Container(
                    width: 36,
                    height: 36,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(color: d.wallDay == selected ? a : null, shape: BoxShape.circle),
                    child: Text(
                      '${d.wallDay.day}',
                      style: base.copyWith(
                        fontSize: kBody,
                        fontWeight: FontWeight.w600,
                        fontFeatures: tabular,
                        color: d.wallDay == selected ? onAccent : dyn(context, CupertinoColors.label),
                      ),
                    ),
                  ),
                  const SizedBox(height: 6),
                  ScoreBar(score: d.score),
                ],
              ),
            ),
          ),
      ],
    );
  }
}

/// Signature: the day as a 24-hour dial — midnight at the bottom, noon at the top, like the sun's
/// path. Daylight is the warm part of the ring; Major periods are wide orange arcs, Minor thin bands;
/// a dot marks now. When the day changes, the arcs sweep in (the only animation on the screen).
class SolunarDial extends StatefulWidget {
  const SolunarDial({super.key, required this.day, required this.center, this.now, this.legal});

  final SolunarDay day;
  final Widget center;
  final DateTime? now;

  /// Shooting-light window, drawn as a thin inner arc (Hunting view).
  final LegalLight? legal;

  @override
  State<SolunarDial> createState() => _SolunarDialState();
}

class _SolunarDialState extends State<SolunarDial> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 650))
    ..forward();
  late final Animation<double> _t = CurvedAnimation(parent: _c, curve: Curves.easeOutCubic);

  @override
  void didUpdateWidget(SolunarDial old) {
    super.didUpdateWidget(old);
    if (old.day.wallDay != widget.day.wallDay || old.day.place.key != widget.day.place.key) _c.forward(from: 0);
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.day;
    final z = d.zone;
    final parts = [for (final p in d.periods) '${p.kind.label} ${span(p.start, p.end, z)}'];
    final label = textOf(context).copyWith(fontSize: kSmall, color: dyn(context, CupertinoColors.secondaryLabel));
    return Semantics(
      container: true,
      label: '24-hour dial. ${parts.isEmpty ? 'No solunar periods' : parts.join(', ')}',
      child: AspectRatio(
        aspectRatio: 1,
        child: LayoutBuilder(
          builder: (context, box) => AnimatedBuilder(
            animation: _t,
            builder: (context, child) => CustomPaint(
              painter: _DialPainter(
                day: d,
                now: widget.now,
                legal: widget.legal,
                t: _t.value,
                accent: dyn(context, accent),
                night: dyn(context, CupertinoColors.systemGrey4),
                ink: dyn(context, CupertinoColors.label),
                bg: dyn(context, CupertinoColors.secondarySystemGroupedBackground),
                tick: dyn(context, CupertinoColors.tertiaryLabel),
                label: label,
              ),
              child: child,
            ),
            child: Padding(
              padding: EdgeInsets.all(box.maxWidth * 0.27),
              // The score / countdown is the hero: its own VoiceOver stop, read before the dial's period list.
              child: Center(
                child: Semantics(container: true, child: widget.center),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _DialPainter extends CustomPainter {
  _DialPainter({
    required this.day,
    required this.now,
    required this.legal,
    required this.t,
    required this.accent,
    required this.night,
    required this.ink,
    required this.bg,
    required this.tick,
    required this.label,
  });
  final SolunarDay day;
  final DateTime? now;
  final LegalLight? legal;
  final double t;
  final Color accent, night, ink, bg, tick;
  final TextStyle label;

  double _f(DateTime x) =>
      (x.difference(day.start).inSeconds / day.end.difference(day.start).inSeconds).clamp(0.0, 1.0);

  /// Fraction of the day → angle: midnight at the bottom, 6 AM left, noon top, 6 PM right (clockwise).
  double _a(double f) => math.pi / 2 + 2 * math.pi * f;

  @override
  void paint(Canvas canvas, Size size) {
    final s = size.shortestSide;
    final c = Offset(size.width / 2, size.height / 2);
    final w = s * 0.075; // ring width
    final r = s / 2 - w / 2 - 14; // ring centre line; ticks outside it
    final rect = Rect.fromCircle(center: c, radius: r);
    Paint stroke(Color col, double width) => Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = width
      ..strokeCap = StrokeCap.butt
      ..color = col;
    void arc(DateTime a, DateTime b, Paint p, {Rect? on}) {
      final fa = _f(a), fb = _f(b);
      if (fb <= fa) return;
      canvas.drawArc(on ?? rect, _a(fa), 2 * math.pi * (fb - fa) * t, false, p);
    }

    // Night all round, daylight between sunrise and sunset.
    canvas.drawCircle(c, r, stroke(night, w));
    final daylight = Color.alphaBlend(accent.withValues(alpha: 0.2), bg);
    final sun = day.sun;
    if (sun.alwaysUp) {
      canvas.drawCircle(c, r, stroke(daylight, w));
    } else if (sun.sunrise != null && sun.sunset != null) {
      final fa = _f(sun.sunrise!), fb = _f(sun.sunset!);
      canvas.drawArc(rect, _a(fa), 2 * math.pi * (fb - fa), false, stroke(daylight, w));
    }

    // Periods in the one accent colour, told apart by width: Major wider than the ring, Minor a thin band
    // down its middle (a lighter colour got lost against the daylight part of the ring).
    for (final p in day.periods) {
      final major = p.kind == PeriodKind.major;
      arc(p.start, p.end, stroke(accent, major ? w + 8 : w * 0.42));
    }

    // Shooting light (Hunting view): thin line just inside the ring.
    final l = legal;
    if (l != null) {
      final inner = Rect.fromCircle(center: c, radius: r - w / 2 - 8);
      arc(l.start, l.end, stroke(ink, 3)..strokeCap = StrokeCap.round, on: inner);
    }

    // Hour ticks outside the ring, four labels inside it.
    for (var h = 0; h < 24; h++) {
      final a = _a(h / 24);
      final major = h % 6 == 0;
      final r0 = r + w / 2 + 6, r1 = r0 + (major ? 8 : 4);
      canvas.drawLine(
        c + Offset(math.cos(a), math.sin(a)) * r0,
        c + Offset(math.cos(a), math.sin(a)) * r1,
        Paint()
          ..color = tick
          ..strokeWidth = major ? 1.5 : 1,
      );
    }
    for (final (h, text) in [(0, '12 AM'), (6, '6 AM'), (12, 'NOON'), (18, '6 PM')]) {
      final tp = TextPainter(
        text: TextSpan(text: text, style: label),
        textDirection: TextDirection.ltr,
      )..layout();
      final a = _a(h / 24);
      final edge = r - w / 2 - 16; // inside the ring (and the shooting-light line)
      final p = c + Offset(math.cos(a), math.sin(a)) * edge;
      // Anchor the label's edge that faces the ring, so long labels grow inward.
      final o = switch (h) {
        0 => Offset(-tp.width / 2, -tp.height),
        6 => Offset(0, -tp.height / 2),
        12 => Offset(-tp.width / 2, 0),
        _ => Offset(-tp.width, -tp.height / 2),
      };
      tp.paint(canvas, p + o);
    }

    // Now: a dot on the ring with a ring of background colour around it.
    final n = now;
    if (n != null && day.contains(n)) {
      final a = _a(_f(n));
      final p = c + Offset(math.cos(a), math.sin(a)) * r;
      canvas.drawCircle(p, w / 2 + 3, Paint()..color = bg);
      canvas.drawCircle(p, w / 2 - 1, Paint()..color = ink);
    }
  }

  @override
  bool shouldRepaint(_DialPainter old) =>
      old.t != t || old.day != day || old.now != now || old.legal != legal || old.accent != accent || old.bg != bg;
}

/// One VoiceOver stop per list row. A `CupertinoListTile` with `onTap` adds no node of its own, so
/// Flutter merged its tap into the whole section — VoiceOver read "Starts 6:18 AM Ends … Adjust" as
/// one button (found in the web preview's accessibility tree).
class ListRow extends StatelessWidget {
  const ListRow({super.key, required this.child, this.button = false, this.hasButtons = false});
  final Widget child;
  final bool button;

  /// The row holds its own buttons (delete, −/+): keep them as separate stops instead of merging.
  final bool hasButtons;

  @override
  Widget build(BuildContext context) => hasButtons
      ? Semantics(container: true, button: button, child: child)
      : MergeSemantics(
          child: Semantics(button: button, child: child),
        );
}
