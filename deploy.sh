#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

LOG_DIR="logs"
mkdir -p "$LOG_DIR"

TS="$(date +%Y-%m-%d_%H-%M-%S)"
LOG_FILE="$LOG_DIR/deploy-$TS.log"
LATEST="$LOG_DIR/deploy-latest.log"

# зеркалим всё (stdout + stderr) в файл и в терминал
exec > >(tee -a "$LOG_FILE") 2>&1

trap 'echo ""; echo "=== $(date -Iseconds) FAILED (exit=$?) ==="' ERR

echo "=== $(date -Iseconds) deploy start ==="
echo "branch: $(git rev-parse --abbrev-ref HEAD)"
echo "commit before: $(git rev-parse --short HEAD)"

echo "--- git pull ---"
git pull

echo "commit after: $(git rev-parse --short HEAD)"

echo "--- npm run build ---"
npm run build

echo "--- pm2 restart airnet ---"
pm2 restart airnet

BUILD_ID="$(cat .next/BUILD_ID 2>/dev/null || echo unknown)"
echo "buildId: $BUILD_ID"

echo "--- pm2 list ---"
pm2 list

echo "=== $(date -Iseconds) deploy done ==="

ln -sf "deploy-$TS.log" "$LATEST"
