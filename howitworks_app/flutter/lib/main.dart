import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';

import 'app.dart';
import 'core/lesson.dart';
import 'core/store.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  final lib = await LessonLibrary.load();
  final store = await Store.open();
  runApp(HowThingsWorkApp(library: lib, store: store));
}
