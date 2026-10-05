import 'dart:async';
import 'dart:ui' as ui;

import 'package:flutter/cupertino.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';

import '../core/history.dart';
import '../core/levels.dart';
import '../core/meter.dart';
import '../core/share.dart';
import '../core/store.dart';
import '../core/theme.dart';
import 'widgets.dart';

/// 소음 기록 리포트 — 이웃·집주인에게 보낼 수 있게 한 장짜리 이미지로 저장/공유.
/// (1등 앱은 이 기능을 유료로 막았다. 여기서는 무료.)
class ReportScreen extends StatefulWidget {
  const ReportScreen({super.key, required this.recordId});
  final int recordId;

  @override
  State<ReportScreen> createState() => _ReportScreenState();
}

class _ReportScreenState extends State<ReportScreen> {
  final _shot = GlobalKey();
  late final TextEditingController _note;
  bool _busy = false;
  Timer? _noteSave;

  NoiseRecord? get record => AppStore.i.recordById(widget.recordId);

  @override
  void initState() {
    super.initState();
    _note = TextEditingController(text: record?.note ?? '');
  }

  @override
  void dispose() {
    _noteSave?.cancel();
    AppStore.i.setNote(widget.recordId, _note.text.trim());
    _note.dispose();
    super.dispose();
  }

  void _onNote(String _) {
    setState(() {}); // 리포트 미리보기에 바로 반영
    _noteSave?.cancel();
    _noteSave = Timer(
      const Duration(milliseconds: 600),
      () => AppStore.i.setNote(widget.recordId, _note.text.trim()),
    );
  }

