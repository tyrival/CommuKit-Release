# CommuKit

**Conectar · Analizar · Transformar** — Un workbench de comunicación de red para desarrolladores en macOS. Depuración multiprotocolo con un parser de mensajes programable y soporte para protocolos IoT industriales.

[Sitio web](https://commukit.tyrival.com) · [Descargar](https://github.com/tyrival/CommuKit-Release/releases/latest/download/CommuKit.dmg)

#### Explicación

[English](README.md) ｜ [中文](README_zh.md) ｜ [日本語](README_ja.md) ｜ [한국어](README_ko.md) ｜ [Deutsch](README_de.md) ｜ [Français](README_fr.md) ｜ Español

## Descripción general

CommuKit es una aplicación macOS nativa que combina un cliente de red multiprotocolo (TCP, UDP, MQTT, WebSocket), un parser de mensajes programable, un analizador de protocolos y una suite de herramientas de red en un workbench unificado.

**Gratis. Sin anuncios. Experiencia nativa Apple. Requiere macOS 14+.**

## Funciones

### Conexión multiprotocolo
Conéctese a cualquier endpoint con soporte de protocolo nativo. TCP/UDP mediante el framework Network, MQTT con control completo de sesión (QoS, keep-alive, suscripción automática), WebSocket con cabeceras personalizadas y SSL. Soporta codificaciones UTF-8, ASCII, GB2312, GBK, GB18030, Big5 y Shift-JIS.

### Parser de mensajes programable
Un parser visual de mensajes con 7 tipos de manejadores: Parse, Filter, Compute, Compose, Algorithm, Mapping y Script. Extraiga valores de hex/JSON/XML/cadena, filtre por condiciones, calcule con expresiones JavaScript y transforme en salida estructurada — todo con registros de depuración paso a paso e instantáneas de datos intermedios.

### Analizador de protocolos
Detección y análisis automático de tramas MODBUS RTU/TCP y DL/T 645. Ingrese hex sin procesar y obtenga desgloses de campo estructurados: dirección esclavo, código de función, valores de registro, verificación CRC-16. Construcción de tramas MODBUS integrada para operaciones de lectura/escritura.

### Suite de herramientas de red
7 herramientas esenciales en un solo lugar: Ping ICMP, escaneo de rango de puertos TCP con progreso, consulta WHOIS, consultas DNS directas/inversas, inspección de certificados TLS, sesiones Telnet interactivas y geolocalización IP. Herramientas reordenables mediante arrastrar y soltar.

### Gestión de sesiones y espacio de trabajo
Organice conexiones en grupos con iconos y colores personalizados. Cada conexión puede generar múltiples sesiones independientes. Reordenamiento por arrastrar y soltar para conexiones, grupos y pestañas. Persistencia completa del estado con copias de seguridad automáticas.

### Utilidades de procesamiento de datos
Cálculo de checksum integrado (CRC-16, Checksum, LRC), compresión (GZIP, Deflate, Zlib), cifrado (Base64, AES ECB/CBC 128/256 bits) y conversión hex-datos. Editor de mensajes dedicado con fuente monoespaciada.

## Problemas y soluciones

| Problema | Solución |
|---|---|
| Fragmentación de herramientas entre protocolos | Workbench todo en uno — todos los protocolos y herramientas en una app |
| El análisis hex manual es tedioso y propenso a errores | Parser visual de mensajes — defina reglas una vez, extracción automática |
| Las herramientas genéricas no entienden los protocolos industriales | Analizador de protocolos integrado — detección automática MODBUS y DL/T 645 |
| Utilidades de red dispersas en diferentes aplicaciones | Suite de herramientas integrada — 7 herramientas en la barra lateral |
| Pérdida del estado de conexión al reiniciar | Persistencia completa del espacio de trabajo — copias de seguridad automáticas multinivel |
| Problemas de codificación con datos no ASCII (GB2312, Shift-JIS, etc.) | Soporte para 8 codificaciones — intercambiable por conexión |

## Licencia

CommuKit es software gratuito. Todos los derechos reservados.
