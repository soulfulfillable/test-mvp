import 'package:flutter/cupertino.dart';

import '../core/history.dart';
import '../core/store.dart';
import '../core/theme.dart';
import 'widgets.dart';
import 'report_screen.dart';

/// 지난 측정 목록. 측정은 자동으로 여기 저장된다 — 나중에 리포트로 만들 수 있게.
/// iOS 식: 묶음 목록, 왼쪽으로 밀어서 삭제(확인 창).
class HistoryScreen extends StatelessWidget {
  const HistoryScreen({super.key});

  Future<bool> _confirmDelete(BuildContext context, NoiseRecord r) async {
    final ok = await showCupertinoDialog<bool>(
      context: context,
      builder: (c) => CupertinoAlertDialog(
        title: const Text('Delete Measurement?'),
        content: Text('${fmtDate(r.startedAt)}, ${fmtClock(r.startedAt)}'),
        actions: [
          CupertinoDialogAction(
            key: const Key('delete-cancel'),
            onPressed: () => Navigator.pop(c, false),
            child: const Text('Cancel'),
          ),
          CupertinoDialogAction(
            key: const Key('delete-ok'),
            isDestructiveAction: true,
            onPressed: () => Navigator.pop(c, true),
            child: const Text('Delete'),
          ),
        ],
      ),
    );
    if (ok == true) {
      await AppStore.i.deleteRecord(r.id);
      return true;
    }
    return false;
  }

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      backgroundColor: CupertinoColors.systemGroupedBackground,
      child: AnimatedBuilder(
        animation: AppStore.i,
        builder: (context, _) {
          final rs = AppStore.i.records;
          return CustomScrollView(
            key: const Key('history-list'),
            slivers: [
              const CupertinoSliverNavigationBar(
                largeTitle: Text('History'),
                leading: BackLink(label: 'Meter'),
              ),
              if (rs.isEmpty)
                SliverFillRemaining(
                  hasScrollBody: false,
                  child: Center(
                    child: Padding(
                      padding: const EdgeInsets.all(32),
                      child: Text(
                        'No measurements yet.\nEvery measurement is saved here automatically, so you can make a report later.',
                        key: const Key('history-empty'),
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: dyn(context, CupertinoColors.secondaryLabel),
                          height: 1.4,
                        ),
                      ),
                    ),
                  ),
                )
              else
                SliverList.list(
                  children: [
                    CupertinoListSection.insetGrouped(
                      footer: const SectionFooter('Swipe left to delete.'),
                      children: [for (final r in rs) _row(context, r)],
                    ),
                  ],
                ),
            ],
          );
        },
      ),
    );
  }

  Widget _row(BuildContext context, NoiseRecord r) {
    return Dismissible(
      key: Key('dismiss-${r.id}'),
      direction: DismissDirection.endToStart,
      confirmDismiss: (_) => _confirmDelete(context, r),
      background: Container(
        color: dyn(context, CupertinoColors.systemRed),
        alignment: Alignment.centerRight,
        padding: const EdgeInsets.only(right: 20),
        child: const Text(
          'Delete',
          style: TextStyle(color: CupertinoColors.white),
        ),
      ),
      child: CupertinoListTile(
        key: Key('record-${r.id}'),
        leading: LevelNumber(r.average),
        leadingSize: 52 * MediaQuery.textScalerOf(context).scale(1),
        title: Text('${fmtDateShort(r.startedAt)}, ${fmtClock(r.startedAt)}'),
        subtitle: Text(
          r.note.isEmpty ? recordSummary(r) : '${recordSummary(r)}\n${r.note}',
          maxLines: 2,
          overflow: TextOverflow.ellipsis,
        ),
        trailing: const CupertinoListTileChevron(),
        onTap: () => Navigator.of(context).push(
          CupertinoPageRoute<void>(
            builder: (_) => ReportScreen(recordId: r.id),
          ),
        ),
      ),
    );
  }
}
