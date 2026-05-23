#!/bin/bash
set -e

if [ -z "$1" ]; then
  echo "Usage: ./update.sh /path/to/new-data.js"
  exit 1
fi

SRC="$1"

if [ ! -f "$SRC" ]; then
  echo "Error: file not found: $SRC"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

cp "$SRC" "$SCRIPT_DIR/data.js"

cd "$SCRIPT_DIR"

git add data.js
git commit -m "Update data.js $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

echo "Done: data.js updated and pushed."
