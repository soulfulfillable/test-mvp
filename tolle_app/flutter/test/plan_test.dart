import 'package:bible/core/bible.dart';
import 'package:bible/core/plan.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('66 books, 929 + 260 = 1,189 chapters, 31,102 verses', () {
    expect(books.length, 66);
    expect(books.where((b) => !b.isNew).fold<int>(0, (s, b) => s + b.chapters), 929);
    expect(books.where((b) => b.isNew).fold<int>(0, (s, b) => s + b.chapters), 260);
    expect(totalChapters, 1189);
    expect(books.fold<int>(0, (s, b) => s + b.verses.fold<int>(0, (a, v) => a + v)), 31102);
    expect(books.first.name, 'Genesis');
    expect(books[18].chapters, 150); // Psalms
    expect(versesOf(bookNamed('Ps').chapterId(119)), 176);
    expect(versesOf(bookNamed('Ps').chapterId(117)), 2);
    expect(books.last.first + books.last.chapters, 1189);
  });

  test('labels', () {
    final gen = bookNamed('Gen');
    expect(readingLabel([gen.chapterId(1), gen.chapterId(2), gen.chapterId(3)]), 'Genesis 1–3');
    expect(readingLabel([bookNamed('Ps').chapterId(23)]), 'Psalm 23');
    expect(readingLabel([bookNamed('Ps').chapterId(1), bookNamed('Ps').chapterId(2)]), 'Psalms 1–2');
    expect(readingLabel([bookNamed('Ruth').chapterId(4), bookNamed('1 Sam').chapterId(1)]), 'Ruth 4 · 1 Samuel 1');
    expect(readingLabel([bookNamed('Jude').chapterId(1)]), 'Jude');
    expect(readingLabel([bookNamed('Gen').chapterId(1), bookNamed('Gen').chapterId(3)]), 'Genesis 1 · Genesis 3');
  });

  test('chronological order has every chapter exactly once', () {
    expect(chronologicalOrder.length, 1189);
    expect(chronologicalOrder.toSet().length, 1189);
    // 욥기는 창세기 11장 뒤, 갈라디아서는 사도행전 14장 뒤
    final job1 = bookNamed('Job').chapterId(1);
    expect(chronologicalOrder[chronologicalOrder.indexOf(job1) - 1], bookNamed('Gen').chapterId(11));
    final gal1 = bookNamed('Gal').chapterId(1);
    expect(chronologicalOrder.indexOf(gal1) > chronologicalOrder.indexOf(bookNamed('Acts').chapterId(14)), true);
  });

  for (final s in Scope.values) {
    for (final o in Order.values) {
      for (final len in s.lengths) {
        test('${s.name} ${o.name} $len days covers its chapters once, every day ≥ 1 chapter, balanced', () {
          final seq = sequenceFor(s, o);
          final expected = switch (s) {
            Scope.whole => 1189,
            Scope.newTestament => 260,
            Scope.psalmsProverbs => 181,
          };
          expect(seq.length, expected);
          expect(seq.toSet().length, expected);
          final sch = Schedule.fresh(s, o, len, 20000);
          expect(sch.length, len);
          final all = [for (var d = 0; d < len; d++) ...sch.chaptersOn(d)];
          expect(all, seq);
          final loads = [for (var d = 0; d < len; d++) sch.chaptersOn(d).fold<int>(0, (a, id) => a + versesOf(id))];
          final avg = loads.fold<int>(0, (a, b) => a + b) / len;
          for (var d = 0; d < len; d++) {
            expect(sch.chaptersOn(d), isNotEmpty);
            // 하루 분량이 평균의 두 배를 넘는 건 한 장이 원래 긴 경우뿐 (시편 119편 등)
            if (loads[d] > avg * 2) expect(sch.chaptersOn(d).length, 1, reason: 'day $d ${readingLabel(sch.chaptersOn(d))}');
          }
          expect(sch.dates.first, 20000);
          expect(sch.endDay, 20000 + len - 1);
        });
      }
    }
  }

  test('a year plan starts with Genesis, about 3–4 chapters a day', () {
    final sch = Schedule.fresh(Scope.whole, Order.canonical, 365, 0);
    expect(readingLabel(sch.chaptersOn(0)), startsWith('Genesis 1–'));
    expect(readingLabel(sch.chaptersOn(364)), contains('Revelation'));
  });

  test('catch up: spread keeps finished days and end date; shift moves end', () {
    final sch = Schedule.fresh(Scope.whole, Order.canonical, 365, 1000);
    // 10일째(1010)인데 3일만 읽음
    expect(sch.dueBy(1010), 11);
    final spread = sch.spreadRemaining(3, 1010)!;
    expect(spread.cuts.sublist(0, 4), sch.cuts.sublist(0, 4));
    expect(spread.dates[3], 1010);
    expect(spread.endDay, sch.endDay);
    expect(spread.length, 3 + (sch.endDay - 1010 + 1));
    expect([for (var d = 0; d < spread.length; d++) ...spread.chaptersOn(d)], sch.seq);
    expect(spread.dueBy(1010), 4);

    final shifted = sch.shiftFrom(3, 1010);
    expect(shifted.dates[3], 1010);
    expect(shifted.endDay, sch.endDay + 7);
    expect(shifted.cuts, sch.cuts);

    // 끝날이 지났으면 다시 나누기 불가
    expect(sch.spreadRemaining(3, sch.endDay + 1), isNull);
  });

  test('dayNumber/dateOf round trip across DST', () {
    for (final t in [DateTime(2026, 3, 8), DateTime(2026, 11, 1), DateTime(2027, 1, 1)]) {
      expect(dateOf(dayNumber(t)), t);
    }
    expect(dayNumber(DateTime(2026, 3, 9)) - dayNumber(DateTime(2026, 3, 8)), 1);
  });
}
