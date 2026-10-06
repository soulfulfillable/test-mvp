/// 성경 66권 · 1,189장. 장은 0..1188 번호(성경 순서)로 다룬다. 본문은 없다.
library;

import 'books_data.dart';

class Book {
  const Book(this.index, this.name, this.short, this.verses, this.first);
  final int index;
  final String name, short;

  /// 장마다 절 수.
  final List<int> verses;

  /// 이 책 1장의 전체 장 번호.
  final int first;

  int get chapters => verses.length;
  bool get isNew => index >= 39;
  int chapterId(int chapter) => first + chapter - 1;
}

final List<Book> books = () {
  var first = 0;
  final out = <Book>[];
  for (var i = 0; i < kBookData.length; i++) {
    final (name, short, verses) = kBookData[i];
    out.add(Book(i, name, short, verses, first));
    first += verses.length;
  }
  return List<Book>.unmodifiable(out);
}();

const totalChapters = 1189;

/// 장 번호 → (책, 장).
final List<(Book, int)> _byId = [
  for (final b in books)
    for (var c = 1; c <= b.chapters; c++) (b, c),
];

(Book, int) chapterOf(int id) => _byId[id];
int versesOf(int id) {
  final (b, c) = _byId[id];
  return b.verses[c - 1];
}

Book bookNamed(String short) => books.firstWhere((b) => b.short == short);

/// 읽을 장 목록 → "Genesis 1–3", "Ruth 4 · 1 Samuel 1–2", "Psalm 23", "Jude".
/// 같은 책에서 이어지는 장끼리 묶는다.
String readingLabel(List<int> ids) => readingParts(ids).join(' · ');

/// 같은 책끼리 묶은 조각들 ("Psalms 40–41", "2 Samuel 5–6"). 큰 제목은 조각마다 한 줄로.
List<String> readingParts(List<int> ids) {
  final parts = <String>[];
  var i = 0;
  while (i < ids.length) {
    final (b, c0) = chapterOf(ids[i]);
    var j = i;
    while (j + 1 < ids.length &&
        ids[j + 1] == ids[j] + 1 &&
        chapterOf(ids[j + 1]).$1 == b) {
      j++;
    }
    final c1 = chapterOf(ids[j]).$2;
    parts.add(_range(b, c0, c1));
    i = j + 1;
  }
  return parts;
}

String _range(Book b, int c0, int c1) {
  if (b.chapters == 1) return b.name;
  if (c0 == c1) return '${b.name == 'Psalms' ? 'Psalm' : b.name} $c0';
  return '${b.name} $c0–$c1';
}

/// 읽는 데 걸리는 대략적인 시간(분). 미국 성인 묵독 약 200단어/분, 영어 성경 한 절 평균 약 25단어
/// (WEB 약 75만 단어 ÷ 31,102절) → 한 절 7.5초. 화면엔 "about N min" 으로만 쓴다.
int minutesFor(List<int> ids) {
  final v = ids.fold<int>(0, (s, id) => s + versesOf(id));
  return (v * 7.5 / 60).ceil().clamp(1, 999);
}
