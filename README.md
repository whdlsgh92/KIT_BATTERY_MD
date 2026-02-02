# 이차전지 마이크로디그리(MD) 홍보 페이지 (GitHub Pages)

이 폴더는 **빌드 없이** 바로 GitHub Pages로 배포 가능한 단일 페이지 웹사이트입니다.

## 빠른 배포 방법

1) GitHub에서 새 Repository 생성  
- 예: `battery-microdegree-md`

2) 이 폴더의 파일을 저장소 **루트(root)**에 그대로 업로드  
- `index.html`
- `styles.css`
- `script.js`
- `assets/` (이미지 폴더)

3) GitHub Pages 켜기  
- 저장소 → **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: `main` / Folder: `/ (root)` 선택 → Save
- 잠시 후 배포 URL이 생성됩니다.

## 수정 포인트(필요 시)

- **문의처 문구/연락처**: `index.html`의 `#contact` 영역
- **사업단 홈페이지/인스타그램 링크**: `index.html` 상단 헤더 및 `#contact` 영역
- **색상/가독성(밝은 테마)**: `styles.css`의 `:root` 변수 및 배경 스타일

## 이미지

- `assets/guide_no_qr.jpg` : 한눈에 보기(QR 관련 표기 제거)
- `assets/og.svg` : 공유 미리보기(기본값)
- `assets/favicon.svg` : 파비콘
