# CommuKit

**连接 · 解析 · 转换** — 面向开发者的 macOS 网络通讯工作台。多协议调试工具，内置可编程消息解析器与工业物联网协议支持。

[官网](https://commukit.tyrival.com) · [下载](https://github.com/tyrival/CommuKit-Release/releases/latest/download/CommuKit.dmg)

#### 说明

[English](README.md) ｜ 中文 ｜ [日本語](README_ja.md) ｜ [한국어](README_ko.md) ｜ [Deutsch](README_de.md) ｜ [Français](README_fr.md) ｜ [Español](README_es.md)

## 概述

CommuKit 是一款原生 macOS 应用，将多协议网络客户端（TCP、UDP、MQTT、WebSocket）、可编程消息解析器、协议分析器与网络工具集整合于统一工作台。

**免费、无广告、Apple 原生体验。要求 macOS 14+。**

## 核心功能

### 多协议连接
通过原生协议支持连接任意终端。TCP/UDP 基于 Network 框架，MQTT 支持完整会话控制（QoS、Keep-Alive、自动订阅），WebSocket 支持自定义 Headers 与 SSL。支持 UTF-8、ASCII、GB2312、GBK、GB18030、Big5、Shift-JIS 编码。

### 可编程消息解析器
可视化消息解析器，内置 Parse、Filter、Compute、Compose、Algorithm、Mapping、Script 七种处理器。支持从 hex/JSON/XML/字符串中提取数据、条件过滤、JavaScript 表达式计算、输出结构化转换，提供逐步调试日志与中间数据快照。

### 协议解析器
自动识别并解析 MODBUS RTU/TCP 与 DL/T 645 报文。输入原始 hex 即可获得结构化字段解析：从站地址、功能码、寄存器值、CRC-16 校验。内置 MODBUS 读写帧构造功能。

### 网络工具集
7 合 1 工具套件：ICMP Ping、TCP 端口范围扫描（带进度）、WHOIS 域名查询、DNS 正反向解析、TLS 证书检查、交互式 Telnet 会话、IP 归属地查询。工具支持拖拽排序。

### 会话与工作区管理
按项目或环境对连接进行分组，自定义图标与颜色。每个连接可派生多个独立会话。连接、分组、标签页均支持拖拽排序。应用重启后完整保留所有状态，含自动备份。

### 数据处理工具
内置校验计算（CRC-16、Checksum、LRC）、压缩（GZIP、Deflate、Zlib）、加密（Base64、AES ECB/CBC 128/256 位）、Hex 与 Data 互转。配备专属等宽字体消息编辑器。

## 痛点与方案

| 痛点 | 解决方案 |
|---|---|
| 多协议工具碎片化，来回切换 | 一站式工作台 — 所有协议与工具集于一体 |
| 手动解析 hex 报文繁琐易出错 | 可视化消息解析器 — 一次定义规则，自动提取数值 |
| 通用工具不理解工业协议 | 内置协议解析器 — 自动识别 MODBUS 和 DL/T 645 |
| 网络工具散落各处 | 集成工具套件 — 侧边栏 7 合 1 |
| 重启后连接状态丢失 | 完整工作区持久化 — 多级自动备份 |
| 非 ASCII 编码（GB2312、Shift-JIS 等）乱码 | 8 种编码支持 — 每个连接独立切换 |

## 许可

CommuKit 为免费软件，保留所有权利。
