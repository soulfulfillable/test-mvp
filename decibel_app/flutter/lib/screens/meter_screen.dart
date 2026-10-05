import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

import '../core/ads.dart';
import '../core/controller.dart';
import '../core/levels.dart';
import '../core/meter.dart';
import '../core/share.dart';
import '../core/store.dart';
import '../core/theme.dart';
import 'guide_screen.dart';
import 'history_screen.dart';
import 'report_screen.dart';
import 'settings_screen.dart';
import 'widgets.dart';

/// 첫 화면이자 주인공: 큰 숫자 + 바늘 게이지. 안내 화면 없이 바로 Start (마이크 이유는 버튼 아래 한 줄).
class MeterScreen extends StatefulWidget {
  const MeterScreen({super.key});

  @override
  State<MeterScreen> createState() => _MeterScreenState();
}

class _MeterScreenState extends State<MeterScreen> with WidgetsBindingObserver {
  final ctl = MeterController();
  Band? _lastBand;
  DateTime _lastHaptic = DateTime(0);

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    ctl.addListener(_onTick);
  }

  /// 시그니처 손맛: 측정 중 구간(Quiet→Loud…)이 바뀔 때만 가볍게 톡.
  void _onTick() {
    final e = ctl.engine;
    if (!ctl.running || e == null || !e.hasData) {
      _lastBand = null;
      return;
    }
    final b = bandOf(e.current);
    final now = DateTime.now();
    if (_lastBand != null &&
        b != _lastBand &&
        now.difference(_lastHaptic) > const Duration(milliseconds: 700)) {
      HapticFeedback.selectionClick();
      _lastHaptic = now;
    }
    _lastBand = b;
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState s) {
    // 화면을 떠나면 마이크도 멈춘다 (백그라운드 녹음 없음). 돌아오면 사용자가 이어서 누른다.
    if (s == AppLifecycleState.hidden || s == AppLifecycleState.paused) {
      ctl.pause(reason: PauseReason.leftApp);
    } else if (s == AppLifecycleState.resumed) {
      ctl.recheckPermission();
    }
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    ctl.removeListener(_onTick);
    ctl.dispose();
    super.dispose();
  }

  Future<void> _open(Widget page) =>
      Navigator.of(context)
          .push(CupertinoPageRoute<void>(builder: (_) => page));

  Future<void> _start() async {
    if (!AppStore.i.seenIntro) await AppStore.i.setSeenIntro();
    await ctl.start();
  }

  Future<void> _report() async {
    final r = ctl.snapshot();
    if (r == null) return;
    await AppStore.i.saveRecord(r);
    if (!mounted) return;
    await _open(ReportScreen(recordId: r.id));
  }

  void _openGuide() => _open(
    GuideScreen(
      current: ctl.hasData ? ctl.engine!.current : null,
      unit: (ctl.engine?.weighting ?? AppStore.i.weighting).unit,
    ),
  );

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      child: Column(
        children: [
          Expanded(
            child: SafeArea(
              bottom: false,
              child: AnimatedBuilder(
                animation: Listenable.merge([ctl, AppStore.i]),
                builder: (context, _) => _body(context),
              ),
            ),
          ),
          SafeArea(top: false, child: Ads.i.banner()),
        ],
      ),
    );
  }

  Widget _body(BuildContext context) {
    final e = ctl.engine;
    final has = ctl.hasData;
    final unit = (e?.weighting ?? AppStore.i.weighting).unit;
    final cur = has ? e!.current : null;
    final short = MediaQuery.sizeOf(context).height < 700;
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: LayoutBuilder(
        builder: (context, box) => Column(
          children: [
            _topBar(),
            // 게이지(주인공)·그래프는 남는 높이를 나눠 갖되 상한이 있다 — 큰 화면에서 빈 띠가 안 생기고,
            // 작은 화면·큰 글씨에서는 함께 줄어든다.
            Expanded(
              child: Column(
                // 남는 높이는 위아래로 나눠 가운데 정렬 (한쪽에 빈 띠가 몰리지 않게)
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Flexible(
                    flex: 10,
                    child: ConstrainedBox(
                      constraints: BoxConstraints(
                        maxHeight: box.maxWidth * 0.8,
                      ),
                      child: Gauge(
                        value: cur,
                        max: has ? e!.max : null,
                        unit: unit,
                        active: ctl.running,
                      ),
                    ),
                  ),
                  _levelLine(cur),
                  SizedBox(height: short ? 6 : 10),
                  _notice(),
                  StatRow(
                    items: [
                      (
                        'Average',
                        has ? fmtDb(e!.average) : '—',
                        unit,
                        const Key('avg'),
                      ),
                      (
                        'Max',
                        has ? fmtDb(e!.max) : '—',
                        unit,
                        const Key('max'),
                      ),
                      (
                        'Time',
                        e == null ? '0:00' : fmtDuration(e.measured),
                        '',
                        const Key('time'),
                      ),
                    ],
                  ),
                  SizedBox(height: short ? 10 : 18),
                  Flexible(
                    flex: 4,
                    child: ConstrainedBox(
                      constraints: const BoxConstraints(maxHeight: 190),
                      child: LiveChart(points: e?.recent ?? const []),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: short ? 8 : 14),
            _controls(),
            if (!AppStore.i.seenIntro)
              Padding(
                padding: const EdgeInsets.only(top: 6),
                child: Text(
                  'Uses the microphone to measure. Nothing is recorded.',
                  key: const Key('mic-hint'),
                  textAlign: TextAlign.center,
                  style: textOf(context).copyWith(
                    fontSize: kSmall,
                    color: dyn(context, CupertinoColors.secondaryLabel),
                  ),
                ),
              ),
            SizedBox(height: short ? 4 : 10),
          ],
        ),
      ),
    );
  }

  Widget _topBar() => SizedBox(
    height: 44,
    child: Row(
      children: [
        CupertinoButton(
          key: const Key('history'),
          padding: EdgeInsets.zero,
          minimumSize: const Size(44, 44),
          onPressed: () => _open(const HistoryScreen()),
          child: const Icon(CupertinoIcons.clock, semanticLabel: 'History'),
        ),
        const Spacer(),
        CupertinoButton(
          key: const Key('settings'),
          padding: EdgeInsets.zero,
          minimumSize: const Size(44, 44),
          onPressed: () => _open(const SettingsScreen()),
          child: const Icon(
            CupertinoIcons.slider_horizontal_3,
            semanticLabel: 'Settings',
          ),
        ),
      ],
    ),
  );

  /// "● Loud · Like a vacuum cleaner ›" — 숫자를 몰라도 읽히는 한 줄. 누르면 비유표.
  Widget _levelLine(double? cur) {
    final band = cur == null ? null : bandOf(cur);
    final text = switch (ctl.state) {
      _ when cur != null => likeText(cur),
      MeterState.starting => 'Listening…',
      MeterState.denied => 'Microphone is off',
      _ => 'Tap Start to measure',
    };
    final base = textOf(context).copyWith(fontSize: kBody);
    return Semantics(
      button: true,
      label: 'Sound level guide. ${band?.name ?? ''} $text',
      onTap: _openGuide,
      excludeSemantics: true,
      child: GestureDetector(
        key: const Key('guide'),
        behavior: HitTestBehavior.opaque,
        onTap: _openGuide,
        child: ConstrainedBox(
          constraints: const BoxConstraints(minHeight: 44),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              if (band != null) ...[
                Container(
                  width: 10,
                  height: 10,
                  decoration: BoxDecoration(
                    color: dyn(context, band.color),
                    shape: BoxShape.circle,
                  ),
                ),
                const SizedBox(width: 8),
                Text(
                  band.name,
                  key: const Key('band'),
                  style: base.copyWith(fontWeight: FontWeight.w600),
                ),
                Text(
                  '  ·  ',
                  style: base.copyWith(
                    color: dyn(context, CupertinoColors.tertiaryLabel),
                  ),
                ),
              ],
              Flexible(
                child: Text(
                  text,
                  key: const Key('like'),
                  overflow: TextOverflow.ellipsis,
                  style: base.copyWith(
                    color: dyn(context, CupertinoColors.secondaryLabel),
                  ),
                ),
              ),
              const SizedBox(width: 2),
              Icon(
                CupertinoIcons.chevron_right,
                size: 16,
                color: dyn(context, CupertinoColors.tertiaryLabel),
              ),
            ],
          ),
        ),
      ),
    );
  }

  /// 상황 안내 한 줄 (권한 꺼짐·멈춘 이유·청력 주의·오류). 카드 없이 글자로만.
  Widget _notice() {
    final e = ctl.engine;
    Widget line(
      IconData icon,
      String text, {
      Color color = CupertinoColors.secondaryLabel,
      Widget? action,
    }) {
      final c = dyn(context, color);
      return Padding(
        padding: const EdgeInsets.only(bottom: 14),
        child: Row(
          children: [
            Icon(icon, size: 18, color: c),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                text,
                key: const Key('notice'),
                style: textOf(context)
                    .copyWith(fontSize: kSmall, color: c, height: 1.3),
              ),
            ),
            ?action,
          ],
        ),
      );
    }

    if (ctl.state == MeterState.denied) {
      // 웹 미리보기는 브라우저가 권한을 쥐고 있다 → 설정 앱 대신 "다시 시도".
      return line(
        CupertinoIcons.mic_off,
        kIsWeb
            ? 'Microphone is blocked. Allow it for this site in your browser, then try again.'
            : 'Microphone access is off. Turn it on in Settings to measure.',
        color: CupertinoColors.systemRed,
        action: CupertinoButton(
          key: const Key('open-settings'),
          padding: const EdgeInsets.only(left: 8),
          minimumSize: const Size(44, 44),
          onPressed: kIsWeb ? ctl.start : () => Outside.i.openAppSettings(),
          child: Text(
            kIsWeb ? 'Try Again' : 'Open Settings',
            style: const TextStyle(fontSize: kSmall),
          ),
        ),
      );
    }
    if (ctl.error != null) {
      return line(
        CupertinoIcons.exclamationmark_circle,
        ctl.error!,
        color: CupertinoColors.systemRed,
      );
    }
    if (ctl.state == MeterState.paused) {
      final why = switch (ctl.pauseReason) {
        PauseReason.leftApp =>
          'Paused — measuring stops when you leave the app.',
        PauseReason.interrupted =>
          'Paused — the microphone was interrupted (a call or another app).',
        _ => 'Paused. This measurement is saved in History.',
      };
      return line(CupertinoIcons.pause_circle, why);
    }
    if (e != null && ctl.hasData && e.weighting == Weighting.a) {
      final limit = nioshDailyLimit(e.average);
      if (limit != null) {
        return line(
          CupertinoIcons.ear,
          'Average over 85 dBA. NIOSH suggests no more than ${fmtLimit(limit)} a day at this level.',
          color: CupertinoColors.systemOrange,
        );
      }
    }
    return const SizedBox.shrink();
  }

  Widget _controls() {
    final st = ctl.state;
    final running = st == MeterState.running;
    final (IconData icon, String label) = switch (st) {
      MeterState.running => (CupertinoIcons.pause_fill, 'Pause'),
      MeterState.paused => (CupertinoIcons.play_fill, 'Resume'),
      MeterState.starting => (CupertinoIcons.ellipsis, 'Starting'),
      _ => (CupertinoIcons.mic_fill, 'Start'),
    };
    final onMain = st == MeterState.starting
        ? null
        : (running ? ctl.pause : _start);
    // 다크 모드의 밝은 청록 위에는 흰 글씨가 안 읽힌다 → 검정
    final onAccent = CupertinoTheme.brightnessOf(context) == Brightness.dark
        ? CupertinoColors.black
        : CupertinoColors.white;
    return Row(
      children: [
        TextAction(
          key: const Key('reset'),
          label: 'Reset',
          icon: CupertinoIcons.arrow_counterclockwise,
          onTap: ctl.engine == null ? null : ctl.reset,
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Semantics(
            button: true,
            label: label,
            onTap: onMain,
            excludeSemantics: true,
            child: CupertinoButton(
              key: const Key('main'),
              color: running
                  ? dyn(context, CupertinoColors.tertiarySystemFill)
                  : dyn(context, accent),
              borderRadius: BorderRadius.circular(14),
              minimumSize: const Size(0, 50),
              padding: EdgeInsets.zero,
              onPressed: onMain,
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(
                    icon,
                    size: 20,
                    color: running
                        ? dyn(context, CupertinoColors.label)
                        : onAccent,
                  ),
                  const SizedBox(width: 8),
                  Text(
                    label,
                    style: TextStyle(
                      fontSize: kBody,
                      fontWeight: FontWeight.w600,
                      color: running
                          ? dyn(context, CupertinoColors.label)
                          : onAccent,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
        const SizedBox(width: 12),
        TextAction(
          key: const Key('report'),
          label: 'Report',
          icon: CupertinoIcons.doc_text,
          onTap: ctl.canReport ? _report : null,
        ),
      ],
    );
  }
}
