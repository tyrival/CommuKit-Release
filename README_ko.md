# CommuKit

**연결 · 파싱 · 변환** — 개발자를 위한 macOS 네트워크 통신 워크벤치. 프로그래머블 메시지 파서와 산업용 IoT 프로토콜 지원을 갖춘 멀티 프로토콜 디버깅 도구.

[웹사이트](https://commukit.tyrival.com) · [다운로드](https://github.com/tyrival/CommuKit-Release/releases/latest/download/CommuKit.dmg)

#### 설명

[English](README.md) ｜ [中文](README_zh.md) ｜ [日本語](README_ja.md) ｜ 한국어 ｜ [Deutsch](README_de.md) ｜ [Français](README_fr.md) ｜ [Español](README_es.md)

## 개요

CommuKit은 멀티 프로토콜 네트워크 클라이언트(TCP, UDP, MQTT, WebSocket), 프로그래머블 메시지 파서, 프로토콜 분석기, 네트워크 도구 모음을 하나의 워크벤치에 통합한 macOS 네이티브 애플리케이션입니다.

**무료. 광고 없음. Apple 네이티브 경험. macOS 14+ 필요.**

## 주요 기능

### 멀티 프로토콜 연결
네이티브 프로토콜 지원으로 모든 엔드포인트에 연결. Network 프레임워크 기반 TCP/UDP, 전체 세션 제어(QoS, Keep-Alive, 자동 구독)가 가능한 MQTT, 사용자 정의 헤더와 SSL을 지원하는 WebSocket. UTF-8, ASCII, GB2312, GBK, GB18030, Big5, Shift-JIS 인코딩 지원.

### 프로그래머블 메시지 파서
Parse, Filter, Compute, Compose, Algorithm, Mapping, Script의 7가지 핸들러를 갖춘 비주얼 메시지 파서. hex/JSON/XML/문자열에서 값을 추출하고, 조건으로 필터링하며, JavaScript 표현식으로 계산하고, 구조화된 출력으로 변환합니다. 단계별 디버그 로그와 중간 데이터 스냅샷을 제공합니다.

### 프로토콜 분석기
MODBUS RTU/TCP 및 DL/T 645 프레임의 자동 감지 및 분석. 원시 hex를 입력하면 슬레이브 주소, 기능 코드, 레지스터 값, CRC-16 검증 등의 구조화된 필드 분석을 얻을 수 있습니다. 읽기/쓰기 작업을 위한 MODBUS 프레임 구성 기능 내장.

### 네트워크 도구 모음
7가지 필수 도구를 한 곳에: ICMP Ping, 진행률 표시가 있는 TCP 포트 범위 스캔, WHOIS 도메인 조회, DNS 정방향/역방향 쿼리, TLS 인증서 검사, 대화형 Telnet 세션, IP 위치 정보. 도구는 드래그 앤 드롭으로 재정렬 가능.

### 세션 및 워크스페이스 관리
사용자 정의 아이콘과 색상으로 연결을 그룹화. 각 연결은 여러 독립 세션을 생성 가능. 연결, 그룹, 탭의 드래그 앤 드롭 재정렬. 앱 재시작 후에도 완전한 상태 유지 및 자동 백업.

### 데이터 처리 유틸리티
체크섬 계산(CRC-16, Checksum, LRC), 압축(GZIP, Deflate, Zlib), 암호화(Base64, AES ECB/CBC 128/256비트), Hex-데이터 상호 변환을 내장. 고정폭 글꼴 전용 메시지 편집기 제공.

## 문제점 및 해결책

| 문제점 | 해결책 |
|---|---|
| 프로토콜마다 다른 도구 필요 | 올인원 워크벤치 — 모든 프로토콜과 도구를 하나로 |
| 수동 hex 파싱이 번거롭고 오류 발생 | 비주얼 메시지 파서 — 규칙 한 번 정의로 자동 추출 |
| 범용 도구가 산업용 프로토콜을 이해하지 못함 | 내장 프로토콜 분석기 — MODBUS 및 DL/T 645 자동 감지 |
| 네트워크 유틸리티가 여기저기 흩어짐 | 통합 도구 모음 — 사이드바에 7가지 도구 |
| 재시작 시 연결 상태 손실 | 완전한 워크스페이스 지속성 — 다중 계층 자동 백업 |
| 비ASCII 인코딩(GB2312, Shift-JIS 등) 깨짐 | 8가지 인코딩 지원 — 연결별로 전환 |

## 라이선스

CommuKit은 무료 소프트웨어입니다. All rights reserved.
