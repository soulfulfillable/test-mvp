import 'dart:math' as math;

import 'package:flutter/cupertino.dart';

import '../core/theme.dart';

/// 묶음 목록 머리글 — 설정 앱처럼 13pt 회색 대문자 (Flutter `insetGrouped` 기본은 20pt 굵게라 다르다).
class SectionHeader extends StatelessWidget {
  const SectionHeader(this.text, {super.key});
  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text.toUpperCase(),
    style: TextStyle(fontSize: kSmall, fontWeight: FontWeight.w400, color: dyn(context, CupertinoColors.secondaryLabel)),
  );
}

class SectionFooter extends StatelessWidget {
  const SectionFooter(this.text, {super.key});
  final String text;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: TextStyle(fontSize: kSmall, height: 1.35, color: dyn(context, CupertinoColors.secondaryLabel)),
  );
}

/// 강조색 버튼 하나 (높이 50, 모서리 14). 다크 모드의 밝은 강조색 위에는 검정 글씨.
class PrimaryButton extends StatelessWidget {
  const PrimaryButton({super.key, required this.label, required this.onPressed, this.icon});
  final String label;
  final IconData? icon;
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
          if (icon != null) ...[Icon(icon, size: 20, color: fg), const SizedBox(width: 8)],
          Flexible(
            child: FittedBox(
              fit: BoxFit.scaleDown,
              child: Text(label, style: TextStyle(fontSize: kBody, fontWeight: FontWeight.w600, color: fg)),
            ),
          ),
        ],
      ),
    );
  }
}

/// 리플 없는 글자 버튼 (Undo · Read Ahead 같은 보조 동작).
class TextAction extends StatelessWidget {
  const TextAction({super.key, required this.label, required this.onTap});
  final String label;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) => CupertinoButton(
    padding: const EdgeInsets.symmetric(horizontal: 4),
    minimumSize: const Size(44, 44),
    onPressed: onTap,
    child: Text(label, style: const TextStyle(fontSize: kBody)),
  );
}

/// 시그니처: 계획의 모든 장을 작은 칸으로. 읽음을 누르면 오늘 읽은 칸들이 차례로 '톡' 채워진다.
/// 다음에 읽을 칸은 강조색 테두리로 표시해 '어디쯤인지' 가 보인다.
class MiniMap extends StatefulWidget {
  const MiniMap({super.key, required this.total, required this.read, required this.next});

  /// 칸 수(계획의 장 수), 읽은 장 수, 다음에 읽을 장 수.
  final int total, read, next;

  @override
  State<MiniMap> createState() => _MiniMapState();
}

class _MiniMapState extends State<MiniMap> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: Duration.zero);
  int _from = 0;

  @override
  void initState() {
    super.initState();
    _from = widget.read;
  }

  @override
  void didUpdateWidget(MiniMap old) {
    super.didUpdateWidget(old);
    if (widget.read > old.read) {
      _from = old.read;
      final n = widget.read - _from;
      _c.duration = Duration(milliseconds: math.min(1400, 420 + n * 90));
      _c.forward(from: 0);
    } else if (widget.read < old.read) {
      _from = widget.read;
      _c.value = 1;
    }
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(
    builder: (context, box) {
      final g = _MapGeometry(box.maxWidth, widget.total);
      return Semantics(
        label: 'Reading map, ${widget.read} of ${widget.total} chapters read',
        child: SizedBox(
          key: const Key('minimap'),
          width: box.maxWidth,
          height: g.height,
          child: AnimatedBuilder(
            animation: _c,
            builder: (context, _) => CustomPaint(
              painter: _MiniMapPainter(
                g: g,
                read: widget.read,
                from: _from,
                next: widget.next,
                t: _c.isAnimating ? _c.value : 1,
                ms: (_c.duration ?? Duration.zero).inMilliseconds,
                on: dyn(context, accent),
                off: dyn(context, cellOff),
              ),
            ),
          ),
        ),
      );
    },
  );
}

