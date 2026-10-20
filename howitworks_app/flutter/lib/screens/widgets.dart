import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';

import '../app.dart';
import '../core/lesson.dart';
import '../core/scene.dart';

/// 바깥 링크 열기(테스트에서 바꿔 끼운다)
Future<void> Function(String url) openUrl = (u) async {
  try {
    await launchUrl(Uri.parse(u), mode: LaunchMode.externalApplication);
  } catch (_) {}
};

Color c(BuildContext ctx, Color col) => CupertinoDynamicColor.resolve(col, ctx);

class SectionHeader extends StatelessWidget {
  const SectionHeader(this.text, {super.key});
  final String text;
  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(18, 28, 16, 6),
        child: Text(text.toUpperCase(),
            style: TextStyle(fontSize: 13, letterSpacing: .2, color: c(context, CupertinoColors.secondaryLabel))),
      );
}

class Card extends StatelessWidget {
  const Card({super.key, required this.child, this.padding = const EdgeInsets.fromLTRB(14, 12, 14, 12)});
  final Widget child;
  final EdgeInsets padding;
  @override
  Widget build(BuildContext context) => Container(
        margin: const EdgeInsets.symmetric(horizontal: 16),
        padding: padding,
        decoration: BoxDecoration(
          color: c(context, CupertinoColors.secondarySystemGroupedBackground),
          borderRadius: BorderRadius.circular(12),
        ),
        child: child,
      );
}

/// VoiceOver 에서 누를 수 있는 뒤로 버튼 (Flutter 기본 뒤로 버튼은 접근성 tap 이 없다 — PLAYBOOK)
class BackLink extends StatelessWidget {
  const BackLink({super.key, required this.label});
  final String label;
  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        label: 'Back to $label',
        onTap: () => Navigator.of(context).maybePop(),
        excludeSemantics: true,
        child: CupertinoButton(
          key: const Key('back'),
          padding: EdgeInsets.zero,
          minimumSize: const Size(44, 44),
          onPressed: () => Navigator.of(context).maybePop(),
          child: Row(mainAxisSize: MainAxisSize.min, children: [
            Icon(CupertinoIcons.chevron_back, color: c(context, accent), size: 26),
            Text(label, style: TextStyle(color: c(context, accent), fontSize: 17)),
          ]),
        ),
      );
}

/// 목록 썸네일: 정지 그림만, 손떨림 없이 가볍게
class Thumb extends StatelessWidget {
  const Thumb(this.e, {super.key});
  final LessonIndexEntry e;
  @override
  Widget build(BuildContext context) => Container(
        width: 56,
        height: 40,
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF),
          borderRadius: BorderRadius.circular(6),
          border: Border.all(color: const Color(0x1F000000), width: .5),
        ),
        clipBehavior: Clip.antiAlias,
        child: FittedBox(
          fit: BoxFit.cover,
          child: SizedBox(
            width: 56,
            height: 56 * e.thumb.h / e.thumb.w,
            child: CustomPaint(painter: DiagramPainter(scene: e.thumb, parts: const [], badges: false, rough: false)),
          ),
        ),
      );
}

void tick() => HapticFeedback.selectionClick();
