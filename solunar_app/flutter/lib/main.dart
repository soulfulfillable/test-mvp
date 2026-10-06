import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/semantics.dart';
import 'package:flutter/services.dart';

import 'core/ads.dart';
import 'core/location.dart';
import 'core/store.dart';
import 'core/theme.dart';
import 'screens/home_screen.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  if (kIsWeb) {
    // 웹 미리보기 점검용 스위치: ?ads=slow|none|early (가짜 광고 상황), ?loc=lat,lng (가짜 위치)
    final q = Uri.base.queryParameters;
    Ads.i = webPreviewAds(q['ads']);
    final loc = q['loc']?.split(',');
    if (loc != null && loc.length == 2) {
      final lat = double.tryParse(loc[0]), lng = double.tryParse(loc[1]);
      if (lat != null && lng != null) LocationService.i = FakeLocation(LocationResult.found(lat, lng));
    }
  }
  await AppStore.i.load();
  Ads.i.init();
  // 웹 미리보기: 접근성 트리를 켜 둬야 화면 읽기·자동 점검이 버튼을 이름으로 찾는다.
  if (kIsWeb) SemanticsBinding.instance.ensureSemantics();
  runApp(const SolunarApp());
}

/// DESIGN.md: Material 기본 테마 대신 iOS 부품(Cupertino)만. 라이트·다크는 시스템 설정을 따른다.
/// 첫 화면부터 메인 — 장소를 아직 안 골랐으면 폰 시간대의 가장 큰 마을로 보여 주고 "Use My Location" 을 권한다.
class SolunarApp extends StatelessWidget {
  const SolunarApp({super.key});

  @override
  Widget build(BuildContext context) =>
      CupertinoApp(title: kAppName, debugShowCheckedModeBanner: false, theme: buildTheme(), home: const HomeScreen());
}
