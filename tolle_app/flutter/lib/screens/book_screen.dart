import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';

import '../core/bible.dart';
import '../core/store.dart';
import '../core/theme.dart';
import 'widgets.dart';

/// 책 한 권의 장 체크: 계획과 따로, 내가 읽은 장을 직접 표시한다 (사용자 요청 10-06).
/// 탭 = 읽음/안 읽음 두 상태만 (탭 순환·페널티 없음).
class BookScreen extends StatefulWidget {
  const BookScreen({super.key, required this.book});
  final Book book;

  @override
  State<BookScreen> createState() => _BookScreenState();
}

class _BookScreenState extends State<BookScreen> {
  String? _note;
  Timer? _noteTimer;

  @override
  void dispose() {
    _noteTimer?.cancel();
    super.dispose();
  }

  void _tap(int chapter) {
    final s = AppStore.i, id = widget.book.chapterId(chapter);
    if (s.readInPlan(id)) {
      // 계획에서 읽은 장은 여기서 못 지운다 — 이유를 그 자리에서 말해 준다
      _show(
        '${_ref(chapter)} is checked off in your plan. Undo it from Today.',
      );
      return;
    }
    HapticFeedback.selectionClick();
    s.toggleChapter(id);
    setState(() => _note = null);
  }

  void _show(String text) {
    _noteTimer?.cancel();
    setState(() => _note = text);
    _noteTimer = Timer(const Duration(seconds: 4), () {
      if (mounted) setState(() => _note = null);
    });
  }

  String _ref(int c) =>
      widget.book.chapters == 1 ? widget.book.name : '${widget.book.name} $c';

  Future<void> _clear(List<int> mine) async {
    final ok = await showCupertinoDialog<bool>(
      context: context,
      builder: (ctx) => CupertinoAlertDialog(
        title: Text('Clear ${widget.book.name}?'),
        content: Text(
          'Unchecks the ${mine.length} ${mine.length == 1 ? 'chapter' : 'chapters'} you checked here. Your reading plan isn’t changed.',
        ),
        actions: [
          CupertinoDialogAction(
            isDefaultAction: true,
            onPressed: () => Navigator.pop(ctx, false),
            child: const Text('Cancel'),
          ),
          CupertinoDialogAction(
            key: const Key('confirm-clear'),
            isDestructiveAction: true,
            onPressed: () => Navigator.pop(ctx, true),
            child: const Text('Clear'),
          ),
        ],
      ),
    );
    if (ok == true) AppStore.i.uncheckAll(mine);
  }

  @override
  Widget build(BuildContext context) => ListenableBuilder(
    listenable: AppStore.i,
    builder: (context, _) {
      final s = AppStore.i, b = widget.book;
      final read = s.allRead;
      final ids = [for (var c = 1; c <= b.chapters; c++) b.chapterId(c)];
      final n = ids.where(read.contains).length;
      final mine = ids.where(s.checked.contains).toList();
      final secondary = dyn(context, CupertinoColors.secondaryLabel);
      final on = dyn(context, accent);
      final fgOn = CupertinoTheme.brightnessOf(context) == Brightness.dark
          ? CupertinoColors.black
          : CupertinoColors.white;

      return CupertinoPageScaffold(
        navigationBar: CupertinoNavigationBar(
          leading: const BackLink(label: 'Map'),
          middle: Text(b.name),
          border: null,
        ),
        child: SafeArea(
          child: ListView(
            key: const Key('book-list'),
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 32),
            children: [
              Text(
                '$n of ${b.chapters} ${b.chapters == 1 ? 'chapter' : 'chapters'} read',
                key: const Key('book-count'),
                style: textOf(context).copyWith(fontWeight: FontWeight.w600),
              ),
              const SizedBox(height: 2),
              Text(
                'Tap a chapter you’ve read.',
                style: TextStyle(fontSize: kSmall, color: secondary),
              ),
              Row(
                children: [
                  TextAction(
                    key: const Key('mark-all'),
                    label: 'Mark All Read',
                    onTap: n == b.chapters
                        ? null
                        : () =>
                              s.checkAll(ids.where((id) => !read.contains(id))),
                  ),
                  const Spacer(),
                  TextAction(
                    key: const Key('clear'),
                    label: 'Clear',
                    onTap: mine.isEmpty ? null : () => _clear(mine),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              LayoutBuilder(
                builder: (context, box) {
                  const gap = 8.0;
                  final cols = ((box.maxWidth + gap) / (48 + gap))
                      .floor()
                      .clamp(4, 9);
                  final size = (box.maxWidth - gap * (cols - 1)) / cols;
                  return Wrap(
                    spacing: gap,
                    runSpacing: gap,
                    children: [
                      for (var c = 1; c <= b.chapters; c++)
                        Semantics(
                          button: true,
                          label:
                              '${_ref(c)}, ${read.contains(b.chapterId(c)) ? 'read' : 'not read'}',
                          onTap: () => _tap(c),
                          excludeSemantics: true,
                          child: GestureDetector(
                            key: Key('ch-$c'),
                            behavior: HitTestBehavior.opaque,
                            onTap: () => _tap(c),
                            child: Container(
                              width: size,
                              height: size,
                              alignment: Alignment.center,
                              decoration: BoxDecoration(
                                color: read.contains(b.chapterId(c))
                                    ? on
                                    : dyn(context, cellOff),
                                borderRadius: BorderRadius.circular(10),
                              ),
                              child: FittedBox(
                                fit: BoxFit.scaleDown,
                                child: Text(
                                  '$c',
                                  style: TextStyle(
                                    fontSize: kBody,
                                    fontFeatures: tabular,
                                    color: read.contains(b.chapterId(c))
                                        ? fgOn
                                        : dyn(context, CupertinoColors.label),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                    ],
                  );
                },
              ),
              const SizedBox(height: 12),
              AnimatedOpacity(
                opacity: _note == null ? 0 : 1,
                duration: const Duration(milliseconds: 200),
                child: Text(
                  _note ?? ' ',
                  key: const Key('book-note'),
                  style: TextStyle(fontSize: kSmall, color: secondary),
                ),
              ),
              const SizedBox(height: 8),
              Text(
                'Chapters you finish in your reading plan fill in here too. Checking a chapter here doesn’t change your plan.',
                style: TextStyle(
                  fontSize: kSmall,
                  height: 1.35,
                  color: secondary,
                ),
              ),
            ],
          ),
        ),
      );
    },
  );
}
