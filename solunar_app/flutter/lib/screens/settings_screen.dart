import 'package:flutter/cupertino.dart';
import 'package:url_launcher/url_launcher.dart';

import '../core/store.dart';
import '../core/theme.dart';
import 'widgets.dart';

/// Opens links. Tests swap it out.
Future<bool> Function(Uri) openLink = (u) => launchUrl(u, mode: LaunchMode.externalApplication);

final privacyUrl = Uri.parse('https://soulfulfillable.github.io/test-mvp/solunar-privacy.html');

/// Shooting-light offsets and what the app does — a Settings-style grouped list.
class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) => ListenableBuilder(
    listenable: AppStore.i,
    builder: (context, _) {
      final s = AppStore.i;
      final a = dyn(context, accent);
      Widget preset(String k, String label, int before, int after) {
        final on = s.beforeSunrise == before && s.afterSunset == after;
        return ListRow(
          button: true,
          child: Semantics(
            selected: on,
            child: CupertinoListTile(
              key: Key(k),
              title: Text(label),
              trailing: on ? Icon(CupertinoIcons.checkmark, color: a) : null,
              onTap: () => s.setLegalOffsets(before: before, after: after),
            ),
          ),
        );
      }

      return CupertinoPageScaffold(
        child: CustomScrollView(
          key: const Key('settings-list'),
          slivers: [
            const CupertinoSliverNavigationBar(largeTitle: Text('Settings'), leading: BackLink(), border: null),
            SliverList.list(
              children: [
                CupertinoListSection.insetGrouped(
                  header: const SectionHeader('Legal shooting light'),
                  children: [
                    _Stepper(
                      label: 'Before sunrise',
                      value: s.beforeSunrise,
                      keyPrefix: 'before',
                      onChanged: (v) => s.setLegalOffsets(before: v),
                    ),
                    _Stepper(
                      label: 'After sunset',
                      value: s.afterSunset,
                      keyPrefix: 'after',
                      onChanged: (v) => s.setLegalOffsets(after: v),
                    ),
                  ],
                ),
                CupertinoListSection.insetGrouped(
                  header: const SectionHeader('Quick set'),
                  footer: const SectionFooter(
                    'Shooting hours are set by each state and differ by species and season. Many states allow big game '
                    'from 30 minutes before sunrise to 30 minutes after sunset; federal rules for ducks and geese usually '
                    'end at sunset. Always check your state’s current regulations — this app only does the math.',
                    textKey: Key('legal-note'),
                  ),
                  children: [
                    preset('preset-30-30', '30 min before · 30 min after', 30, 30),
                    preset('preset-30-0', '30 min before · until sunset', 30, 0),
                    preset('preset-0-0', 'Sunrise to sunset', 0, 0),
                  ],
                ),
                CupertinoListSection.insetGrouped(
                  header: const SectionHeader('About'),
                  footer: const SectionFooter(
                    'All times are worked out on your phone from the positions of the sun and moon — no internet needed. '
                    'Moon: Meeus, Astronomical Algorithms. Sun: NOAA solar equations. Moonrise and moonset follow the US '
                    'Naval Observatory definition (upper edge of the moon on the horizon). Town names: GeoNames '
                    '(geonames.org), CC BY 4.0. Your location stays on this device.',
                  ),
                  children: [
                    ListRow(
                      button: true,
                      child: CupertinoListTile(
                        key: const Key('privacy-link'),
                        title: const Text('Privacy Policy'),
                        trailing: Icon(CupertinoIcons.arrow_up_right_square, color: a),
                        onTap: () => openLink(privacyUrl),
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
    },
  );
}

class _Stepper extends StatelessWidget {
  const _Stepper({required this.label, required this.value, required this.keyPrefix, required this.onChanged});
  final String label;
  final int value;
  final String keyPrefix;
  final ValueChanged<int> onChanged;

  @override
  Widget build(BuildContext context) {
    Widget step(String k, IconData icon, String tip, int to, bool enabled) => Semantics(
      button: true,
      enabled: enabled,
      label: tip,
      onTap: enabled ? () => onChanged(to) : null,
      excludeSemantics: true,
      child: CupertinoButton(
        key: Key(k),
        padding: EdgeInsets.zero,
        minimumSize: const Size(44, 44),
        onPressed: enabled ? () => onChanged(to) : null,
        child: Icon(icon, size: 26),
      ),
    );
    return ListRow(
      hasButtons: true,
      child: CupertinoListTile(
        title: Text(label),
        trailing: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            step('$keyPrefix-minus', CupertinoIcons.minus_circle, '$label: 5 minutes less', value - 5, value > 0),
            SizedBox(
              width: 64,
              child: Text(
                '$value min',
                key: Key('$keyPrefix-value'),
                textAlign: TextAlign.center,
                style: const TextStyle(fontFeatures: tabular),
              ),
            ),
            step('$keyPrefix-plus', CupertinoIcons.plus_circle, '$label: 5 minutes more', value + 5, value < 90),
          ],
        ),
      ),
    );
  }
}
