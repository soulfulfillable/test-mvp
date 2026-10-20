import 'package:flutter/cupertino.dart';

import '../app.dart';
import '../core/lesson.dart';
import 'lesson_body.dart';
import 'widgets.dart';

class HomeShell extends StatelessWidget {
  const HomeShell({super.key});
  @override
  Widget build(BuildContext context) => CupertinoTabScaffold(
        tabBar: CupertinoTabBar(items: const [
          BottomNavigationBarItem(icon: Icon(CupertinoIcons.calendar_today, key: Key('tab-today')), label: 'Today'),
          BottomNavigationBarItem(icon: Icon(CupertinoIcons.book, key: Key('tab-library')), label: 'Library'),
        ]),
        tabBuilder: (context, i) => CupertinoTabView(builder: (_) => i == 0 ? const TodayScreen() : const LibraryScreen()),
      );
}

void openLesson(BuildContext context, String key, {String back = 'Library'}) {
  Navigator.of(context).push(CupertinoPageRoute(builder: (_) => LessonScreen(lessonKey: key, back: back)));
}

/// 레슨 본문을 읽어 오는 동안(처음 한 번, 수십 ms) 빈 화면 대신 자리만 잡아 둔다
class LessonLoader extends StatelessWidget {
  const LessonLoader({super.key, required this.lessonKey, required this.builder});
  final String lessonKey;
  final Widget Function(Lesson) builder;
  @override
  Widget build(BuildContext context) {
    final lib = AppScope.of(context).library;
    final cached = lib.cached(lessonKey);
    if (cached != null) return builder(cached);
    return FutureBuilder<Lesson>(
      future: lib.lesson(lessonKey),
      builder: (context, snap) => snap.hasData
          ? builder(snap.data!)
          : const Padding(padding: EdgeInsets.all(60), child: Center(child: CupertinoActivityIndicator())),
    );
  }
}

class TodayScreen extends StatefulWidget {
  const TodayScreen({super.key});
  @override
  State<TodayScreen> createState() => _TodayScreenState();
}

class _TodayScreenState extends State<TodayScreen> with WidgetsBindingObserver {
  int streak = 0;
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    streak = AppScope.of(context).store.touchStreak();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState s) {
    // 자정을 넘겨 앱으로 돌아오면 오늘의 레슨·연속 기록을 다시 계산
    if (s == AppLifecycleState.resumed && mounted) setState(() => streak = AppScope.of(context).store.touchStreak());
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final scope = AppScope.of(context);
    final store = scope.store;
    final entry = scope.library.index.firstWhere((e) => e.day == store.todayLesson, orElse: () => scope.library.index.first);
    final now = DateTime.now();
    const wd = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const mo = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return CupertinoPageScaffold(
      backgroundColor: c(context, CupertinoColors.systemGroupedBackground),
      child: CustomScrollView(slivers: [
        CupertinoSliverNavigationBar(
          largeTitle: const Text('Today'),
          border: null,
          backgroundColor: c(context, CupertinoColors.systemGroupedBackground),
          trailing: Padding(
            padding: const EdgeInsets.only(top: 12),
            child: Text('$streak-day streak',
                key: const Key('streak'), style: TextStyle(fontSize: 13, color: c(context, CupertinoColors.secondaryLabel))),
          ),
        ),
        SliverToBoxAdapter(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(18, 0, 18, 0),
            child: Text('${wd[now.weekday - 1]}, ${mo[now.month - 1]} ${now.day} · Day ${store.dayNumber}'.toUpperCase(),
                style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: c(context, CupertinoColors.secondaryLabel))),
          ),
        ),
        SliverToBoxAdapter(
          child: LessonLoader(
            lessonKey: entry.key,
            builder: (L) => LessonBody(lesson: L, onOpen: (k) => openLesson(context, k, back: 'Today')),
          ),
        ),
        const SliverToBoxAdapter(child: SizedBox(height: 40)),
      ]),
    );
  }
}

