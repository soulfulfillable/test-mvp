import 'package:flutter/cupertino.dart';

import '../core/ads.dart';
import '../core/format.dart';
import '../core/solunar.dart';
import '../core/store.dart';
import '../core/theme.dart';
import 'widgets.dart';

/// Asks to watch a rewarded video, then opens the 30-day calendar for 24 hours.
/// Returns true when the calendar is open.
Future<bool> unlockCalendarFlow(BuildContext context) async {
  final go = await showCupertinoDialog<bool>(
    context: context,
    builder: (ctx) => CupertinoAlertDialog(
      title: const Text('30-Day Calendar'),
      content: const Text(
        'Watch a short video to open the 30-day calendar for 24 hours. Today and the next 7 days are always free.',
      ),
      actions: [
        CupertinoDialogAction(
          key: const Key('unlock-cancel'),
          onPressed: () => Navigator.of(ctx).pop(false),
          child: const Text('Not Now'),
        ),
        CupertinoDialogAction(
          key: const Key('unlock-watch'),
          isDefaultAction: true,
          onPressed: () => Navigator.of(ctx).pop(true),
          child: const Text('Watch Video'),
        ),
      ],
    ),
  );
  if (go != true || !context.mounted) return false;

  // While the video loads (up to Ads.waitForVideo) show a small "Loading video…".
  final nav = Navigator.of(context, rootNavigator: true);
  var loadingShown = false;
  if (!Ads.i.isReady(RewardPlacement.calendar)) {
    loadingShown = true;
    showCupertinoDialog<void>(
      context: context,
      builder: (_) => const PopScope(
        canPop: false,
        child: CupertinoAlertDialog(
          key: Key('video-loading'),
          content: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [CupertinoActivityIndicator(), SizedBox(width: 12), Text('Loading video…')],
          ),
        ),
      ),
    );
  }
  final result = await Ads.i.showRewarded(RewardPlacement.calendar);
  if (loadingShown) nav.pop();
  if (!context.mounted) return false;
  switch (result) {
    case RewardResult.rewarded:
      await AppStore.i.unlockCalendar();
      return true;
    case RewardResult.closedEarly:
      await showCupertinoDialog<void>(
        context: context,
        builder: (ctx) => CupertinoAlertDialog(
          key: const Key('closed-early'),
          title: const Text('Video Closed Early'),
          content: const Text('The calendar stays locked. Watch to the end to open it for 24 hours.'),
          actions: [
            CupertinoDialogAction(
              key: const Key('closed-early-ok'),
              isDefaultAction: true,
              onPressed: () => Navigator.of(ctx).pop(),
              child: const Text('OK'),
            ),
          ],
        ),
      );
      return false;
    case RewardResult.unavailable:
      // No video to show (no signal, no ad to fill): don't make people pay for our ad gap.
      await AppStore.i.unlockCalendar();
      return true;
  }
}

/// 30 days from today, laid out by week like the Calendar app. Tap a day to see it on the main screen.
class CalendarScreen extends StatefulWidget {
  const CalendarScreen({super.key});

  @override
  State<CalendarScreen> createState() => _CalendarScreenState();
}

class _CalendarScreenState extends State<CalendarScreen> {
  late final List<SolunarDay> _days = SolunarDay.week(AppStore.i.place!, AppStore.i.clock(), count: 30);

  @override
  Widget build(BuildContext context) {
    final first = _days.first.wallDay;
    final lead = first.weekday % 7; // Sunday-first weeks
    final cells = <Widget>[
      for (var i = 0; i < lead; i++) const SizedBox.shrink(),
      for (final (i, d) in _days.indexed) _cell(d, i),
    ];
    final best = [..._days]..sort((a, b) => b.score.total.compareTo(a.score.total));
    final secondary = dyn(context, CupertinoColors.secondaryLabel);
    return CupertinoPageScaffold(
      child: CustomScrollView(
        key: const Key('calendar-list'),
        slivers: [
          const CupertinoSliverNavigationBar(largeTitle: Text('30 Days'), leading: BackLink(), border: null),
          SliverPadding(
            padding: const EdgeInsets.fromLTRB(12, 0, 12, 0),
            sliver: SliverList.list(
              children: [
                Padding(
                  padding: const EdgeInsets.only(left: 4, bottom: 10),
                  child: Text(
                    '${AppStore.i.place!.name} · longer bar, better day',
                    style: TextStyle(fontSize: kSmall, color: secondary),
                  ),
                ),
                Row(
                  children: [
                    for (final w in const ['S', 'M', 'T', 'W', 'T', 'F', 'S'])
                      Expanded(
                        child: Text(
                          w,
                          textAlign: TextAlign.center,
                          style: TextStyle(fontSize: kSmall, color: secondary),
                        ),
                      ),
                  ],
                ),
                const SizedBox(height: 4),
                GridView.count(
                  crossAxisCount: 7,
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  childAspectRatio: 0.8,
                  children: cells,
                ),
              ],
            ),
          ),
          SliverList.list(
            children: [
              CupertinoListSection.insetGrouped(
                header: const SectionHeader('Best days ahead'),
                children: [
                  for (final (i, d) in best.take(5).indexed)
                    ListRow(
                      button: true,
                      child: CupertinoListTile(
                        key: Key('best-$i'),
                        leading: MoonIcon(illumination: d.phase.illumination, waxing: d.phase.waxing, size: 22),
                        title: Text(dayLabel(d.wallDay)),
                        subtitle: Text(d.phase.phase.label),
                        additionalInfo: Text('${d.score.total}', style: const TextStyle(fontFeatures: tabular)),
                        trailing: const CupertinoListTileChevron(),
                        onTap: () => Navigator.of(context).pop(d.wallDay),
                      ),
                    ),
                ],
              ),
              const SizedBox(height: 24),
            ],
          ),
        ],
      ),
    );
  }

  Widget _cell(SolunarDay d, int i) {
    final base = textOf(context);
    final a = dyn(context, accent);
    final first = d.wallDay.day == 1 || i == 0;
    return Tap(
      key: Key('cal-$i'),
      label: '${dayLabel(d.wallDay)}, score ${d.score.total} ${d.score.rating.label}',
      onTap: () => Navigator.of(context).pop(d.wallDay),
      // Big text settings shrink to fit the cell instead of spilling out.
      child: FittedBox(
        fit: BoxFit.scaleDown,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              first ? monthName(d.wallDay).toUpperCase() : ' ',
              style: base.copyWith(fontSize: kSmall, color: a, fontWeight: FontWeight.w600),
            ),
            Container(
              width: 34,
              height: 34,
              alignment: Alignment.center,
              decoration: i == 0
                  ? BoxDecoration(
                      border: Border.all(color: a, width: 1.5),
                      shape: BoxShape.circle,
                    )
                  : null,
              child: Text(
                '${d.wallDay.day}',
                style: base.copyWith(
                  fontSize: kBody,
                  fontFeatures: tabular,
                  fontWeight: i == 0 ? FontWeight.w600 : null,
                ),
              ),
            ),
            const SizedBox(height: 4),
            ScoreBar(score: d.score, width: 28),
            const SizedBox(height: 2),
            MoonIcon(illumination: d.phase.illumination, waxing: d.phase.waxing, size: 10),
          ],
        ),
      ),
    );
  }
}
