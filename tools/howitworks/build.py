"""How It Works 웹 미리보기 빌드: howitworks_app/lessons/NN-key.js 를 docs/how-it-works.html 의
/* LESSONS:BEGIN */ ~ /* LESSONS:END */ 사이에 번호 순으로 넣는다.
  python3 tools/howitworks/build.py                       # docs/how-it-works.html 갱신
  python3 tools/howitworks/build.py --only lock,pen --out /tmp/x.html   # 일부 레슨만 넣은 미리보기
"""
import argparse, glob, os, re, subprocess, sys
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
HTML = os.path.join(ROOT, 'docs', 'how-it-works.html')
ap = argparse.ArgumentParser(); ap.add_argument('--only'); ap.add_argument('--out', default=HTML)
a = ap.parse_args()
files = sorted(glob.glob(os.path.join(ROOT, 'howitworks_app', 'lessons', '[0-9][0-9]-*.js')))
if a.only:
    want = set(a.only.split(','))
    files = [f for f in files if re.sub(r'^\d\d-|\.js$', '', os.path.basename(f)) in want]
for f in files:  # 한 파일의 문법 오류가 페이지 전체를 죽이므로 먼저 검사
    r = subprocess.run(['node', '--check', f], capture_output=True, text=True)
    if r.returncode:
        sys.exit(f'문법 오류: {f}\n{r.stderr}')
body = '\n'.join(f'/* {os.path.basename(f)} */\n' + open(f).read().rstrip() for f in files)
src = open(HTML).read()
out = re.sub(r'/\* LESSONS:BEGIN \*/.*?/\* LESSONS:END \*/', lambda m: '/* LESSONS:BEGIN */\n' + body + '\n/* LESSONS:END */', src, flags=re.S)
open(a.out, 'w').write(out)
print(f'{len(files)} lessons -> {a.out}')
