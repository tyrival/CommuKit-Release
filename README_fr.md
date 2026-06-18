# CommuKit

**Connecter · Parser · Transformer** — Un workbench de communication réseau pour développeurs sous macOS. Débogage multi-protocole avec un analyseur de messages programmable et le support des protocoles IoT industriels.

[Site web](https://commukit.tyrival.com) · [Télécharger](https://github.com/tyrival/CommuKit-Release/releases/latest/download/CommuKit.dmg)

#### Explication

[English](README.md) ｜ [中文](README_zh.md) ｜ [日本語](README_ja.md) ｜ [한국어](README_ko.md) ｜ [Deutsch](README_de.md) ｜ Français ｜ [Español](README_es.md)

## Aperçu

CommuKit est une application macOS native qui combine un client réseau multi-protocole (TCP, UDP, MQTT, WebSocket), un analyseur de messages programmable, un analyseur de protocole et une suite d'outils réseau dans un workbench unifié.

**Gratuit. Sans pub. Expérience Apple native. Nécessite macOS 14+.**

## Fonctionnalités

### Connexion multi-protocole
Connectez-vous à n'importe quel endpoint avec un support de protocole natif. TCP/UDP via le framework Network, MQTT avec contrôle de session complet (QoS, keep-alive, abonnement automatique), WebSocket avec en-têtes personnalisés et SSL. Prend en charge les encodages UTF-8, ASCII, GB2312, GBK, GB18030, Big5 et Shift-JIS.

### Analyseur de messages programmable
Un analyseur visuel de messages avec 7 types de gestionnaires : Parse, Filter, Compute, Compose, Algorithm, Mapping et Script. Extrayez des valeurs depuis hex/JSON/XML/chaîne, filtrez par conditions, calculez avec des expressions JavaScript et transformez en sortie structurée — le tout avec des journaux de débogage étape par étape et des instantanés de données intermédiaires.

### Analyseur de protocole
Détection et analyse automatiques des trames MODBUS RTU/TCP et DL/T 645. Entrez de l'hex brut et obtenez des analyses de champs structurées : adresse esclave, code fonction, valeurs de registre, vérification CRC-16. Construction de trames MODBUS intégrée pour les opérations de lecture/écriture.

### Suite d'outils réseau
7 outils essentiels en un seul endroit : Ping ICMP, scan de plage de ports TCP avec progression, recherche WHOIS, requêtes DNS directes/inverses, inspection de certificats TLS, sessions Telnet interactives et géolocalisation IP. Outils réorganisables par glisser-déposer.

### Gestion des sessions et de l'espace de travail
Organisez les connexions en groupes avec des icônes et couleurs personnalisées. Chaque connexion peut générer plusieurs sessions indépendantes. Réorganisation par glisser-déposer des connexions, groupes et onglets. Persistance complète de l'état avec sauvegardes automatiques.

### Utilitaires de traitement de données
Calcul de somme de contrôle intégré (CRC-16, Checksum, LRC), compression (GZIP, Deflate, Zlib), chiffrement (Base64, AES ECB/CBC 128/256 bits) et conversion hex-données. Éditeur de messages dédié avec police monospace.

## Problèmes et solutions

| Problème | Solution |
|---|---|
| Fragmentation des outils entre protocoles | Workbench tout-en-un — tous les protocoles et outils dans une seule app |
| Analyse hex manuelle fastidieuse et source d'erreurs | Analyseur visuel de messages — définir les règles une fois, extraction automatique |
| Les outils génériques ne comprennent pas les protocoles industriels | Analyseur de protocole intégré — détection automatique MODBUS et DL/T 645 |
| Utilitaires réseau dispersés dans différentes apps | Suite d'outils intégrée — 7 outils dans la barre latérale |
| Perte de l'état de connexion au redémarrage | Persistance complète de l'espace de travail — sauvegardes automatiques multi-niveaux |
| Problèmes d'encodage avec les données non-ASCII (GB2312, Shift-JIS, etc.) | Support de 8 encodages — commutable par connexion |

## Licence

CommuKit est un logiciel gratuit. Tous droits réservés.
