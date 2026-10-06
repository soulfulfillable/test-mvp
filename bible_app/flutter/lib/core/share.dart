import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:share_plus/share_plus.dart';
import 'package:url_launcher/url_launcher.dart';

/// 바깥으로 나가는 동작(공유 시트·Safari) — 테스트에서 갈아끼운다.
class Outside {
  static Future<void> Function(String fileName, String csv) shareCsv = _shareCsv;
  static Future<void> Function(String url) open = _open;
  static final List<String> log = [];
}

Future<void> _shareCsv(String fileName, String csv) async {
  try {
    final bytes = Uint8List.fromList(utf8.encode(csv));
    await SharePlus.instance.share(
      ShareParams(files: [XFile.fromData(bytes, mimeType: 'text/csv', name: fileName)], fileNameOverrides: [fileName]),
    );
  } catch (e) {
    debugPrint('share failed: $e');
  }
}

Future<void> _open(String url) async {
  try {
    await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
  } catch (e) {
    debugPrint('open failed: $e');
  }
}