class _MapGeometry {
  _MapGeometry(this.width, this.total) {
    // 칸 크기는 장 수에 맞춰: 1,189장은 작게, 시편·잠언 181장은 크게 — 높이가 너무 커지지 않게
    cell = total > 600 ? 5.5 : (total > 200 ? 9 : 11);
    gap = cell > 6 ? 2.5 : 1.5;
    cols = math.max(1, ((width + gap) / (cell + gap)).floor());
    rows = (total / cols).ceil();
    height = rows * (cell + gap) - gap;
  }
  final double width;
  final int total;
  late final double cell, gap, height;
  late final int cols, rows;

  Rect rectOf(int i) {
    final r = i ~/ cols, c = i % cols;
    return Rect.fromLTWH(c * (cell + gap), r * (cell + gap), cell, cell);
  }
}

class _MiniMapPainter extends CustomPainter {
  _MiniMapPainter({
    required this.g,
    required this.read,
    required this.from,
    required this.next,
    required this.t,
    required this.ms,
    required this.on,
    required this.off,
  });
  final _MapGeometry g;
  final int read, from, next, ms;
  final double t;
  final Color on, off;

  @override
  void paint(Canvas canvas, Size size) {
    final pOff = Paint()..color = off;
    final pOn = Paint()..color = on;
    final radius = Radius.circular(g.cell > 6 ? 2 : 1);
    for (var i = 0; i < g.total; i++) {
      final r = g.rectOf(i);
      canvas.drawRRect(RRect.fromRectAndRadius(r, radius), pOff);
      if (i < from || (i < read && t >= 1)) {
        canvas.drawRRect(RRect.fromRectAndRadius(r, radius), pOn);
      } else if (i < read) {
        // 칸마다 90ms 씩 늦게, 320ms 동안 살짝 넘치며 커진다
        final local = ((t * ms - (i - from) * 90) / 320).clamp(0.0, 1.0);
        if (local > 0) {
          final s = Curves.easeOutBack.transform(local);
          final rr = Rect.fromCenter(center: r.center, width: r.width * s, height: r.height * s);
          canvas.drawRRect(RRect.fromRectAndRadius(rr, radius), pOn);
        }
      } else if (i < read + next) {
        canvas.drawRRect(
          RRect.fromRectAndRadius(r.deflate(0.5), radius),
          Paint()
            ..color = on
            ..style = PaintingStyle.stroke
            ..strokeWidth = 1,
        );
      }
    }
  }

  @override
  bool shouldRepaint(_MiniMapPainter o) =>
      o.read != read || o.t != t || o.next != next || o.on != on || o.total != total;

  int get total => g.total;
}

/// 지도 화면의 책 한 줄: 장마다 칸 하나.
class BookCells extends StatelessWidget {
  const BookCells({super.key, required this.chapters, required this.isRead});
  final int chapters;
  final bool Function(int chapter) isRead;

  static const cell = 9.0, gap = 2.5;

  @override
  Widget build(BuildContext context) => LayoutBuilder(
    builder: (context, box) {
      final cols = math.max(1, ((box.maxWidth + gap) / (cell + gap)).floor());
      final rows = (chapters / cols).ceil();
      return SizedBox(
        width: box.maxWidth,
        height: rows * (cell + gap) - gap,
        child: CustomPaint(
          painter: _BookPainter(chapters, cols, isRead, dyn(context, accent), dyn(context, cellOff)),
        ),
      );
    },
  );
}

class _BookPainter extends CustomPainter {
  _BookPainter(this.n, this.cols, this.isRead, this.on, this.off);
  final int n, cols;
  final bool Function(int) isRead;
  final Color on, off;

  @override
  void paint(Canvas canvas, Size size) {
    const c = BookCells.cell, g = BookCells.gap;
    for (var i = 0; i < n; i++) {
      final r = Rect.fromLTWH((i % cols) * (c + g), (i ~/ cols) * (c + g), c, c);
      canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(2)), Paint()..color = isRead(i + 1) ? on : off);
    }
  }

  @override
  bool shouldRepaint(_BookPainter o) => true;
}
