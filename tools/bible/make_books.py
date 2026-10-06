"""성경 66권 장·절 수 → bible_app/flutter/lib/core/books_data.dart

출처: PyPI `pythonbible` 0.15.5 (MIT) 의 MAX_VERSE_NUMBER_BY_BOOK_AND_CHAPTER (개신교 66권, 영어 성경 장·절 구분).
본문은 넣지 않는다 — 장 수·절 수(계획을 고르게 나누는 무게)만.
사용: python3 -I tools/bible/make_books.py <pythonbible 휠을 푼 폴더>
"""
import sys
from pathlib import Path

sys.path.insert(0, sys.argv[1])
from pythonbible.verses import MAX_VERSE_NUMBER_BY_BOOK_AND_CHAPTER as M  # noqa: E402

# 화면 이름(미국 표준), 짧은 이름(지도 줄 머리)
NAMES = [
    ("Genesis", "Gen"), ("Exodus", "Exod"), ("Leviticus", "Lev"), ("Numbers", "Num"),
    ("Deuteronomy", "Deut"), ("Joshua", "Josh"), ("Judges", "Judg"), ("Ruth", "Ruth"),
    ("1 Samuel", "1 Sam"), ("2 Samuel", "2 Sam"), ("1 Kings", "1 Kgs"), ("2 Kings", "2 Kgs"),
    ("1 Chronicles", "1 Chr"), ("2 Chronicles", "2 Chr"), ("Ezra", "Ezra"), ("Nehemiah", "Neh"),
    ("Esther", "Esth"), ("Job", "Job"), ("Psalms", "Ps"), ("Proverbs", "Prov"),
    ("Ecclesiastes", "Eccl"), ("Song of Songs", "Song"), ("Isaiah", "Isa"), ("Jeremiah", "Jer"),
    ("Lamentations", "Lam"), ("Ezekiel", "Ezek"), ("Daniel", "Dan"), ("Hosea", "Hos"),
    ("Joel", "Joel"), ("Amos", "Amos"), ("Obadiah", "Obad"), ("Jonah", "Jonah"),
    ("Micah", "Mic"), ("Nahum", "Nah"), ("Habakkuk", "Hab"), ("Zephaniah", "Zeph"),
    ("Haggai", "Hag"), ("Zechariah", "Zech"), ("Malachi", "Mal"),
    ("Matthew", "Matt"), ("Mark", "Mark"), ("Luke", "Luke"), ("John", "John"), ("Acts", "Acts"),
    ("Romans", "Rom"), ("1 Corinthians", "1 Cor"), ("2 Corinthians", "2 Cor"), ("Galatians", "Gal"),
    ("Ephesians", "Eph"), ("Philippians", "Phil"), ("Colossians", "Col"),
    ("1 Thessalonians", "1 Thes"), ("2 Thessalonians", "2 Thes"), ("1 Timothy", "1 Tim"),
    ("2 Timothy", "2 Tim"), ("Titus", "Titus"), ("Philemon", "Phlm"), ("Hebrews", "Heb"),
    ("James", "Jas"), ("1 Peter", "1 Pet"), ("2 Peter", "2 Pet"), ("1 John", "1 Jn"),
    ("2 John", "2 Jn"), ("3 John", "3 Jn"), ("Jude", "Jude"), ("Revelation", "Rev"),
]

books = list(M.items())[:66]
assert len(books) == 66 and books[0][0].name == "GENESIS" and books[65][0].name == "REVELATION"
assert sum(len(v) for _, v in books) == 1189 and sum(sum(v) for _, v in books) == 31102

out = [
    "// 생성 파일 — 손으로 고치지 말 것. tools/bible/make_books.py",
    "// 출처: pythonbible 0.15.5 (MIT) 장·절 수. 성경 본문은 들어 있지 않다.",
    "",
    "/// (이름, 짧은 이름, 장마다 절 수)",
    "const kBookData = <(String, String, List<int>)>[",
]
for (name, short), (_, verses) in zip(NAMES, books):
    out.append(f"  ('{name}', '{short}', {list(verses)}),")
out.append("];")
dst = Path(__file__).resolve().parents[2] / "bible_app/flutter/lib/core/books_data.dart"
dst.parent.mkdir(parents=True, exist_ok=True)
dst.write_text("\n".join(out) + "\n")
print("wrote", dst)
