import 'dart:math' as math;

import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';

import '../app.dart';
import '../core/lesson.dart';
import '../core/scene.dart';
import 'widgets.dart';

/// 레슨 한 장: 도해(번호 탭 → 설명, See it work → 움직이는 원리) · 단계 · 설계 이유 · 놀라운 사실 · 퀴즈 · 출처 · 다음 레슨
class LessonBody extends StatefulWidget {
  const LessonBody({super.key, required this.lesson, required this.onOpen});
  final Lesson lesson;
  final void Function(String key) onOpen;
  @override
  State<LessonBody> createState() => _LessonBodyState();
}

class _LessonBodyState extends State<LessonBody> with SingleTickerProviderStateMixin {
  int sel = 0;
  late final AnimationController play = AnimationController(vsync: this, duration: _dur)
    ..addStatusListener((s) {
      if (s == AnimationStatus.completed) setState(() => play.value = 0);
    });
  Duration get _dur => Duration(milliseconds: (widget.lesson.dur * 1000).round());

  @override
  void didUpdateWidget(LessonBody o) {
    super.didUpdateWidget(o);
    if (o.lesson.key != widget.lesson.key) {
      sel = 0;
      play
        ..stop()
        ..value = 0
        ..duration = _dur;
    }
  }

  @override
  void dispose() {
    play.dispose();
    super.dispose();
  }

  bool get playing => play.isAnimating;
  double get t => play.value * widget.lesson.dur;
  int get stepNow => playing ? widget.lesson.steps.indexWhere((s) => t >= s.t0 && t < s.t1) : -1;

  void select(int n) {
    tick();
    play
      ..stop()
      ..value = 0;
    setState(() => sel = sel == n ? 0 : n);
  }

