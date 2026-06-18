# CommuKit

**Connect. Parse. Transform.** — A developer's network communication workbench for macOS. Multi-protocol debugging with a programmable message parser and industrial IoT protocol support.

[Website](https://commukit.tyrival.com) · [Download](https://github.com/tyrival/CommuKit-Release/releases/latest/download/CommuKit.dmg)

#### Explanation

English ｜ [中文](README_zh.md) ｜ [日本語](README_ja.md) ｜ [한국어](README_ko.md) ｜ [Deutsch](README_de.md) ｜ [Français](README_fr.md) ｜ [Español](README_es.md)

## Overview

CommuKit is a native macOS application that combines a multi-protocol network client (TCP, UDP, MQTT, WebSocket), a programmable message parser, a protocol analyzer, and a network tool suite — all in one unified workbench.

**Free. No ads. Native Apple experience. Requires macOS 14+.**

## Features

### Multi-Protocol Connection
Connect to any endpoint with native protocol support. TCP/UDP via Network framework, MQTT with full session control (QoS, keep-alive, auto-subscribe), WebSocket with custom headers and SSL. Supports UTF-8, ASCII, GB2312, GBK, GB18030, Big5, and Shift-JIS encodings.

### Programmable Message Parser
A visual message parser with 7 handler types: Parse, Filter, Compute, Compose, Algorithm, Mapping, and Script. Extract values from hex/JSON/XML/string, filter by conditions, compute with JavaScript expressions, and transform into structured output — all with step-by-step debug logs and intermediate data snapshots.

### Protocol Analyzer
Auto-detect and dissect MODBUS RTU/TCP and DL/T 645 frames. Point it at raw hex and get structured field breakdowns: slave address, function code, register values, CRC-16 verification. Built-in MODBUS frame construction for read/write operations.

### Network Tool Suite
7 essential tools in one place: ICMP Ping, TCP port range scanning with progress, WHOIS domain lookup, DNS forward/reverse queries, TLS certificate inspection, interactive Telnet sessions, and IP geolocation. Tools are reorderable via drag-and-drop.

### Session & Workspace Management
Organize connections into groups with custom icons and colors. Each connection can spawn multiple independent sessions. Drag-and-drop reorder for connections, groups, and tabs. Full state persistence across app restarts with automatic backups.

### Data Processing Utilities
Built-in checksum calculation (CRC-16, Checksum, LRC), compression (GZIP, Deflate, Zlib), encryption (Base64, AES ECB/CBC 128/256-bit), and hex-to-data conversion. Dedicated message editor with monospace font.

## Pain Points & Solutions

| Pain Point | Solution |
|---|---|
| Tool fragmentation across protocols | All-in-One Workbench — all protocols and tools in one app |
| Manual hex parsing is tedious and error-prone | Visual Message Parser — define rules once, auto-extract values |
| Generic tools don't understand industrial protocols | Built-in Protocol Analyzer — auto-detect MODBUS and DL/T 645 |
| Network utilities scattered across different apps | Integrated Tool Suite — 7 tools in the sidebar |
| Lost connection state on restart | Full Workspace Persistence — automatic multi-tier backups |
| Encoding issues with non-ASCII payloads (GB2312, Shift-JIS, etc.) | 8 Encoding Support — switch per connection |

## License

CommuKit is free software. All rights reserved.
