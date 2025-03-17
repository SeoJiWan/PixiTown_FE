# PixiTown 프로젝트 요구사항 정의서 (PRD)

## 1. 프로젝트 기획 & 기술 스택 선정

### 기능 정의

#### 핵심 기능
- 맵(월드) 편집 기능
- 아바타 이동 & 상호작용
- 실시간 채팅 및 음성 대화 (WebRTC)
- 멀티플레이어 동기화 (Socket.io / WebSockets)
- 인증 시스템 (JWT / OAuth)

### 기술 스택 선정

#### 프론트엔드
- Vue.js + Pixi.js
  - Vue 3 기반의 모던 웹 애플리케이션
  - Pixi.js를 활용한 2D 그래픽 렌더링

#### 백엔드
- Java + Spring Boot + WebSockets
  - 안정적인 서버 구현
  - 실시간 양방향 통신 지원

#### 데이터베이스
- MySQL + Redis
  - MySQL: 영구 데이터 저장
  - Redis: 실시간 데이터 캐싱

#### 실시간 통신
- WebRTC + STUN/TURN 서버
  - P2P 기반 음성/화상 통신
  - NAT 통과를 위한 STUN/TURN 서버 구성

#### 배포 환경
- AWS EC2 + Docker + Nginx
  - 클라우드 기반 확장 가능한 인프라
  - 컨테이너화를 통한 배포 자동화
  - Nginx를 통한 로드 밸런싱

## 2. 환경 세팅 및 기본 구조 구성

### 백엔드 (Spring Boot) 설정
- Spring Boot 프로젝트 생성 (Gradle 기반)
- 필수 의존성 추가
  - Spring Web, Security, Data JPA
  - WebSocket, Redis
  - MySQL Connector, Lombok
- REST API 기본 구조 설계

### 프론트엔드 (Vue.js) 설정
- Vite + Vue 3 + Pinia 상태 관리
- Pixi.js 통합
- Vue Router 설정

### DB 설계
- 유저, 맵(월드), 오브젝트, 채팅 테이블 설계
- Redis를 활용한 실시간 데이터 캐싱 구조

### 실시간 통신 기본 구현
- WebSocket을 이용한 기본 메시징 기능
- WebRTC 기반 오디오/비디오 테스트

## 3. 핵심 기능 구현

### 인증 & 권한 관리
- JWT 기반 로그인 & 세션 관리
- OAuth (구글, 카카오 로그인) 지원
- 프로필 설정 (아바타, 닉네임 등)
- 접속 상태 표시 (온라인/오프라인)

### 아바타 이동 & 동기화
- 사용자 위치 상태 관리 (Redis 사용)
- WebSocket을 통한 클라이언트간 위치 동기화

### 맵(월드) 시스템
- Pixi.js를 활용한 2D 맵 렌더링
- 맵 에디터 기능
- 캐릭터 이동 및 충돌 감지
- 오브젝트 상호작용

### 실시간 상호작용
- WebSocket 기반 채팅 구현
- WebRTC 연결을 통한 음성/화상 통신
- 특정 구역 내 사용자 감지 및 자동 참여
- 오브젝트 상호작용 시스템

### 서버 및 데이터 관리
- WebSocket 실시간 데이터 동기화
- Redis 캐싱 시스템
- 방(Room) 개념 도입
- 데이터 저장 및 로깅

## 4. 배포 전략

### 백엔드 배포
- Docker 컨테이너화
- AWS EC2 인스턴스 활용
- Nginx 로드 밸런싱

### 프론트엔드 배포
- Vite 빌드 최적화
- Nginx 정적 파일 서빙
- CDN 활용

## 5. 최적화 전략

### 프론트엔드 최적화
- Pixi.js 렌더링 최적화
  - 스프라이트 시트 사용
  - GPU 가속 활성화
  - OffscreenCanvas 활용
- Vue.js 성능 최적화
  - Composition API 활용
  - 가상 리스트 적용
  - 코드 분할
- 네트워크 최적화
  - CDN 활용
  - Gzip/Brotli 압축

### 백엔드 최적화
- WebSocket 성능 최적화
  - Netty 기반 구현
  - Redis Pub/Sub 활용
- Spring Boot 최적화
  - 비동기 처리
  - Connection Pool 최적화
- 캐싱 및 데이터 최적화
  - Redis 캐싱 전략
  - 쿼리 최적화

### 서버 인프라 최적화
- 로드 밸런싱
- 수평 확장 구조
- 모니터링 시스템 구축

## 6. 프로젝트 일정

| 주차 | 주요 작업 |
|------|-----------|
| 1주차 | 프로젝트 설계 및 기술 검토 |
| 2~3주차 | 기본 UI 개발 및 Pixi.js 맵 구현 |
| 4~5주차 | 캐릭터 이동 및 충돌 처리 |
| 6~7주차 | 채팅 및 WebSocket 서버 연동 |
| 8~9주차 | Redis 연동 및 최적화 |
| 10~11주차 | 배포 환경 구성 및 최적화 |
| 12주차 | 테스트 및 성능 최적화 |

## 7. 기대효과

- Vue.js + Pixi.js를 활용한 메타버스 개발 경험
- WebSocket + Redis를 활용한 실시간 데이터 처리 학습
- 배포 및 서버 부하 분산 경험 습득
- ZEP과 유사한 플랫폼 개발 경험 강화 