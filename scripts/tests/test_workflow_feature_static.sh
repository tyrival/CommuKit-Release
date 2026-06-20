#!/bin/bash

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
APP="$ROOT/src/App.tsx"
MOCKUP="$ROOT/src/components/AppMockup.tsx"
FEATURE="$ROOT/src/components/FeatureSection.tsx"
TRANSLATIONS="$ROOT/src/i18n/translations.ts"

rg -q "type FeatureKey = .*'pipeline'.*'workflow'.*'analyzer'" "$FEATURE"
rg -q 'id="pipeline"' "$APP"
rg -q 'id="workflow"' "$APP"
rg -q 'id="analyzer"' "$APP"

app_order="$(rg -n 'id="(pipeline|workflow|analyzer)"' "$APP" | sed 's/:.*id="/:/' | sed 's/".*//')"
expected_order=$'pipeline\nworkflow\nanalyzer'
actual_order="$(printf '%s\n' "$app_order" | cut -d: -f2)"
test "$actual_order" = "$expected_order"

rg -q "variant: Variant" "$MOCKUP"
rg -q "case 'workflow': return <WorkflowMockup />" "$MOCKUP"
test "$(rg -c '^    workflow: \{' "$TRANSLATIONS")" -eq 7

for title in \
  '7 Pain Points' \
  '7 个痛点' \
  '7つの課題' \
  '7가지 문제점' \
  '7 Probleme' \
  '7 problèmes' \
  '7 problemas'
do
  rg -Fq "title: '$title'" "$TRANSLATIONS"
done

for solution in \
  'Automated Communication Workflows' \
  '自动化通讯工作流' \
  '通信ワークフローの自動化' \
  '자동화된 통신 워크플로' \
  'Automatisierte Kommunikations-Workflows' \
  'Workflows de communication automatisés' \
  'Flujos de comunicación automatizados'
do
  rg -Fq "solution: '$solution'" "$TRANSLATIONS"
done

rg -q "cta: .*desc: '.*communication workflows" "$TRANSLATIONS"
rg -q "cta: .*desc: '.*通讯工作流" "$TRANSLATIONS"
rg -q "cta: .*desc: '.*通信ワークフロー" "$TRANSLATIONS"
rg -q "cta: .*desc: '.*통신 워크플로" "$TRANSLATIONS"
rg -q "cta: .*desc: '.*Kommunikations-Workflows" "$TRANSLATIONS"
rg -q "cta: .*desc: '.*workflows de communication" "$TRANSLATIONS"
rg -q "cta: .*desc: '.*flujos de comunicación" "$TRANSLATIONS"

for label in \
  'Automatic Protocol Detection' \
  '协议自动识别' \
  'プロトコル自動識別' \
  '프로토콜 자동 인식' \
  'Automatische Protokollerkennung' \
  'Détection automatique de protocole' \
  'Detección automática de protocolos'
do
  rg -Fq "title: '$label'" "$TRANSLATIONS"
  rg -Fq "solution: '$label'" "$TRANSLATIONS"
done

echo "workflow feature static contract passed"
