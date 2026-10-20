import 'package:flutter/cupertino.dart';

import 'core/lesson.dart';
import 'core/store.dart';
import 'screens/home.dart';

const accent = CupertinoDynamicColor.withBrightness(color: Color(0xFFD63A2A), darkColor: Color(0xFFFF5B47));

/// 앱 전체에서 레슨 묶음·저장소를 꺼내 쓰는 통로
class AppScope extends InheritedWidget {
  const AppScope({super.key, required this.library, required this.store, required super.child});
  final LessonLibrary library;
  final Store store;
  static AppScope of(BuildContext c) => c.dependOnInheritedWidgetOfExactType<AppScope>()!;
  @override
  bool updateShouldNotify(AppScope o) => o.library != library || o.store != store;
}

class HowThingsWorkApp extends StatelessWidget {
  const HowThingsWorkApp({super.key, required this.library, required this.store});
  final LessonLibrary library;
  final Store store;

  @override
  Widget build(BuildContext context) {
    return AppScope(
      library: library,
      store: store,
      child: const CupertinoApp(
        title: 'How Things Work',
        debugShowCheckedModeBanner: false,
        theme: CupertinoThemeData(primaryColor: accent),
        home: HomeShell(),
      ),
    );
  }
}
