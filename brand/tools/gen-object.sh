#!/bin/zsh
# Generate one collage object with Alibaba Bailian (bl CLI), then cut out, halftone and sticker it.
# Usage: brand/tools/gen-object.sh <name> "<object description>" [out-dir]
# Needs: bl (authenticated), swift (macOS 14+), python3 + Pillow. Run calls one at a time (HTTP 429).
set -e
name=$1; desc=$2; out=${3:-public/images/collage}; here=${0:a:h}; tmp=$(mktemp -d)
STYLE="isolated single object on plain pure white background, vintage black and white documentary photograph, high contrast, sharp focus, studio lighting, no text, no logos, no people"
bl image generate --prompt "$desc, $STYLE" --size '1:1' --watermark false --prompt-extend false --out-dir $tmp --out-prefix $name >/dev/null
swift $here/cutout.swift $tmp/$name.png $tmp/$name-cut.png >/dev/null
python3 $here/halftone.py $tmp/$name-cut.png $tmp/$name-ht.png 4
python3 $here/sticker.py $tmp/$name-ht.png $tmp/$name-cut.png $out/$name.webp
echo "$out/$name.webp"
