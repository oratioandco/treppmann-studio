#!/bin/zsh
# Make a stop-motion frame from an existing generated object (same light, angle, background).
# Usage: brand/tools/edit-frame.sh <source.png> <name> "<what changes>" [out-dir]
# bl image edit rejects local uploads (HTTP 401 on the upload policy), so the image goes in as a data URL.
set -e
src=$1; name=$2; change=$3; out=${4:-public/images/collage}; here=${0:a:h}; tmp=$(mktemp -d)
python3 -c "from PIL import Image; Image.open('$src').convert('RGB').resize((768,768)).save('$tmp/s.jpg', quality=85)"
U="data:image/jpeg;base64,$(base64 -i $tmp/s.jpg | tr -d '\n')"
KEEP="Keep the exact same vintage black and white photographic style, lighting, camera angle and plain pure white background. No text, no people."
bl image edit --image "$U" --prompt "$change $KEEP" --watermark false --out-dir $tmp --out-prefix $name >/dev/null
swift $here/cutout.swift $tmp/$name.png $tmp/$name-cut.png >/dev/null
python3 $here/halftone.py $tmp/$name-cut.png $tmp/$name-ht.png 4
python3 $here/sticker.py $tmp/$name-ht.png $tmp/$name-cut.png $out/$name.webp
echo "$out/$name.webp"
