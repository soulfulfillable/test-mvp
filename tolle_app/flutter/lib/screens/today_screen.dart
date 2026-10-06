import 'dart:async';

import 'package:clock/clock.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';

import '../core/bible.dart';
import '../core/plan.dart';
import '../core/store.dart';
import '../core/theme.dart';
import 'widgets.dart';

/// 주인공 화면: 오늘 읽을 분량 하나만 크게 + "Mark as Read" + 1,189칸 지도(시그니처). 광고 없음.
class TodayScreen extends StatefulWidget {
  const TodayScreen({super.key, required this.onOpenPlan});
  final VoidCallback onOpenPlan;

  @override
  State<TodayScreen> createState() => _TodayScreenState();
}

class _TodayScreenState extends State<TodayScreen> {
  /// 연타 방지 — 누른 뒤 0.6초 잠금 (Timer 라 위젯 테스트 가짜 시계에서도 풀린다).
  bool _locked = false;
  Timer? _unlock;

  void _guard(VoidCallback f) {
    if (_locked) return;
    _locked = true;
    _unlock?.cancel();
    _unlock = Timer(const Duration(milliseconds: 600), () => _locked = false);
    f();
  }

  @override
  void dispose() {
    _unlock?.cancel();
    super.dispose();
  }

  void _markRead() => _guard(() {
    HapticFeedback.mediumImpact();
    AppStore.i.markRead();
  });

  void _undo() => _guard(AppStore.i.undo);

