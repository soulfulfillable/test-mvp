# 스크린샷용 가짜 마이크 소리 (크롬 --use-file-for-fake-audio-capture). 녹음이 아니라 합성 잡음이다.
#   steady.wav : 진공청소기 같은 넓은 대역 잡음 (측정 화면용, 약 70 dBA 로 읽힘)
#   night.wav  : 조용한 방 → 위층 쿵쿵·음악 → 조용 (리포트 그래프용, 90초)
# 실행: python3 make_audio.py  (numpy 없이 표준 라이브러리만)
import math, random, struct, wave

RATE = 48000
random.seed(7)

def pink(n):
    # Paul Kellet 근사 핑크 노이즈
    b = [0.0] * 7
    out = []
    for _ in range(n):
        w = random.uniform(-1, 1)
        b[0] = 0.99886 * b[0] + w * 0.0555179
        b[1] = 0.99332 * b[1] + w * 0.0750759
        b[2] = 0.96900 * b[2] + w * 0.1538520
        b[3] = 0.86650 * b[3] + w * 0.3104856
        b[4] = 0.55000 * b[4] + w * 0.5329522
        b[5] = -0.7616 * b[5] - w * 0.0168980
        out.append((b[0] + b[1] + b[2] + b[3] + b[4] + b[5] + b[6] + w * 0.5362) * 0.11)
        b[6] = w * 0.115926
    return out

def gain_db(xs, db):
    g = 10 ** (db / 20)
    return [x * g for x in xs]

def write(path, xs):
    with wave.open(path, 'wb') as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(RATE)
        w.writeframes(b''.join(struct.pack('<h', max(-32768, min(32767, int(x * 32767)))) for x in xs))

# 측정 화면: 일정한 청소기 소리
write('steady.wav', gain_db(pink(RATE * 20), -8))

# 리포트: 조용(20s) → 쿵쿵+베이스 음악(40s) → 조용(30s)
quiet = gain_db(pink(RATE * 20), -46)
music = []
base = pink(RATE * 40)
for i, x in enumerate(base):
    t = i / RATE
    beat = 1.0 if (t % 0.5) < 0.09 else 0.0                       # 쿵 (발소리·베이스 킥)
    bass = 0.35 * math.sin(2 * math.pi * 55 * t) * (0.6 + 0.4 * math.sin(2 * math.pi * 0.25 * t))
    thump = beat * 0.5 * math.sin(2 * math.pi * 70 * t) * math.exp(-((t % 0.5) / 0.03))
    music.append(x * 0.08 + bass * 0.25 + thump + 0.12 * math.sin(2 * math.pi * 440 * t) * (0.5 + 0.5 * math.sin(2 * math.pi * 0.5 * t)))
music = gain_db(music, 2)
tail = gain_db(pink(RATE * 30), -44)
write('night.wav', quiet + music + tail)
print('ok')