class LessonScreen extends StatelessWidget {
  const LessonScreen({super.key, required this.lessonKey, required this.back});
  final String lessonKey, back;
  @override
  Widget build(BuildContext context) => CupertinoPageScaffold(
        backgroundColor: c(context, CupertinoColors.systemGroupedBackground),
        navigationBar: CupertinoNavigationBar(
          leading: BackLink(label: back),
          automaticallyImplyLeading: false,
          backgroundColor: c(context, CupertinoColors.systemGroupedBackground),
          border: null,
        ),
        child: SafeArea(
          bottom: false,
          child: ListView(
            key: Key('lesson-$lessonKey'),
            children: [
              LessonLoader(
                lessonKey: lessonKey,
                builder: (L) => LessonBody(
                  lesson: L,
                  onOpen: (k) => Navigator.of(context).pushReplacement(
                    CupertinoPageRoute(builder: (_) => LessonScreen(lessonKey: k, back: back)),
                  ),
                ),
              ),
            ],
          ),
        ),
      );
}

class LibraryScreen extends StatelessWidget {
  const LibraryScreen({super.key});
  static const cats = ['Kitchen', 'Bathroom', 'Home', 'Getting Around', 'Digital'];

  @override
  Widget build(BuildContext context) {
    final scope = AppScope.of(context);
    final store = scope.store;
    final idx = scope.library.index;
    return CupertinoPageScaffold(
      backgroundColor: c(context, CupertinoColors.systemGroupedBackground),
      child: ListenableBuilder(
        listenable: store,
        builder: (context, _) {
          final saved = idx.where((e) => store.isSaved(e.key)).toList();
          final learned = idx.where((e) => store.done(e.key)).length;
          return CustomScrollView(slivers: [
            CupertinoSliverNavigationBar(
              largeTitle: const Text('Library'),
              border: null,
              backgroundColor: c(context, CupertinoColors.systemGroupedBackground),
            ),
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(18, 0, 18, 0),
                child: Text('$learned of ${idx.length} learned · a new one every day',
                    key: const Key('learned'), style: TextStyle(fontSize: 13, color: c(context, CupertinoColors.secondaryLabel))),
              ),
            ),
            if (saved.isNotEmpty) SliverToBoxAdapter(child: _section(context, 'Saved', saved, 'saved')),
            for (final cat in cats)
              if (idx.any((e) => e.cat == cat))
                SliverToBoxAdapter(child: _section(context, cat, idx.where((e) => e.cat == cat).toList(), 'cat')),
            const SliverToBoxAdapter(child: SizedBox(height: 40)),
          ]);
        },
      ),
    );
  }

  Widget _section(BuildContext context, String title, List<LessonIndexEntry> list, String prefix) {
    final store = AppScope.of(context).store;
    return CupertinoListSection.insetGrouped(
      header: Text(title.toUpperCase(), style: TextStyle(fontSize: 13, fontWeight: FontWeight.w400, color: c(context, CupertinoColors.secondaryLabel))),
      children: [
        for (final e in list)
          Builder(builder: (context) {
            final open = store.unlocked(e.day), wait = store.daysUntil(e.day);
            final sub = open ? 'Day ${e.day} · ${e.mins} min' : (wait == 1 ? 'Unlocks tomorrow' : 'Unlocks in $wait days');
            return MergeSemantics(
              child: CupertinoListTile(
                key: Key('$prefix-${e.key}'),
                leadingSize: 56,
                leading: Opacity(opacity: open ? 1 : .45, child: Thumb(e)),
                title: Text(e.title, style: TextStyle(color: open ? null : c(context, CupertinoColors.secondaryLabel))),
                subtitle: Text(sub),
                trailing: Row(mainAxisSize: MainAxisSize.min, children: [
                  if (store.done(e.key)) Icon(CupertinoIcons.checkmark_alt, key: Key('done-${e.key}'), size: 18, color: c(context, CupertinoColors.systemGreen)),
                  if (!open) Icon(CupertinoIcons.lock, size: 16, color: c(context, CupertinoColors.tertiaryLabel)),
                  const SizedBox(width: 4),
                  if (open) const CupertinoListTileChevron(),
                ]),
                onTap: () {
                  tick();
                  if (open) {
                    openLesson(context, e.key);
                  } else {
                    showCupertinoDialog<void>(
                      context: context,
                      builder: (ctx) => CupertinoAlertDialog(
                        title: Text(wait == 1 ? 'Unlocks tomorrow' : 'Unlocks in $wait days'),
                        content: const Text('One new object a day — so each one sticks.'),
                        actions: [
                          CupertinoDialogAction(key: const Key('lock-ok'), isDefaultAction: true, onPressed: () => Navigator.pop(ctx), child: const Text('OK')),
                        ],
                      ),
                    );
                  }
                },
              ),
            );
          }),
      ],
    );
  }
}