  Future<void> _adjust() async {
    final s = AppStore.i;
    final spread = s.previewSpread();
    final shift = s.previewShift();
    await showCupertinoModalPopup<void>(
      context: context,
      builder: (ctx) => CupertinoActionSheet(
        title: const Text('Adjust Your Schedule'),
        message: Text(
          [
            if (spread != null && s.behind > 0)
              'Spread the rest: still finish ${fmtDate(dateOf(spread.endDay))}.',
            'Continue from today: finish ${fmtDate(dateOf(shift.endDay))}.',
          ].join('\n'),
        ),
        actions: [
          if (spread != null && s.behind > 0)
            CupertinoActionSheetAction(
              key: const Key('spread'),
              onPressed: () {
                Navigator.pop(ctx);
                s.spread();
              },
              child: const Text('Spread the Rest'),
            ),
          CupertinoActionSheetAction(
            key: const Key('shift'),
            onPressed: () {
              Navigator.pop(ctx);
              s.shift();
            },
            child: const Text('Continue From Today'),
          ),
        ],
        cancelButton: CupertinoActionSheetAction(
          isDefaultAction: true,
          onPressed: () => Navigator.pop(ctx),
          child: const Text('Cancel'),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) => ListenableBuilder(
    listenable: AppStore.i,
    builder: (context, _) {
      final s = AppStore.i;
      final base = textOf(context);
      final secondary = dyn(context, CupertinoColors.secondaryLabel);
      final small = base.copyWith(fontSize: kSmall, color: secondary);
      final body2 = base.copyWith(color: secondary);
      final hero = base.copyWith(
        fontSize: kHero,
        fontWeight: FontWeight.w600,
        height: 1.12,
        letterSpacing: -0.4,
      );

      // 오늘 하루치를 읽었으면 '마친 날' 을, 아니면 다음에 읽을 날을 주인공으로
      final showDone = s.readToday || s.finished;
      final heroDay = showDone ? s.done - 1 : s.done;
      final heroIds = heroDay >= 0
          ? s.schedule.chaptersOn(heroDay)
          : const <int>[];
      final next = s.nextDay;
      final nextIds = next == null
          ? const <int>[]
          : s.schedule.chaptersOn(next);
      final behind = s.behind;

      final String kicker;
      if (s.finished) {
        kicker = 'PLAN COMPLETE';
      } else if (showDone) {
        kicker = 'DAY ${heroDay + 1} · READ';
      } else if (behind >= 2) {
        kicker = 'PICK UP WHERE YOU LEFT OFF';
      } else if (behind <= 0) {
        kicker = 'UP NEXT';
      } else {
        kicker = "TODAY'S READING";
      }

      return CupertinoPageScaffold(
        child: SafeArea(
          bottom: false,
          child: ListView(
            key: const Key('today-list'),
            padding: const EdgeInsets.fromLTRB(20, 20, 20, 32),
            children: [
              Text(
                fmtLongDate(clock.now()).toUpperCase(),
                style: small,
                key: const Key('date'),
              ),
              const SizedBox(height: 2),
              Text(
                '${s.scope.title} · ${s.order == Order.chronological && s.scope.hasOrder ? 'Chronological · ' : ''}Day ${(showDone ? heroDay : s.done) + 1} of ${s.schedule.length}',
                style: body2,
                key: const Key('plan-line'),
              ),
              const SizedBox(height: 36),
              Row(
                children: [
                  if (showDone) ...[
                    Icon(
                      CupertinoIcons.checkmark_alt,
                      size: 16,
                      color: dyn(context, accent),
                    ),
                    const SizedBox(width: 4),
                  ],
                  Expanded(
                    child: Text(
                      kicker,
                      key: const Key('kicker'),
                      style: small.copyWith(
                        color: showDone ? dyn(context, accent) : secondary,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 6),
              if (s.finished && heroIds.isEmpty)
                Text('Every chapter read.', style: hero)
              else
                Semantics(
                  label: readingLabel(heroIds),
                  excludeSemantics: true,
                  // 책이 둘이면 줄을 나눠 '2 / Samuel' 처럼 이름 중간에서 끊기지 않게
                  child: Text(
                    readingParts(heroIds).join('\n'),
                    key: const Key('reading'),
                    style: hero,
                  ),
                ),
              const SizedBox(height: 8),
              if (heroIds.isNotEmpty)
                Text(
                  'About ${minutesFor(heroIds)} min · ${heroIds.length} ${heroIds.length == 1 ? 'chapter' : 'chapters'}',
                  style: body2,
                ),
              const SizedBox(height: 28),
              if (s.finished) ...[
                Text(
                  'You finished ${s.scope.title} — ${fmtInt(s.chaptersTotal)} chapters.',
                  style: body2,
                ),
                const SizedBox(height: 16),
                PrimaryButton(
                  key: const Key('new-plan'),
                  label: 'Start a New Plan',
                  onPressed: widget.onOpenPlan,
                ),
              ] else if (!showDone) ...[
                Semantics(
                  button: true,
                  label: 'Mark as Read',
                  onTap: _markRead,
                  excludeSemantics: true,
                  child: PrimaryButton(
                    key: const Key('mark-read'),
                    label: 'Mark as Read',
                    icon: CupertinoIcons.checkmark_alt,
                    onPressed: _markRead,
                  ),
                ),
                if (s.done > 0) ...[
                  const SizedBox(height: 4),
                  Center(
                    child: TextAction(
                      key: const Key('undo'),
                      label: 'Undo Last',
                      onTap: _undo,
                    ),
                  ),
                ],
              ] else ...[
                // 오늘 분은 끝 — 다음 분량은 조용히, 미리 읽기는 원할 때만
                Text(
                  'Next: ${readingLabel(nextIds)}',
                  key: const Key('next'),
                  style: base,
                ),
                const SizedBox(height: 4),
                Row(
                  children: [
                    TextAction(
                      key: const Key('read-ahead'),
                      label: 'Read Ahead',
                      onTap: _markReadAhead,
                    ),
                    const Spacer(),
                    TextAction(
                      key: const Key('undo'),
                      label: 'Undo',
                      onTap: _undo,
                    ),
                  ],
                ),
              ],
              if (!s.finished && behind >= 2) ...[
                const SizedBox(height: 12),
                Text(
                  "You're ${behind - 1} ${behind - 1 == 1 ? 'reading' : 'readings'} behind the calendar — that's okay.",
                  style: body2,
                  key: const Key('behind'),
                ),
                Align(
                  alignment: Alignment.centerLeft,
                  child: TextAction(
                    key: const Key('adjust'),
                    label: 'Adjust Schedule',
                    onTap: _adjust,
                  ),
                ),
              ],
              const SizedBox(height: 40),
              MiniMap(
                total: s.chaptersTotal,
                read: s.chaptersRead,
                next: s.finished ? 0 : nextIds.length,
              ),
              const SizedBox(height: 10),
              Row(
                children: [
                  Expanded(
                    child: Text(
                      '${fmtInt(s.chaptersRead)} of ${fmtInt(s.chaptersTotal)} chapters',
                      style: small,
                      key: const Key('count'),
                    ),
                  ),
                  Text(
                    '${(s.chaptersRead * 100 / s.chaptersTotal).floor()}%',
                    style: small.copyWith(fontFeatures: tabular),
                  ),
                ],
              ),
              if (s.fresh) ...[
                const SizedBox(height: 28),
                Text(
                  'Starting with the Whole Bible in a year, from today.',
                  style: small,
                ),
                Align(
                  alignment: Alignment.centerLeft,
                  child: TextAction(
                    key: const Key('change-plan'),
                    label: 'Change Plan',
                    onTap: widget.onOpenPlan,
                  ),
                ),
              ],
            ],
          ),
        ),
      );
    },
  );

  void _markReadAhead() => _guard(() {
    HapticFeedback.selectionClick();
    AppStore.i.markRead();
  });
}
