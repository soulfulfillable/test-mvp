import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';

import 'theme.dart';

/// AdMob 광고 단위 ID — 아직 앱을 안 만들어 Google 공식 테스트 ID. 사용자가 AdMob(soulfulfillable 계정)에서
/// 앱·배너를 만들면 여기와 ios/Runner/Info.plist 의 GADApplicationIdentifier 를 바꾼다.
class AdIds {
  static const banner = 'ca-app-pub-3940256099942544/2934735716';
}

/// 방침 (plans/bible-reading-app.md): 오늘 화면엔 광고 없음. 배너는 지도·계획 화면 아래만. 전면·보상형 없음.
abstract class Ads {
  static Ads i = kIsWeb ? FakeAds() : AdMobAds();

  Future<void> init();
  Widget banner();
}

class AdMobAds extends Ads {
  @override
  Future<void> init() async {
    // 신앙 앱 — 성인·민감 광고 차단 (콘솔의 민감 카테고리 차단과 함께)
    await MobileAds.instance.updateRequestConfiguration(
      RequestConfiguration(maxAdContentRating: MaxAdContentRating.g),
    );
    await MobileAds.instance.initialize();
  }

  @override
  Widget banner() => const _AdBanner();
}

class FakeAds extends Ads {
  int bannersBuilt = 0;

  @override
  Future<void> init() async {}

  @override
  Widget banner() {
    bannersBuilt++;
    return const _FakeBanner();
  }
}

/// 웹 미리보기 `?shots=1` — 스토어 스크린샷용으로 광고 자리를 숨긴다.
class HiddenAds extends Ads {
  @override
  Future<void> init() async {}

  @override
  Widget banner() => const SizedBox.shrink();
}

const bannerHeight = 58.0;

class _FakeBanner extends StatelessWidget {
  const _FakeBanner();

  @override
  Widget build(BuildContext context) => SizedBox(
    key: const Key('banner'),
    height: bannerHeight,
    child: Center(
      child: Container(
        width: 320,
        height: 50,
        alignment: Alignment.center,
        color: dyn(context, CupertinoColors.secondarySystemFill),
        child: Text('Ad', style: TextStyle(fontSize: kSmall, color: dyn(context, CupertinoColors.secondaryLabel))),
      ),
    ),
  );
}

class _AdBanner extends StatefulWidget {
  const _AdBanner();

  @override
  State<_AdBanner> createState() => _AdBannerState();
}

class _AdBannerState extends State<_AdBanner> {
  BannerAd? _ad;
  bool _loaded = false;

  @override
  void initState() {
    super.initState();
    _ad = BannerAd(
      adUnitId: AdIds.banner,
      size: AdSize.banner,
      request: const AdRequest(),
      listener: BannerAdListener(
        onAdLoaded: (_) => mounted ? setState(() => _loaded = true) : null,
        onAdFailedToLoad: (ad, _) => ad.dispose(),
      ),
    )..load();
  }

  @override
  void dispose() {
    _ad?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => SizedBox(
    key: const Key('banner'),
    height: bannerHeight,
    child: _loaded && _ad != null
        ? Center(child: SizedBox(width: 320, height: 50, child: AdWidget(ad: _ad!)))
        : null,
  );
}
