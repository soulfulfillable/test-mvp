/// 웹 미리보기 전용 주소 옵션 (아이폰 앱에서는 부르지 않는다).
///  ?shots=1     스토어 스크린샷용 — 광고 자리 숨김
///  ?demo=N      예시 진행: N 일을 어제까지 매일 읽은 상태 (저장하지 않는다 — 진짜 진행과 안 섞임)
///  &behind=K    거기서 K 일 더 밀린 상태
///  &order=chronological / &scope=newTestament|psalmsProverbs
library;

import 'ads.dart';
import 'plan.dart';
import 'store.dart';

void applyWebDemo([Uri? uri]) {
  final q = (uri ?? Uri.base).queryParameters;
  if (q['shots'] == '1') Ads.i = HiddenAds();
  final n = int.tryParse(q['demo'] ?? '');
  if (n == null) return;
  final behind = int.tryParse(q['behind'] ?? '') ?? 0;
  final scope =
      Scope.values.where((s) => s.name == q['scope']).firstOrNull ??
      Scope.whole;
  final order = q['order'] == 'chronological'
      ? Order.chronological
      : Order.canonical;
  AppStore.i.showDemo(scope, order, n, behind);
}
