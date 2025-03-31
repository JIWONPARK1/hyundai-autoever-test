# FAQ/문의사항 관리 시스템

Next.js 15와 MSW를 활용한 FAQ 페이지(https://wiblebiz.kia.com/FAQ) 클론 과제 테스트입니다.

## 주요 기능

- 서비스 도입/이용 관련 FAQ 조회
- 카테고리별 FAQ 필터링
- 검색 기능
- 무한 스크롤
- MSW를 활용한 API 모킹

## 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Emotion
- **API Mocking**: MSW 2.7.3
- **Font**: Kia Signature Fix

## 프로젝트 구조

````
src/
├── app/                 # Next.js App Router
│   ├── faq/             # FAQ 관련 페이지
├── components/          # 재사용 가능한 컴포넌트
│   ├── Category/        # 카테고리 선택 컴포넌트
│   ├── Header/          # 헤더 컴포넌트
│   ├── Footer/          # 푸터 컴포넌트
│   ├── SearchInput/     # 검색 입력 컴포넌트
│   └── TopButton/       # 상단 이동 버튼 컴포넌트
├── hooks/               # 커스텀 훅
├── mocks/               # MSW 모킹 설정
└── types/               # TypeScript 타입 정의

## 시작하기

1. 의존성 설치

```bash
npm install
````

2. 개발 서버 실행

```bash
npm run dev
```

3. 브라우저에서 확인
   [http://localhost:3000](http://localhost:3000)

## 환경 변수 설정

`.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_API_MOCKING=enabled
```

## API 모킹

MSW를 사용하여 API를 모킹하고 있습니다.

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
