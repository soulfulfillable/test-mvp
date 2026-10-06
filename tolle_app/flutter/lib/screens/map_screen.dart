import 'package:flutter/cupertino.dart';

import '../core/ads.dart';
import '../core/bible.dart';
import '../core/store.dart';
import '../core/theme.dart';
import 'widgets.dart';

/// 지도: 계획에 든 책마다 장 칸 한 줄. 읽은 장이 채워진다. 연속 기록은 작게(압박 X).
class MapScreen extends StatelessWidget {
  const MapScreen({super.key});

  @override
  Widget build(BuildContext context) => ListenableBuilder(
    listenable: AppStore.i,
    builder: (context, _) {
      final s = AppStore.i;
      final read = s.readIds.toSet();
      final inPlan = s.schedule.seq.toSet();
      final planBooks = [for (final b in books) if (inPlan.contains(b.first)) b];
      final base = textOf(context);
      final secondary = dyn(context, CupertinoColors.secondaryLabel);
      final small = base.copyWith(fontSize: kSmall, color: secondary);
      final pct = (s.chaptersRead * 100 / s.chaptersTotal).floor();
      final streak = s.streak;

      Widget section(String title, List<Book> list) => SliverToBoxAdapter(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 24, 20, 0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SectionHeader(title),
              const SizedBox(height: 10),
              for (final b in list)
                Padding(
                  padding: const EdgeInsets.only(bottom: 7),
                  child: Semantics(
                    label: '${b.name}, ${[for (var c = 1; c <= b.chapters; c++) if (read.contains(b.chapterId(c))) c].length} of ${b.chapters} chapters read',
                    excludeSemantics: true,
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(
                          width: 48,
                          child: Text(b.short, style: small.copyWith(height: 1.15), maxLines: 1, softWrap: false),
                        ),
                        Expanded(
                          child: Padding(
                            padding: const EdgeInsets.only(top: 3),
                            child: BookCells(chapters: b.chapters, isRead: (c) => read.contains(b.chapterId(c))),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
            ],
          ),
        ),
      );

      final ot = [for (final b in planBooks) if (!b.isNew) b];
      final nt = [for (final b in planBooks) if (b.isNew) b];
      return CupertinoPageScaffold(
        child: Column(
          children: [
            Expanded(
              child: CustomScrollView(
                key: const Key('map-list'),
                slivers: [
                  const CupertinoSliverNavigationBar(largeTitle: Text('Map'), border: null),
                  SliverToBoxAdapter(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(20, 4, 20, 0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text.rich(
                            TextSpan(
                              text: fmtInt(s.chaptersRead),
                              style: base.copyWith(fontWeight: FontWeight.w600, fontFeatures: tabular),
                              children: [
                                TextSpan(
                                  text: ' of ${fmtInt(s.chaptersTotal)} chapters · $pct%',
                                  style: TextStyle(fontWeight: FontWeight.w400, color: secondary),
                                ),
                              ],
                            ),
                            key: const Key('map-summary'),
                          ),
                          if (streak >= 2) ...[
                            const SizedBox(height: 2),
                            Text('$streak days in a row', style: small, key: const Key('streak')),
                          ],
                        ],
                      ),
                    ),
                  ),
                  if (ot.isNotEmpty) section('Old Testament', ot),
                  if (nt.isNotEmpty) section('New Testament', nt),
                  const SliverToBoxAdapter(child: SizedBox(height: 24)),
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
