#!/bin/sh
set -eu

source_dir="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)/personal-dist/"
target_dir="$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)/treppmann-de/"

if [ ! -d "$target_dir/.git" ]; then
  echo "Missing personal-site deployment repository at $target_dir" >&2
  exit 1
fi

rsync -a --delete \
  --exclude '.git/' \
  --exclude '.github/' \
  --exclude 'README.md' \
  "$source_dir" "$target_dir"
