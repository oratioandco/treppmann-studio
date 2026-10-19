#!/bin/zsh
# Cut a real person out of a photo and apply the person treatment (grayscale + light dot screen + sticker edge).
# Usage: brand/tools/person.sh <photo.jpg> <out.webp>   — only people who agreed to be shown.
set -e
here=${0:a:h}; tmp=$(mktemp -d)
swift $here/cutout.swift $1 $tmp/cut.png >/dev/null
python3 $here/photoscreen.py $tmp/cut.png $2 17