  void togglePlay() {
    tick();
    setState(() {
      if (playing) {
        play
          ..stop()
          ..value = 0;
      } else {
        sel = 0;
        play.forward(from: 0);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final L = widget.lesson;
    final store = AppScope.of(context).store;
    final label2 = c(context, CupertinoColors.secondaryLabel);
    return ListenableBuilder(
      listenable: store,
      builder: (context, _) => Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(18, 14, 6, 0),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('${L.cat} · ${L.mins} min', style: TextStyle(fontSize: 13, color: label2)),
                const SizedBox(height: 2),
                Text(L.title, key: const Key('lesson-title'), style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, height: 1.15)),
              ]),
            ),
            Semantics(
              button: true,
              label: store.isSaved(L.key) ? 'Saved' : 'Save',
              excludeSemantics: true,
              onTap: () => store.toggleSave(L.key),
              child: CupertinoButton(
                key: const Key('save'),
                padding: EdgeInsets.zero,
                minimumSize: const Size(44, 44),
                onPressed: () {
                  tick();
                  store.toggleSave(L.key);
                },
                child: Icon(store.isSaved(L.key) ? CupertinoIcons.bookmark_fill : CupertinoIcons.bookmark, color: c(context, accent)),
              ),
            ),
          ]),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(18, 6, 18, 14),
          child: Text(L.summary, style: const TextStyle(fontSize: 17, height: 1.35)),
        ),
        AnimatedBuilder(animation: play, builder: (context, _) => _diagram(L)),
        const SizedBox(height: 10),
        _callout(L),
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 0),
          child: AnimatedBuilder(
            animation: play,
            builder: (context, _) => Semantics(
              button: true,
              label: playing ? 'Stop' : 'See it work',
              excludeSemantics: true,
              onTap: togglePlay,
              child: CupertinoButton(
                key: const Key('play'),
                color: c(context, accent).withValues(alpha: .12),
                borderRadius: BorderRadius.circular(12),
                padding: const EdgeInsets.symmetric(vertical: 12),
                onPressed: togglePlay,
                child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                  Icon(playing ? CupertinoIcons.stop_fill : CupertinoIcons.play_fill, size: 16, color: c(context, accent)),
                  const SizedBox(width: 8),
                  Text(playing ? 'Stop' : 'See it work',
                      style: TextStyle(fontSize: 17, fontWeight: FontWeight.w600, color: c(context, accent))),
                ]),
              ),
            ),
          ),
        ),
        const SectionHeader('How it works'),
        AnimatedBuilder(animation: play, builder: (context, _) => _steps(L)),
        const SectionHeader('Why it’s built this way'),
        Card(child: Text(L.why, key: const Key('why'), style: const TextStyle(fontSize: 17, height: 1.35))),
        const SectionHeader('Did you know?'),
        Card(child: Text(L.fact, style: const TextStyle(fontSize: 17, height: 1.35))),
        const SectionHeader('Quick check'),
        _quiz(L, store.pick(L.key), (i) {
          if (i == L.quiz.answer) {
            HapticFeedback.lightImpact();
          } else {
            HapticFeedback.selectionClick();
          }
          store.answer(L.key, i);
        }),
        const SectionHeader('Sources'),
        _sources(L),
        _next(L),
        const SizedBox(height: 32),
      ]),
    );
  }

  Widget _diagram(Lesson L) {
    final focus = playing
        ? (stepNow >= 0 ? L.steps[stepNow].parts.toSet() : <int>{})
        : (sel > 0 ? {sel} : <int>{});
    final frame = playing ? math.min((t * L.scene.fps).floor(), L.scene.frames - 1) : null;
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 12),
      child: LayoutBuilder(builder: (context, box) {
        final w = box.maxWidth, s = w / L.scene.w;
        var minD = 1e9;
        for (final a in L.parts) {
          for (final b in L.parts) {
            if (a.n < b.n) minD = math.min(minD, (a.num - b.num).distance);
          }
        }
        final hit = (minD * s).clamp(28.0, 44.0);
        return Container(
          key: const Key('diagram'),
          decoration: BoxDecoration(
            color: const Color(0xFFFFFFFF),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: const Color(0x1F000000), width: .5),
          ),
          clipBehavior: Clip.antiAlias,
          child: SizedBox(
            width: w,
            height: w / L.aspect,
            child: Stack(children: [
              Positioned.fill(
                child: RepaintBoundary(
                  child: CustomPaint(
                    painter: DiagramPainter(scene: L.scene, parts: L.partRefs, focus: focus, frame: frame),
                    child: Semantics(label: 'Cutaway drawing of a ${L.title.toLowerCase()}', image: true),
                  ),
                ),
              ),
              for (final p in L.parts)
                Positioned(
                  left: p.num.dx * s - hit / 2,
                  top: p.num.dy * s - hit / 2,
                  width: hit,
                  height: hit,
                  child: Semantics(
                    button: true,
                    selected: sel == p.n,
                    label: '${p.n}. ${p.name}',
                    onTap: () => select(p.n),
                    excludeSemantics: true,
                    child: GestureDetector(
                      key: Key('badge-${p.n}'),
                      behavior: HitTestBehavior.opaque,
                      onTap: () => select(p.n),
                    ),
                  ),
                ),
            ]),
          ),
        );
      }),
    );
  }

  Widget _callout(Lesson L) {
    final p = sel > 0 ? L.parts[sel - 1] : null;
    final a = c(context, accent);
    return Card(
      key: const Key('callout'),
      padding: const EdgeInsets.fromLTRB(14, 10, 4, 10),
      child: ConstrainedBox(
        constraints: const BoxConstraints(minHeight: 56),
        child: p == null
            ? Align(
                alignment: Alignment.centerLeft,
                child: Text('Tap a number on the drawing to see what that part does.',
                    style: TextStyle(fontSize: 17, color: c(context, CupertinoColors.secondaryLabel))),
              )
            : Row(children: [
                Container(
                  width: 26,
                  height: 26,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: a, width: 1.5)),
                  child: Text('${p.n}', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: a)),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Semantics(
                    liveRegion: true,
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(p.name, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w600)),
                      const SizedBox(height: 1),
                      Text(p.desc, style: const TextStyle(fontSize: 17, height: 1.3)),
                    ]),
                  ),
                ),
                Column(mainAxisSize: MainAxisSize.min, children: [
                  _arrow(CupertinoIcons.chevron_up, 'prev-part', 'Previous part', sel > 1 ? () => select(sel - 1) : null),
                  _arrow(CupertinoIcons.chevron_down, 'next-part', 'Next part', sel < L.parts.length ? () => select(sel + 1) : null),
                ]),
              ]),
      ),
    );
  }

  Widget _arrow(IconData i, String key, String label, VoidCallback? on) => Semantics(
        button: true,
        enabled: on != null,
        label: label,
        excludeSemantics: true,
        onTap: on,
        child: CupertinoButton(
          key: Key(key),
          padding: EdgeInsets.zero,
          minimumSize: const Size(44, 36),
          onPressed: on,
          child: Icon(i, size: 18),
        ),
      );

  Widget _steps(Lesson L) {
    final now = stepNow;
    final a = c(context, accent);
    return Card(
      padding: EdgeInsets.zero,
      child: Column(children: [
        for (var i = 0; i < L.steps.length; i++)
          AnimatedContainer(
            key: Key('step-$i'),
            duration: const Duration(milliseconds: 200),
            decoration: BoxDecoration(
              color: i == now ? a.withValues(alpha: .10) : const Color(0x00000000),
              border: i == 0 ? null : Border(top: BorderSide(color: c(context, CupertinoColors.separator), width: .5)),
              borderRadius: BorderRadius.vertical(
                top: i == 0 ? const Radius.circular(12) : Radius.zero,
                bottom: i == L.steps.length - 1 ? const Radius.circular(12) : Radius.zero,
              ),
            ),
            padding: const EdgeInsets.fromLTRB(14, 11, 14, 11),
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              SizedBox(width: 22, child: Text('${i + 1}', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w600, color: a))),
              Expanded(child: Text(L.steps[i].text, style: const TextStyle(fontSize: 17, height: 1.35))),
            ]),
          ),
      ]),
    );
  }

  Widget _quiz(Lesson L, int? pick, void Function(int) onPick) {
    final q = L.quiz;
    final ok = c(context, CupertinoColors.systemGreen), bad = c(context, accent), sep = c(context, CupertinoColors.separator);
    return Card(
      padding: EdgeInsets.zero,
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
          child: Text(q.q, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w600, height: 1.3)),
        ),
        for (var i = 0; i < q.opts.length; i++)
          Semantics(
            button: pick == null,
            label: q.opts[i] + (pick == null ? '' : i == q.answer ? ', correct answer' : i == pick ? ', your answer, wrong' : ''),
            excludeSemantics: true,
            onTap: pick == null ? () => onPick(i) : null,
            child: GestureDetector(
              key: Key('opt-$i'),
              behavior: HitTestBehavior.opaque,
              onTap: pick == null ? () => onPick(i) : null,
              child: Container(
                constraints: const BoxConstraints(minHeight: 48),
                padding: const EdgeInsets.fromLTRB(14, 11, 14, 11),
                decoration: BoxDecoration(border: Border(top: BorderSide(color: sep, width: .5))),
                child: Row(children: [
                  Container(
                    width: 22,
                    height: 22,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: pick == null ? null : i == q.answer ? ok : i == pick ? bad : null,
                      border: Border.all(color: pick == null || (i != q.answer && i != pick) ? sep : const Color(0x00000000), width: 1.5),
                    ),
                    child: pick == null || (i != q.answer && i != pick)
                        ? null
                        : Icon(i == q.answer ? CupertinoIcons.check_mark : CupertinoIcons.xmark, size: 13, color: const Color(0xFFFFFFFF)),
                  ),
                  const SizedBox(width: 10),
                  Expanded(child: Text(q.opts[i], style: const TextStyle(fontSize: 17, height: 1.3))),
                ]),
              ),
            ),
          ),
        if (pick != null)
          Container(
            key: const Key('quiz-result'),
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
            decoration: BoxDecoration(border: Border(top: BorderSide(color: sep, width: .5))),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(pick == q.answer ? '1 more thing you know.' : 'Not quite — now you know.',
                  style: TextStyle(fontSize: 17, fontWeight: FontWeight.w600, color: pick == q.answer ? ok : null)),
              const SizedBox(height: 2),
              Text(q.why, style: const TextStyle(fontSize: 17, height: 1.35)),
            ]),
          ),
      ]),
    );
  }

  Widget _sources(Lesson L) => Card(
        padding: EdgeInsets.zero,
        child: Column(children: [
          for (var i = 0; i < L.sources.length; i++)
            Semantics(
              link: true,
              label: L.sources[i].$1,
              excludeSemantics: true,
              onTap: () => openUrl(L.sources[i].$2),
              child: GestureDetector(
                key: Key('src-$i'),
                behavior: HitTestBehavior.opaque,
                onTap: () => openUrl(L.sources[i].$2),
                child: Container(
                  constraints: const BoxConstraints(minHeight: 44),
                  padding: const EdgeInsets.fromLTRB(14, 10, 10, 10),
                  decoration: BoxDecoration(
                    border: i == 0 ? null : Border(top: BorderSide(color: c(context, CupertinoColors.separator), width: .5)),
                  ),
                  child: Row(children: [
                    Expanded(child: Text(L.sources[i].$1, style: TextStyle(fontSize: 13, color: c(context, CupertinoColors.secondaryLabel)))),
                    Icon(CupertinoIcons.arrow_up_right, size: 14, color: c(context, CupertinoColors.tertiaryLabel)),
                  ]),
                ),
              ),
            ),
        ]),
      );

  Widget _next(Lesson L) {
    final scope = AppScope.of(context);
    final idx = scope.library.index;
    final i = idx.indexWhere((e) => e.key == L.key);
    if (i < 0) return const SizedBox.shrink();
    final n = idx[(i + 1) % idx.length];
    final open = scope.store.unlocked(n.day);
    final label2 = c(context, CupertinoColors.secondaryLabel);
    final wait = scope.store.daysUntil(n.day);
    return Padding(
      padding: const EdgeInsets.only(top: 18),
      child: Semantics(
        button: open,
        label: open ? 'Next lesson: ${n.title}' : 'Next lesson, ${n.title}, unlocks ${wait == 1 ? 'tomorrow' : 'in $wait days'}',
        excludeSemantics: true,
        onTap: open ? () => widget.onOpen(n.key) : null,
        child: GestureDetector(
          key: const Key('next-lesson'),
          behavior: HitTestBehavior.opaque,
          onTap: open ? () => widget.onOpen(n.key) : null,
          child: Card(
            child: Row(children: [
              Thumb(n),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(open ? 'Next lesson' : (wait == 1 ? 'Tomorrow' : 'In $wait days'), style: TextStyle(fontSize: 13, color: label2)),
                  Text(n.title, style: TextStyle(fontSize: 17, color: open ? null : label2)),
                ]),
              ),
              Icon(open ? CupertinoIcons.chevron_forward : CupertinoIcons.lock, size: 17, color: c(context, CupertinoColors.tertiaryLabel)),
            ]),
          ),
        ),
      ),
    );
  }
}
