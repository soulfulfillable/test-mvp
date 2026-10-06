import 'package:flutter/cupertino.dart';

import '../core/ads.dart';
import '../core/bible.dart';
import '../core/notify.dart';
import '../core/plan.dart';
import '../core/share.dart';
import '../core/store.dart';
import '../core/theme.dart';
import 'widgets.dart';

/// 계획: 범위 · 기간 · 순서 · 시작일 · 알림 · 백업. 설정 앱식 묶음 목록.
class PlanScreen extends StatelessWidget {
  const PlanScreen({super.key});

  /// 진행이 있으면 새 계획 전에 묻는다 (지도가 새로 시작되므로).
  static Future<void> _startPlan(BuildContext context, Scope s, Order o, int len) async {
    final st = AppStore.i;
    if (st.done > 0) {
      final ok = await showCupertinoDialog<bool>(
        context: context,
        builder: (ctx) => CupertinoAlertDialog(
          title: const Text('Start a New Plan?'),
          content: Text(
            'Your map starts fresh. The ${st.done} ${st.done == 1 ? 'day' : 'days'} you checked off in this plan will be cleared.',
          ),
          actions: [
            CupertinoDialogAction(isDefaultAction: true, onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            CupertinoDialogAction(
              key: const Key('confirm-new-plan'),
              isDestructiveAction: true,
              onPressed: () => Navigator.pop(ctx, true),
              child: const Text('Start New Plan'),
            ),
          ],
        ),
      );
      if (ok != true) return;
    }
    st.startPlan(s, o, len);
  }

  static Future<DateTime?> _pick(BuildContext context, CupertinoDatePickerMode mode, DateTime initial, String title) {
    var value = initial;
    return showCupertinoModalPopup<DateTime>(
      context: context,
      builder: (ctx) => Container(
        height: 300,
        color: dyn(ctx, CupertinoColors.systemBackground),
        child: SafeArea(
          top: false,
          child: Column(
            children: [
              Row(
                children: [
                  CupertinoButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
                  Expanded(child: Text(title, textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.w600))),
                  CupertinoButton(
                    key: const Key('picker-done'),
                    onPressed: () => Navigator.pop(ctx, value),
                    child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w600)),
                  ),
                ],
              ),
              Expanded(
                child: CupertinoDatePicker(
                  mode: mode,
                  initialDateTime: initial,
                  onDateTimeChanged: (v) => value = v,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) => ListenableBuilder(
    listenable: AppStore.i,
    builder: (context, _) {
      final s = AppStore.i;
      final secondary = dyn(context, CupertinoColors.secondaryLabel);
      Widget check(bool on) =>
          on ? Icon(CupertinoIcons.checkmark_alt, color: dyn(context, accent), size: 22) : const SizedBox(width: 22);
      Widget value(String t, {Key? key}) => Text(t, key: key, style: TextStyle(color: secondary));

      final seqLen = s.schedule.seq.length;
      final totalVerses = s.schedule.seq.fold<int>(0, (a, id) => a + versesOf(id));

      return CupertinoPageScaffold(
        backgroundColor: CupertinoColors.systemGroupedBackground,
        child: Column(
          children: [
            Expanded(
              child: CustomScrollView(
                key: const Key('plan-list'),
                slivers: [
                  const CupertinoSliverNavigationBar(
                    largeTitle: Text('Plan'),
                    backgroundColor: CupertinoColors.systemGroupedBackground,
                    border: null,
                  ),
                  SliverList.list(
                    children: [
                      CupertinoListSection.insetGrouped(
                        header: const SectionHeader('Read'),
                        children: [
                          for (final sc in Scope.values)
                            CupertinoListTile(
                              key: Key('scope-${sc.name}'),
                              title: Text(sc.title),
                              subtitle: _Sub(switch (sc) {
                                Scope.whole => '1,189 chapters',
                                Scope.newTestament => '260 chapters',
                                Scope.psalmsProverbs => '181 chapters',
                              }),
                              trailing: check(s.scope == sc),
                              onTap: s.scope == sc ? null : () => _startPlan(context, sc, s.order, sc.lengths.first),
                            ),
                        ],
                      ),
                      CupertinoListSection.insetGrouped(
                        header: const SectionHeader('Length'),
                        children: [
                          for (final len in s.scope.lengths)
                            CupertinoListTile(
                              key: Key('len-$len'),
                              title: Text(lengthTitle(len)),
                              subtitle: _Sub(
                                'About ${(seqLen / len).toStringAsFixed(seqLen / len < 10 ? 1 : 0).replaceAll('.0', '')} chapters, ${(totalVerses * 7.5 / 60 / len).round()} min a day',
                              ),
                              trailing: check(s.length == len),
                              onTap: s.length == len ? null : () => _startPlan(context, s.scope, s.order, len),
                            ),
                        ],
                      ),
                      if (s.scope.hasOrder)
                        CupertinoListSection.insetGrouped(
                          header: const SectionHeader('Order'),
                          footer: const SectionFooter(
                            'Chronological reads events roughly in the order they happened — Job after Genesis 11, '
                            'Psalms beside David’s life, prophets with their kings, letters within Acts.',
                          ),
                          children: [
                            Padding(
                              padding: const EdgeInsets.all(8),
                              child: SizedBox(
                                width: double.infinity,
                                child: CupertinoSlidingSegmentedControl<Order>(
                                  key: const Key('order'),
                                  groupValue: s.order,
                                  children: {
                                    for (final o in Order.values)
                                      o: Padding(
                                        padding: const EdgeInsets.symmetric(vertical: 6),
                                        child: Text(o.title, key: Key('order-${o.name}')),
                                      ),
                                  },
                                  onValueChanged: (o) {
                                    if (o != null && o != s.order) _startPlan(context, s.scope, o, s.length);
                                  },
                                ),
                              ),
                            ),
                          ],
                        ),
                      CupertinoListSection.insetGrouped(
                        header: const SectionHeader('Schedule'),
                        footer: s.behind >= 2 && !s.finished
                            ? const SectionFooter('Behind the calendar? Spread what’s left or continue from today.')
                            : null,
                        children: [
                          CupertinoListTile(
                            key: const Key('start-date'),
                            title: const Text('Start Date'),
                            additionalInfo: value(fmtDate(dateOf(s.schedule.dates.first)), key: const Key('start-value')),
                            trailing: const CupertinoListTileChevron(),
                            onTap: () async {
                              final d = await _pick(
                                context,
                                CupertinoDatePickerMode.date,
                                dateOf(s.schedule.dates.first),
                                'Start Date',
                              );
                              if (d != null) s.setStart(dayNumber(d));
                            },
                          ),
                          CupertinoListTile(
                            title: const Text('Finish'),
                            additionalInfo: value(fmtDate(dateOf(s.schedule.endDay)), key: const Key('end-value')),
                          ),
                          CupertinoListTile(
                            title: const Text('Days Read'),
                            additionalInfo: value('${s.done} of ${s.schedule.length}', key: const Key('days-read')),
                          ),
                          if (s.behind >= 2 && !s.finished) ...[
                            CupertinoListTile(
                              key: const Key('plan-spread'),
                              title: const Text('Spread the Rest'),
                              subtitle: s.previewSpread() == null
                                  ? null
                                  : _Sub('Still finish ${fmtDate(dateOf(s.previewSpread()!.endDay))}'),
                              onTap: s.previewSpread() == null ? null : s.spread,
                            ),
                            CupertinoListTile(
                              key: const Key('plan-shift'),
                              title: const Text('Continue From Today'),
                              subtitle: _Sub('Finish ${fmtDate(dateOf(s.previewShift().endDay))}'),
                              onTap: s.shift,
                            ),
                          ],
                        ],
                      ),
                      CupertinoListSection.insetGrouped(
                        header: const SectionHeader('Reminder'),
                        footer: SectionFooter(
                          Notifier.i.supported
                              ? 'Once a day, with that day’s reading. Skipped if you’ve already read.'
                              : 'Reminders work in the iPhone app, not in this web preview.',
                        ),
                        children: [
                          CupertinoListTile(
                            title: const Text('Daily Reminder'),
                            trailing: CupertinoSwitch(
                              key: const Key('reminder'),
                              value: s.reminderOn,
                              activeTrackColor: dyn(context, accent),
                              onChanged: (on) async {
                                if (on && !await Notifier.i.requestPermission()) return;
                                s.setReminder(on: on);
                              },
                            ),
                          ),
                          if (s.reminderOn)
                            CupertinoListTile(
                              key: const Key('reminder-time'),
                              title: const Text('Time'),
                              additionalInfo: value(fmtMinute(s.reminderMinute)),
                              trailing: const CupertinoListTileChevron(),
                              onTap: () async {
                                final now = DateTime.now();
                                final t = await _pick(
                                  context,
                                  CupertinoDatePickerMode.time,
                                  DateTime(now.year, now.month, now.day, s.reminderMinute ~/ 60, s.reminderMinute % 60),
                                  'Reminder Time',
                                );
                                if (t != null) s.setReminder(minute: t.hour * 60 + t.minute);
                              },
                            ),
                        ],
                      ),
                      CupertinoListSection.insetGrouped(
                        header: const SectionHeader('Your Data'),
                        footer: const SectionFooter('No account. Your progress stays on this iPhone.'),
                        children: [
                          CupertinoListTile(
                            key: const Key('export'),
                            title: const Text('Export Progress (CSV)'),
                            trailing: const CupertinoListTileChevron(),
                            onTap: () => Outside.shareCsv('bible-reading-${isoDate(DateTime.now())}.csv', s.exportCsv()),
                          ),
                          CupertinoListTile(
                            key: const Key('privacy'),
                            title: const Text('Privacy Policy'),
                            trailing: const CupertinoListTileChevron(),
                            onTap: () => Outside.open(kPrivacyUrl),
                          ),
                        ],
                      ),
                      const SizedBox(height: 24),
                    ],
                  ),
                ],
              ),
            ),
            SafeArea(top: false, child: Ads.i.banner()),
          ],
        ),
      );
    },
  );
}

/// 목록 줄 아래 설명 — 13pt 회색 (CupertinoListTile 기본 12pt 대신 화면의 글자 크기 3단계에 맞춘다).
class _Sub extends StatelessWidget {
  const _Sub(this.text);
  final String text;

  @override
  Widget build(BuildContext context) =>
      Text(text, style: TextStyle(fontSize: kSmall, color: dyn(context, CupertinoColors.secondaryLabel)));
}
