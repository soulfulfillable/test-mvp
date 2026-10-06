import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/semantics.dart';
import 'package:flutter/services.dart';

import 'core/ads.dart';
import 'core/notify.dart';
import 'core/store.dart';
import 'core/theme.dart';
import 'core/web_demo.dart';
import 'screens/map_screen.dart';
import 'screens/plan_screen.dart';
import 'screens/today_screen.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  await Notifier.i.init();
  await AppStore.i.load();
  if (kIsWeb) {
    applyWebDemo();
    // 웹 미리보기: 접근성 트리를 켜 둬야 자동 점검이 버튼을 이름으로 찾는다.
    SemanticsBinding.instance.ensureSemantics();
  }
  Ads.i.init().catchError((Object e) => debugPrint('ads: $e'));
  runApp(const BibleApp());
}

/// DESIGN.md: Material 기본 테마 대신 iOS 부품(Cupertino)만. 라이트·다크는 시스템 설정을 따른다.
class BibleApp extends StatelessWidget {
  const BibleApp({super.key});

  @override
  Widget build(BuildContext context) => CupertinoApp(
    title: kAppName,
    debugShowCheckedModeBanner: false,
    theme: buildTheme(),
    home: const HomeTabs(),
  );
}

class HomeTabs extends StatefulWidget {
  const HomeTabs({super.key});

  @override
  State<HomeTabs> createState() => _HomeTabsState();
}

class _HomeTabsState extends State<HomeTabs> with WidgetsBindingObserver {
  final _tabs = CupertinoTabController();

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _tabs.dispose();
    super.dispose();
  }

  /// 앱을 켜 둔 채 자정이 지나면 '오늘' 이 바뀐다 → 돌아올 때 다시 그리고 알림도 다시 예약.
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      AppStore.i.refresh();
      AppStore.i.syncReminders();
    }
  }

  @override
  Widget build(BuildContext context) => CupertinoTabScaffold(
    controller: _tabs,
    tabBar: CupertinoTabBar(
      activeColor: dyn(context, accent),
      items: const [
        BottomNavigationBarItem(
          icon: Icon(CupertinoIcons.book),
          label: 'Today',
        ),
        BottomNavigationBarItem(
          icon: Icon(CupertinoIcons.square_grid_3x2),
          label: 'Map',
        ),
        BottomNavigationBarItem(
          icon: Icon(CupertinoIcons.calendar),
          label: 'Plan',
        ),
      ],
    ),
    tabBuilder: (context, i) => CupertinoTabView(
      builder: (context) => switch (i) {
        0 => TodayScreen(onOpenPlan: () => _tabs.index = 2),
        1 => const MapScreen(),
        _ => const PlanScreen(),
      },
    ),
  );
}
