import 'package:flutter/cupertino.dart';

import '../core/levels.dart';
import '../core/theme.dart';
import 'widgets.dart';

/// "얼마나 시끄러운 거야?" — 숫자를 소리 비유로. 지금 레벨에 해당하는 줄에 Now 표시.
/// 설정 앱처럼 묶음 목록 (카드 더미·채우기용 아이콘 없이).
class GuideScreen extends StatelessWidget {
  const GuideScreen({super.key, this.current, this.unit = 'dBA'});
  final double? current;
  final String unit;

  @override
  Widget build(BuildContext context) {
    final here = current == null ? null : refOf(current!);
    final base = textOf(context);

    // 큰 글씨 설정이면 숫자 칸도 같이 넓힌다
    final scale = MediaQuery.textScalerOf(context).scale(1);
    Widget dbCell(int db, {String suffix = '', double width = 60}) => SizedBox(
      width: width * scale,
      child: LevelNumber(db.toDouble(), suffix: suffix),
    );

    return CupertinoPageScaffold(
      backgroundColor: CupertinoColors.systemGroupedBackground,
      child: CustomScrollView(
        key: const Key('guide-list'),
        slivers: [
          const CupertinoSliverNavigationBar(
            largeTitle: Text('How Loud Is That?'),
            leading: BackLink(label: 'Meter'),
          ),
          SliverList.list(
            children: [
              if (current != null)
                CupertinoListSection.insetGrouped(
                  header: const SectionHeader('RIGHT NOW'),
                  children: [
                    CupertinoListTile(
                      title: Text(
                        '${fmtDb(current!)} $unit — ${likeText(current!).toLowerCase()}',
                        key: const Key('guide-now'),
                      ),
                    ),
                  ],
                ),
              CupertinoListSection.insetGrouped(
                header: const SectionHeader('EVERYDAY SOUNDS'),
                footer: const SectionFooter(
                  'Typical levels from the CDC and NIDCD. Real sounds vary with distance.',
                ),
                children: [
                  for (final r in refs.reversed)
                    CupertinoListTile(
                      leading: dbCell(r.db),
                      leadingSize: 60 * scale,
                      title: Text(r.title),
                      trailing: r == here
                          ? Text(
                              'Now',
                              key: const Key('guide-here'),
                              style: base.copyWith(
                                color: dyn(context, accent),
                                fontWeight: FontWeight.w600,
                              ),
                            )
                          : null,
                    ),
                ],
              ),
              CupertinoListSection.insetGrouped(
                header: const SectionHeader('HEARING SAFETY'),
                footer: const SectionFooter(
                  'NIOSH recommends limiting daily exposure: 85 dBA for 8 hours, '
                  'and every 3 dB louder halves the safe time. Source: CDC/NIOSH. '
                  'General information, not medical advice.',
                ),
                children: [
                  for (final (db, t) in const [
                    (85, '8 hours'),
                    (88, '4 hours'),
                    (91, '2 hours'),
                    (94, '1 hour'),
                    (97, '30 minutes'),
                    (100, '15 minutes'),
                    (106, 'Under 4 minutes'),
                  ])
                    CupertinoListTile(
                      leading: dbCell(db, suffix: ' dBA', width: 92),
                      leadingSize: 92 * scale,
                      title: Text(t),
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
}
