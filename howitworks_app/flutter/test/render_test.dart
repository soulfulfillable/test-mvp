// 네이티브 도해가 웹과 같게 그려지는지 눈으로 보는 용도: 레슨마다 정지·재생 중 PNG 를 build/shots/ 에 쓴다.
//   flutter test test/render_test.dart [--dart-define=ONLY=microwave,toilet]
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:howthingswork/core/lesson.dart';
import 'package:howthingswork/core/scene.dart';

Future<void> loadRoboto() async {
  final root = Platform.environment['FLUTTER_ROOT'] ?? '/opt/flutter-sdk/flutter';
  final loader = FontLoader('Roboto');
  for (final w in ['Regular', 'Medium', 'Bold']) {
    final f = File('$root/bin/cache/artifacts/material_fonts/Roboto-$w.ttf');
    if (f.existsSync()) loader.addFont(Future.value(ByteData.sublistView(f.readAsBytesSync())));
  }
  await loader.load();
  final hand = FontLoader('Noteworthy');
  for (final w in ['Regular']) {
    final f = File('$root/bin/cache/artifacts/material_fonts/Roboto-$w.ttf');
    if (f.existsSync()) hand.addFont(Future.value(ByteData.sublistView(f.readAsBytesSync())));
  }
  await hand.load();
  diagramFontFamily = 'Roboto';
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUpAll(loadRoboto);
  test('render diagrams', () async {
    final lib = await LessonLibrary.load();
    const only = String.fromEnvironment('ONLY');
    final keys = only.isEmpty ? lib.index.map((e) => e.key).toList() : only.split(',');
    Directory('build/shots').createSync(recursive: true);
    for (final k in keys) {
      final L = await lib.lesson(k);
      for (final mode in ['static', 'play']) {
        final rec = ui.PictureRecorder();
        final c = Canvas(rec);
        const w = 1080.0;
        final h = w / L.aspect;
        final st = L.steps[L.steps.length > 2 ? 2 : L.steps.length - 1];
        final frame = mode == 'play' ? (((st.t0 + st.t1) / 2) * L.scene.fps).floor() : null;
        DiagramPainter(scene: L.scene, parts: L.partRefs, frame: frame, focus: mode == 'play' ? st.parts.toSet() : {})
            .paint(c, Size(w, h));
        final img = await rec.endRecording().toImage(w.toInt(), h.toInt());
        final png = await img.toByteData(format: ui.ImageByteFormat.png);
        File('build/shots/$k-$mode.png').writeAsBytesSync(png!.buffer.asUint8List());
      }
    }
  });
}
