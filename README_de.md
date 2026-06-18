# CommuKit

**Verbinden · Parsen · Transformieren** — Eine Netzwerk-Kommunikations-Workbench für Entwickler unter macOS. Multi-Protokoll-Debugging mit einem programmierbaren Nachrichten-Parser und industrieller IoT-Protokollunterstützung.

[Website](https://commukit.tyrival.com) · [Download](https://github.com/tyrival/CommuKit-Release/releases/latest/download/CommuKit.dmg)

#### Erklärung

[English](README.md) ｜ [中文](README_zh.md) ｜ [日本語](README_ja.md) ｜ [한국어](README_ko.md) ｜ Deutsch ｜ [Français](README_fr.md) ｜ [Español](README_es.md)

## Überblick

CommuKit ist eine native macOS-Anwendung, die einen Multi-Protokoll-Netzwerkclient (TCP, UDP, MQTT, WebSocket), einen programmierbaren Nachrichten-Parser, einen Protokollanalysator und eine Netzwerk-Tool-Suite in einer einheitlichen Workbench vereint.

**Kostenlos. Keine Werbung. Native Apple-Erfahrung. Erfordert macOS 14+.**

## Funktionen

### Multi-Protokoll-Verbindung
Verbinden Sie sich mit nativer Protokollunterstützung mit beliebigen Endpunkten. TCP/UDP über das Network-Framework, MQTT mit vollständiger Sitzungssteuerung (QoS, Keep-Alive, Auto-Abonnement), WebSocket mit benutzerdefinierten Headern und SSL. Unterstützt UTF-8, ASCII, GB2312, GBK, GB18030, Big5 und Shift-JIS.

### Programmierbarer Nachrichten-Parser
Ein visueller Nachrichten-Parser mit 7 Handler-Typen: Parse, Filter, Compute, Compose, Algorithm, Mapping und Script. Extrahieren Sie Werte aus Hex/JSON/XML/Zeichenketten, filtern Sie nach Bedingungen, berechnen Sie mit JavaScript-Ausdrücken und transformieren Sie in strukturierte Ausgabe — alles mit schrittweisen Debug-Logs und Zwischen-Datenschnappschüssen.

### Protokollanalysator
Automatische Erkennung und Analyse von MODBUS RTU/TCP und DL/T 645 Frames. Eingabe von rohem Hex liefert strukturierte Feldanalysen: Slave-Adresse, Funktionscode, Registerwerte, CRC-16-Überprüfung. Integrierte MODBUS-Frame-Konstruktion für Lese-/Schreiboperationen.

### Netzwerk-Tool-Suite
7 essentielle Tools an einem Ort: ICMP-Ping, TCP-Portbereich-Scan mit Fortschrittsanzeige, WHOIS-Domain-Abfrage, DNS-Vorwärts-/Rückwärtsabfragen, TLS-Zertifikatprüfung, interaktive Telnet-Sitzungen und IP-Geolokalisierung. Tools sind per Drag-and-Drop umsortierbar.

### Sitzungs- und Arbeitsbereichsverwaltung
Verbindungen in Gruppen mit benutzerdefinierten Icons und Farben organisieren. Jede Verbindung kann mehrere unabhängige Sitzungen erzeugen. Drag-and-Drop-Neusortierung für Verbindungen, Gruppen und Tabs. Vollständige Zustandspersistenz mit automatischen Backups.

### Datenverarbeitungs-Dienstprogramme
Integrierte Prüfsummenberechnung (CRC-16, Checksum, LRC), Kompression (GZIP, Deflate, Zlib), Verschlüsselung (Base64, AES ECB/CBC 128/256-Bit) und Hex-Daten-Konvertierung. Dedizierter Nachrichten-Editor mit Monospace-Schriftart.

## Probleme & Lösungen

| Problem | Lösung |
|---|---|
| Tool-Fragmentierung über Protokolle hinweg | All-in-One-Workbench — alle Protokolle und Tools in einer App |
| Manuelles Hex-Parsen ist mühsam und fehleranfällig | Visueller Nachrichten-Parser — einmal Regeln definieren, automatisch Werte extrahieren |
| Generische Tools verstehen keine Industrieprotokolle | Integrierter Protokollanalysator — automatische Erkennung von MODBUS und DL/T 645 |
| Netzwerk-Dienstprogramme über verschiedene Apps verstreut | Integrierte Tool-Suite — 7 Tools in der Seitenleiste |
| Verbindungszustand geht beim Neustart verloren | Vollständige Arbeitsbereich-Persistenz — automatische Multi-Tier-Backups |
| Kodierungsprobleme mit Nicht-ASCII-Nutzdaten (GB2312, Shift-JIS usw.) | 8 Kodierungsunterstützung — pro Verbindung umschaltbar |

## Lizenz

CommuKit ist freie Software. Alle Rechte vorbehalten.