  Future<void> _share() async {
    final r = record;
    if (r == null || _busy) return;
    setState(() => _busy = true);
    FocusScope.of(context).unfocus();
    final box = context.findRenderObject() as RenderBox?;
    final origin = box == null
        ? null
        : box.localToGlobal(Offset.zero) & box.size;
    await AppStore.i.setNote(widget.recordId, _note.text.trim());
    var ok = false;
    try {
      final boundary =
          _shot.currentContext!.findRenderObject()! as RenderRepaintBoundary;
      final image = await boundary.toImage(pixelRatio: 3);
      final data = await image.toByteData(format: ui.ImageByteFormat.png);
      image.dispose();
      if (data != null) {
        final t = r.startedAt;
        String two(int v) => v.toString().padLeft(2, '0');
        final name =
            'noise-report-${t.year}-${two(t.month)}-${two(t.day)}-${two(t.hour)}${two(t.minute)}.png';
        ok = await Outside.i.shareImage(
          data.buffer.asUint8List(),
          name,
          'Noise report — ${fmtDate(t)}',
          origin,
        );
      }
    } catch (e) {
      debugPrint('report image failed: $e');
    }
    if (!mounted) return;
    setState(() => _busy = false);
    if (!ok) {
      await showCupertinoDialog<void>(
        context: context,
        builder: (c) => CupertinoAlertDialog(
          title: const Text("Couldn't Share"),
          content: const Text('Please try again.'),
          actions: [
            CupertinoDialogAction(
              key: const Key('share-fail-ok'),
              isDefaultAction: true,
              onPressed: () => Navigator.pop(c),
              child: const Text('OK'),
            ),
          ],
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final r = record;
    final secondary = dyn(context, CupertinoColors.secondaryLabel);
    // 다른 화면(기록·설정·비유표)과 같은 큰 제목 막대
    return CupertinoPageScaffold(
      backgroundColor: CupertinoColors.systemGroupedBackground,
      child: CustomScrollView(
        key: const Key('report-list'),
        keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
        slivers: [
          const CupertinoSliverNavigationBar(
            largeTitle: Text('Report'),
            leading: BackLink(label: 'Back'),
          ),
          if (r == null)
            SliverFillRemaining(
              hasScrollBody: false,
              child: Center(
                child: Text(
                  'This measurement was deleted.',
                  style: TextStyle(color: secondary),
                ),
              ),
            )
          else
            SliverSafeArea(
              top: false,
              sliver: SliverPadding(
                padding: const EdgeInsets.fromLTRB(16, 4, 16, 24),
                sliver: SliverToBoxAdapter(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      // 메모 칸은 위에 — 키보드가 떠도 가려지지 않고, 적는 대로 아래 리포트에 들어간다.
                      CupertinoTextField(
                        key: const Key('note'),
                        controller: _note,
                        onChanged: _onNote,
                        placeholder:
                            'Add a note — e.g. Upstairs neighbor, Apt 4B',
                        clearButtonMode: OverlayVisibilityMode.editing,
                        textInputAction: TextInputAction.done,
                        inputFormatters: [
                          LengthLimitingTextInputFormatter(120),
                        ],
                        padding: const EdgeInsets.symmetric(
                          horizontal: 12,
                          vertical: 12,
                        ),
                        decoration: BoxDecoration(
                          color: dyn(
                            context,
                            CupertinoColors.secondarySystemGroupedBackground,
                          ),
                          borderRadius: BorderRadius.circular(12),
                        ),
                      ),
                      const SizedBox(height: 16),
                      RepaintBoundary(
                        key: _shot,
                        child: ReportCard(record: r, note: _note.text.trim()),
                      ),
                      const SizedBox(height: 20),
                      PrimaryButton(
                        key: const Key('share'),
                        label: _busy ? 'Preparing…' : 'Share Report',
                        icon: CupertinoIcons.square_arrow_up,
                        onPressed: _busy ? null : _share,
                      ),
                      const SizedBox(height: 8),
                      Text(
                        'Choose “Save Image” in the share sheet to keep it in Photos.',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: kSmall, color: secondary),
                      ),
                    ],
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

/// 리포트 한 장 (흰 종이). 화면과 저장 이미지가 똑같다.
class ReportCard extends StatelessWidget {
  const ReportCard({super.key, required this.record, required this.note});
  final NoiseRecord record;
  final String note;

  @override
  Widget build(BuildContext context) {
    final r = record;
    final unit = r.weighting.unit;
    final loud = r.loudestSecond;
    final stats = downsample(r.leq, r.peaks, 90);
    final per = r.secondsPerBand();
    final total = r.leq.isEmpty ? 1 : r.leq.length;
    final trim = r.offset - AppStore.defaultOffset;
    final trimText =
        '${trim >= 0 ? '+' : '−'}${trim.abs().toStringAsFixed(1)} dB';
    final mid = r.timeOfSecond(r.leq.length ~/ 2);
    final ink = textOf(context).copyWith(color: Paper.ink);

    Widget big(String label, double v) => Expanded(
      child: Column(
        children: [
          Text(
            label,
            style: const TextStyle(
              color: Paper.sub,
              fontSize: 11,
              fontWeight: FontWeight.w600,
              letterSpacing: 0.5,
            ),
          ),
          const SizedBox(height: 2),
          Text.rich(
            TextSpan(
              text: fmtDb(v),
              style: const TextStyle(
                color: Paper.ink,
                fontSize: 28,
                fontWeight: FontWeight.w600,
                fontFeatures: tabular,
              ),
              children: [
                TextSpan(
                  text: ' $unit',
                  style: const TextStyle(fontSize: 11, color: Paper.sub),
                ),
              ],
            ),
          ),
        ],
      ),
    );

    return Container(
      key: const Key('report-card'),
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: Paper.bg,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Paper.line, width: 0.5),
      ),
      child: DefaultTextStyle(
        style: ink,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                const Icon(
                  CupertinoIcons.waveform,
                  color: Paper.tint,
                  size: 22,
                ),
                const SizedBox(width: 6),
                const Text(
                  'Noise Report',
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w600,
                    color: Paper.ink,
                  ),
                ),
                const Spacer(),
                Text(
                  unit,
                  style: const TextStyle(
                    fontSize: 11,
                    color: Paper.sub,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            Text(
              fmtDate(r.startedAt),
              style: const TextStyle(
                fontSize: 15,
                fontWeight: FontWeight.w600,
                color: Paper.ink,
              ),
            ),
            const SizedBox(height: 2),
            Text(
              '${fmtClock(r.startedAt)} – ${fmtClock(r.endedAt)}  ·  ${fmtDurationWords(r.duration)} measured',
              key: const Key('report-time'),
              style: const TextStyle(fontSize: 11, color: Paper.sub),
            ),
            if (note.isNotEmpty) ...[
              const SizedBox(height: 10),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(
                  horizontal: 10,
                  vertical: 8,
                ),
                decoration: BoxDecoration(
                  color: const Color(0xFFF3F5F8),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(
                  note,
                  key: const Key('report-note'),
                  style: const TextStyle(
                    fontSize: 11,
                    color: Paper.ink,
                    height: 1.35,
                  ),
                ),
              ),
            ],
            const SizedBox(height: 14),
            Row(
              children: [
                big('AVERAGE', r.average),
                big('MAX', r.max),
                big('MIN', r.min),
              ],
            ),
            if (loud != null) ...[
              const SizedBox(height: 10),
              Text.rich(
                TextSpan(
                  text: 'Loudest moment: ',
                  style: const TextStyle(color: Paper.sub, fontSize: 11),
                  children: [
                    TextSpan(
                      text:
                          '${fmtClock(r.timeOfSecond(loud), seconds: true)} (${fmtDb(r.peaks[loud])} $unit)',
                      style: const TextStyle(
                        color: Paper.ink,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                ),
                key: const Key('report-loudest'),
              ),
            ],
            const SizedBox(height: 12),
            SizedBox(
              height: 130,
              child: ReportChart(
                stats: stats,
                labels: [
                  // 10분 안쪽이면 초까지 (안 그러면 "8:46 PM" 만 세 번 나온다)
                  for (final x in [r.startedAt, mid, r.endedAt])
                    fmtClock(x, seconds: r.duration.inMinutes < 10),
                ],
              ),
            ),
            const SizedBox(height: 6),
            const Text(
              'Bars: average each moment · Line: peak',
              style: TextStyle(fontSize: 11, color: Paper.sub),
            ),
            const SizedBox(height: 12),
            const Text(
              'Time at each level',
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.w600,
                color: Paper.ink,
              ),
            ),
            const SizedBox(height: 6),
            ClipRRect(
              borderRadius: BorderRadius.circular(5),
              child: SizedBox(
                key: const Key('band-bar'),
                height: 10,
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    for (final b in bands)
                      if (per[b]! > 0)
                        Expanded(
                          flex: per[b]!,
                          child: ColoredBox(color: Color(b.color.toARGB32())),
                        ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 6),
            Wrap(
              spacing: 10,
              runSpacing: 2,
              children: [
                for (final b in bands)
                  if (per[b]! > 0)
                    Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Container(
                          width: 8,
                          height: 8,
                          decoration: BoxDecoration(
                            color: Color(b.color.toARGB32()),
                            shape: BoxShape.circle,
                          ),
                        ),
                        const SizedBox(width: 4),
                        Text(
                          '${b.name} ${(per[b]! * 100 / total).round()}%',
                          style: const TextStyle(
                            fontSize: 11,
                            color: Paper.sub,
                          ),
                        ),
                      ],
                    ),
              ],
            ),
            const SizedBox(height: 12),
            Container(height: 0.5, color: Paper.line),
            const SizedBox(height: 8),
            Text(
              'Measured with $kAppName on iPhone · ${r.weighting.name.toUpperCase()}-weighting, Fast · '
              'calibration $trimText. Phone microphones are not certified sound level meters; '
              'readings are estimates.',
              key: const Key('report-footer'),
              style: const TextStyle(
                fontSize: 11,
                color: Paper.sub,
                height: 1.4,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// 기록 목록 한 줄에 쓰는 요약.
String recordSummary(NoiseRecord r) =>
    'Avg ${fmtDb(r.average)} · Max ${fmtDb(r.max)} ${r.weighting.unit} · ${fmtDurationWords(r.duration)}';
