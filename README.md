# 송쌤과학 AI 보이스 스튜디오

글(대본)을 넣으면 **브라우저 안에서** AI 목소리 음원을 만들어 바로 저장하는 교사 도구예요. 글과 소리는 이 기기 밖으로 나가지 않아요.

## 여는 방법
- 맥: `AI 보이스 스튜디오 실행.command` 를 두 번 누르기 → 브라우저에 `http://127.0.0.1:8874/` 이 열려요.
- 윈도우: `AI 보이스 스튜디오 실행 (윈도우).bat` (파이썬 3 필요).
- `index.html` 을 바로 두 번 눌러 열면 동작하지 않아요(음성 엔진이 웹 워커 · WASM 이라 http:// 로 열어야 해요).

## 목소리
| 묶음 | 개수 | 조건 |
|---|---|---|
| **송쌤과학 목소리** (남성 7~17 · 여성 7~18) | 23 | 직접 학습한 가상 목소리 · **상업 수업 · 유료 연수에도 사용 가능** · 지금 학습 중 — 학습이 나아질 때마다 새 판을 올리고, 목록에 「학습 중 · ○번째 바퀴」로 표시해요 |
| **Supertonic 3** (남성 1~6 · 여성 1~6) | 12 | Supertone OpenRAIL-M · 처음 쓸 때 사용 조건 동의 · AI 음성 고지 필수 |

- 처음 한 번 모델을 받아요: 송쌤과학 약 80 MB(이 폴더 `models/`), Supertonic 3 약 260 MB(Hugging Face). 받은 뒤에는 인터넷 없이도 돼요.
- 숫자 · 단위 · 로마자(25℃, 1.5 V, DNA)는 한글 읽기로 바꿔 읽어요(송쌤과학 목소리 = 모아컷 `kog2p.ts`).

## 쓰는 법
1. 왼쪽 레일에서 목소리 묶음(숫자 1~8), 설정 칸에서 목소리(▶ 미리 듣기).
2. 무대에 대본 — 줄마다 한 사람. 줄을 누른 뒤 목소리를 고르면 그 줄 목소리가 바뀌어요. 여러 줄 글을 붙여 넣으면 문단마다 줄이 나뉘어요.
   - 순서 바꾸기: 줄 왼쪽 번호를 끌거나 ▲▼ 단추 · Alt+↑↓ (Ctrl+Z로 되돌리기).
3. **만들고 저장**(Ctrl+S · Ctrl+Enter) → 두 줄 이상이면 **하나로 합치기**(파일 1개) / **줄마다 따로**(줄마다 MP3 하나씩 · `이름_01_첫 글자.mp3` …)를 고르는 창이 떠요. 따로 만들 때는 ZIP 하나로 묶어 받을 수도 있어요. 자막(SRT)을 고르면 ZIP으로 받아요.
4. 아래 **완료 목록**에서 파일마다 듣기 · 내려받기 · X(목록에서 지우기 — 내려받은 파일은 그대로)를 할 수 있어요.

## 만든 방식(고칠 사람용)
- 작업 폴더 `~/Projects/voice-studio`(Vite + TypeScript, 화면은 순수 DOM). 이 OneDrive 폴더는 `tools/sync-to-onedrive.sh` 로 덮어쓰는 사본이에요 — 여기서 고치지 마세요.
- 목소리 엔진은 **모아컷 소스를 그대로 가져다 써요**(`vite.config.ts` 의 `@moacut` = 기본 `~/Projects/moacut/src`): `app/ttsEngine`(Supertonic 3) · `app/vitsEngine` + `engine/tts/vitsWorker`(송쌤과학 목소리) · `engine/tts/kog2p.ts`(발음 변환기) · `engine/tts/songsam.ts`(목소리 표). 그래서 빌드에는 모아컷 폴더가 필요해요. 타입 검사는 `npm run build` 가 `tsc` 대신 `node tools/tsc.mjs` 로 해요(모아컷 경로를 맞춘 tsconfig 를 `node_modules/.cache/` 에 만들어 검사 — git 에 안 들어감).
- 화면: 「송쌤과학_도구사이트_디자인시스템_V1.1」 시작 틀 A(작업대형) CSS 를 `src/shell.css` 로 그대로 쓰고 색 토큰만 베리(자주 335°)로 바꿨어요. 대비 검사 가장 낮은 값 4.55(밝은 보조 글) · 5.16(어두운 흰 글자 단추). 앱 부품은 `src/style.css`(토큰만 사용).
- 송쌤과학 모델 넣기: `~/Projects/moacut-voice-lab` 에서 `venv/bin/python -I lab/v4_finalize.py <ckpt> --rev <판> --install` → 스튜디오 · 모아컷 `public/models`(songsam_ko.onnx · .json) · `public/voices/ss-*.mp3` + 모델 목록 `~/Projects/moacut/src/engine/tts/songsamModel.json`(두 앱이 함께 읽음, 비면 「준비 중」).
- 빌드: `npm run build` → `dist/`(GitHub Pages) → `sh tools/sync-to-onedrive.sh`. `public/models/` · `public/voices/ss-*.mp3`(송쌤과학 목소리)는 git 에 없으니 빌드한 곳에 있어야 해요.
  - UI 를 고치면 `npm run build` 와 `npm run build:hq` 를 둘 다 돌린다(설치판 빌드 — 자세한 것은 이 저장소의 `HQ.md`, 공개 안 함).
- 개발 서버: 상위 `.claude/launch.json` 의 `voice-studio`(8890) · `voice-studio-dist`(8891).

## 라이선스 · 출처
- 송쌤과학 목소리: 자체 학습 모델. 바탕 체크포인트 Piper `libritts_r/medium`(LibriTTS-R, CC BY 4.0, Koizumi et al. 2023) · 학습 재료 목소리 Qwen3-TTS(Alibaba Qwen, Apache-2.0) · 읽힌 문장은 직접 지은 글.
- Supertonic 3: Supertone Inc.(모델 BigScience OpenRAIL-M · 코드 MIT).
- onnxruntime-web(MIT) · fflate(MIT) · lamejs(@breezystack/lamejs, LGPL-3.0 — `dist/assets/lamejs-*.js` 따로 떨어진 파일) · Pretendard(SIL OFL 1.1) · Lucide(ISC).
- © 2026 송쌤과학
