import 'package:flutter/cupertino.dart';

import '../core/format.dart';
import '../core/solunar.dart';
import '../core/theme.dart';
import 'widgets.dart';

/// The three parts of a day's score, with the real numbers behind them.
class ScoreScreen extends StatelessWidget {
  const ScoreScreen({super.key, required this.day});
  final SolunarDay day;

  @override
  Widget build(BuildContext context) {
    final s = day.score;
    final ageDays = day.phase.age / 360 * 29.53;
    final toNewFull = [ageDays, (ageDays - 14.77).abs(), 29.53 - ageDays].reduce((a, b) => a < b ? a : b);
    final miles = thousands((day.distanceKm / 1.609344).round());
    Widget part(String k, String title, int pts, int max) => ListRow(
      child: CupertinoListTile(
        title: Text(title),
        additionalInfo: Text(
          '$pts / $max',
          key: Key(k),
          style: const TextStyle(fontFeatures: tabular),
        ),
      ),
    );
    return CupertinoPageScaffold(
      child: CustomScrollView(
        key: const Key('score-list'),
        slivers: [
          const CupertinoSliverNavigationBar(largeTitle: Text('How It’s Scored'), leading: BackLink(), border: null),
          SliverList.list(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 4, 16, 0),
                child: Text(
                  '${dayLabel(day.wallDay)} · ${s.total} / 100 · ${s.rating.label}',
                  style: TextStyle(fontSize: kSmall, color: dyn(context, CupertinoColors.secondaryLabel)),
                ),
              ),
              CupertinoListSection.insetGrouped(
                footer: SectionFooter(
                  '${day.phase.phase.label}, ${toNewFull.toStringAsFixed(toNewFull < 1 ? 1 : 0)} days from a new or '
                  'full moon. New and full moon score highest, the quarter moons lowest.',
                ),
                children: [part('score-phase', 'Moon Phase', s.phasePoints, Score.phaseMax)],
              ),
              CupertinoListSection.insetGrouped(
                footer: const SectionFooter(
                  'How closely a Major or Minor period lines up with sunrise and sunset — dawn and dusk are prime times.',
                ),
                children: [part('score-timing', 'Sunrise & Sunset', s.timingPoints, Score.timingMax)],
              ),
              CupertinoListSection.insetGrouped(
                footer: SectionFooter('$miles miles away. A closer moon (perigee) pulls harder and scores higher.'),
                children: [part('score-distance', 'Moon Distance', s.distancePoints, Score.distanceMax)],
              ),
              CupertinoListSection.insetGrouped(
                header: const SectionHeader('Labels'),
                footer: const SectionFooter(
                  'Major periods are when the moon is overhead or underfoot (±1 hour); Minor periods are moonrise and '
                  'moonset (±30 minutes). This is the classic solunar theory of John Alden Knight (1926), worked out '
                  'from the sun and moon for your spot. It is a guide, not a guarantee — weather, water temperature and '
                  'air pressure matter too.',
                ),
                children: const [
                  ListRow(
                    child: CupertinoListTile(title: Text('Best'), additionalInfo: Text('70 and up')),
                  ),
                  ListRow(
                    child: CupertinoListTile(title: Text('Good'), additionalInfo: Text('50–69')),
                  ),
                  ListRow(
                    child: CupertinoListTile(title: Text('Fair'), additionalInfo: Text('30–49')),
                  ),
                  ListRow(
                    child: CupertinoListTile(title: Text('Slow'), additionalInfo: Text('under 30')),
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
