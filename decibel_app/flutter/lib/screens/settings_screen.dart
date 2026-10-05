import 'package:flutter/cupertino.dart';

import '../core/meter.dart';
import '../core/share.dart';
import '../core/store.dart';
import '../core/theme.dart';
import 'widgets.dart';

/// 설정 앱과 같은 묶음 목록.
class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      backgroundColor: CupertinoColors.systemGroupedBackground,
      child: AnimatedBuilder(
        animation: AppStore.i,
        builder: (context, _) {
          final s = AppStore.i;
          final trim = s.trim;
          final trimText =
              '${trim > 0
                  ? '+'
                  : trim < 0
                  ? '−'
                  : ''}${trim.abs().toStringAsFixed(1)} dB';
          return CustomScrollView(
            key: const Key('settings-list'),
            slivers: [
              const CupertinoSliverNavigationBar(
                largeTitle: Text('Settings'),
                leading: BackLink(label: 'Meter'),
              ),
              SliverList.list(
                children: [
                  CupertinoListSection.insetGrouped(
                    header: const SectionHeader('CALIBRATION'),
                    footer: const SectionFooter(
                      'Phone microphones vary. If you have a trusted sound level meter, '
                      'put both side by side and adjust until they match.',
                    ),
                    children: [
                      CupertinoListTile(
                        title: const Text('Adjust Reading'),
                        trailing: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            _step(
                              CupertinoIcons.minus_circle,
                              const Key('trim-minus'),
                              'Lower by 0.5 dB',
                              () => s.setTrim(trim - 0.5),
                            ),
                            SizedBox(
                              width: 72,
                              child: Text(
                                trimText,
                                key: const Key('trim-value'),
                                textAlign: TextAlign.center,
                                style: const TextStyle(fontFeatures: tabular),
                              ),
                            ),
                            _step(
                              CupertinoIcons.plus_circle,
                              const Key('trim-plus'),
                              'Raise by 0.5 dB',
                              () => s.setTrim(trim + 0.5),
                            ),
                          ],
                        ),
                      ),
                      if (trim != 0)
                        CupertinoListTile(
                          key: const Key('trim-reset'),
                          title: Text(
                            'Reset to Default',
                            style: TextStyle(color: dyn(context, accent)),
                          ),
                          onTap: () => s.setTrim(0),
                        ),
                    ],
                  ),
                  CupertinoListSection.insetGrouped(
                    header: const SectionHeader('FREQUENCY WEIGHTING'),
                    footer: SectionFooter(
                      '${switch (s.weighting) {
                        Weighting.a => 'dBA matches how people hear. Use it for noise complaints and hearing safety.',
                        Weighting.c => 'dBC keeps more bass — useful for music, engines and thumping.',
                        Weighting.z => 'dBZ is flat, with no weighting. Readings run higher than dBA.',
                      }} Changing this starts a new measurement; the current one stays in History.',
                      key: const Key('weighting-help'),
                    ),
                    children: [
                      Padding(
                        padding: const EdgeInsets.all(12),
                        child: SizedBox(
                          width: double.infinity,
                          child: CupertinoSlidingSegmentedControl<Weighting>(
                            key: const Key('weighting'),
                            groupValue: s.weighting,
                            children: const {
                              Weighting.a: Text('dBA'),
                              Weighting.c: Text('dBC'),
                              Weighting.z: Text('dBZ'),
                            },
                            onValueChanged: (w) {
                              if (w != null) s.setWeighting(w);
                            },
                          ),
                        ),
                      ),
                    ],
                  ),
                  CupertinoListSection.insetGrouped(
                    header: const SectionHeader('DISPLAY'),
                    footer: const SectionFooter(
                      'Measuring pauses if the screen locks or you leave the app.',
                    ),
                    children: [
                      CupertinoListTile(
                        title: const Text('Keep Screen On'),
                        trailing: CupertinoSwitch(
                          key: const Key('keep-awake'),
                          value: s.keepAwake,
                          activeTrackColor: dyn(context, accent),
                          onChanged: s.setKeepAwake,
                        ),
                      ),
                    ],
                  ),
                  CupertinoListSection.insetGrouped(
                    header: const SectionHeader('ABOUT'),
                    footer: const SectionFooter(
                      'Not a certified sound level meter. Phone microphones are good for everyday checks, '
                      'not legal or medical measurements; readings are estimates (A/C/Z weighting, Fast).\n\n'
                      'The microphone is used only to measure loudness. Audio is never recorded, saved or sent '
                      'anywhere — only the numbers stay on your iPhone.\n\n'
                      '$kAppName 1.0 · © 2026 Soulfulfill',
                    ),
                    children: [
                      CupertinoListTile(
                        key: const Key('privacy'),
                        title: const Text('Privacy Policy'),
                        trailing: const CupertinoListTileChevron(),
                        onTap: () => Outside.i.openUrl(kPrivacyUrl),
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                ],
              ),
            ],
          );
        },
      ),
    );
  }

  Widget _step(IconData icon, Key key, String label, VoidCallback onTap) =>
      CupertinoButton(
        key: key,
        padding: EdgeInsets.zero,
        minimumSize: const Size(44, 44),
        onPressed: onTap,
        child: Icon(icon, size: 26, semanticLabel: label),
      );
}
