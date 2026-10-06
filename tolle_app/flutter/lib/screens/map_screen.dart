import 'package:flutter/cupertino.dart';

import '../core/ads.dart';
import '../core/bible.dart';
import '../core/store.dart';
import '../core/theme.dart';
import 'book_screen.dart';
import 'widgets.dart';

/// 지도: 계획에 든 책마다 장 칸 한 줄. 읽은 장이 채워진다. 연속 기록은 작게(압박 X).
class MapScreen extends StatelessWidget {
  const MapScreen({super.key});

  static void _open(BuildContext context, Book b) =>
      Navigator.of(context)
          .push(CupertinoPageRoute<void>(builder: (_) => BookScreen(book: b)));

  @override
  Widget build(BuildContext context) => ListenableBuilder(
    listenable: AppStore.i,
    builder: (context, _) {
      final s = AppStore.i;
      // 지도는 계획 범위와 상관없이 66권 전부 — 계획에서 읽은 장 + 직접 체크한 장
      final read = s.allRead;
      final planBooks = books;
      final base = textOf(context);
      final secondary = dyn(context, CupertinoColors.secondaryLabel);
      final small = base.copyWith(fontSize: kSmall, color: secondary);
      final pct = (read.length * 100 / totalChapters).floor();
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
                Semantics(
                  button: true,
                  label:
                      '${b.name}, ${[for (var c = 1; c <= b.chapters; c++)
                        if (read.contains(b.chapterId(c))) c].length} of ${b.chapters} chapters read',
                  onTap: () => _open(context, b),
                  excludeSemantics: true,
                  child: GestureDetector(
                    key: Key('book-${b.short}'),
                    behavior: HitTestBehavior.opaque,
                    onTap: () => _open(context, b),
                    child: Container(
                      constraints: const BoxConstraints(minHeight: 40),
                      padding: const EdgeInsets.symmetric(vertical: 6),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(
                            width: 48,
                            child: Text(
                              b.short,
                              style: small.copyWith(height: 1.15),
                              maxLines: 1,
                              softWrap: false,
                            ),
                          ),
                          Expanded(
                            child: Padding(
                              padding: const EdgeInsets.only(top: 3),
                              child: BookCells(
                                chapters: b.chapters,
                                isRead: (c) => read.contains(b.chapterId(c)),
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 6),
                            child: Icon(
                              CupertinoIcons.chevron_right,
                              size: 14,
                              color: dyn(
                                context,
                                CupertinoColors.tertiaryLabel,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
            ],
          ),
        ),
      );

      final ot = [
        for (final b in planBooks)
          if (!b.isNew) b,
      ];
      final nt = [
        for (final b in planBooks)
          if (b.isNew) b,
      ];
      return CupertinoPageScaffold(
        child: Column(
          children: [
            Expanded(
              child: CustomScrollView(
                key: const Key('map-list'),
                slivers: [
                  const CupertinoSliverNavigationBar(
                    largeTitle: Text('Map'),
                    border: null,
                  ),
                  SliverToBoxAdapter(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(20, 4, 20, 0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text.rich(
                            TextSpan(
                              text: fmtInt(read.length),
                              style: base.copyWith(
                                fontWeight: FontWeight.w600,
                                fontFeatures: tabular,
                              ),
                              children: [
                                TextSpan(
                                  text:
                                      ' of ${fmtInt(totalChapters)} chapters read · $pct%',
                                  style: TextStyle(
                                    fontWeight: FontWeight.w400,
                                    color: secondary,
                                  ),
                                ),
                              ],
                            ),
                            key: const Key('map-summary'),
                          ),
                          const SizedBox(height: 2),
                          Text(
                            'Tap a book to check off chapters you’ve read.',
                            style: small,
                            key: const Key('map-hint'),
                          ),
                          if (streak >= 2) ...[
                            const SizedBox(height: 2),
                            Text(
                              '$streak days in a row',
                              style: small,
                              key: const Key('streak'),
                            ),
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
