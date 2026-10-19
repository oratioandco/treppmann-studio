# Rectangular photo panel in the person treatment: crop, grayscale, light dot screen, ink/paper tones.
# Usage: python3 brand/tools/panel.py <photo> <out.webp> [aspect=4/3] [focus_x=0.5] [focus_y=0.5]
import sys, math
from fractions import Fraction
from PIL import Image, ImageOps, ImageEnhance, ImageChops, ImageDraw

src, out = sys.argv[1], sys.argv[2]
aspect = float(Fraction(sys.argv[3])) if len(sys.argv) > 3 else 4 / 3
fx = float(sys.argv[4]) if len(sys.argv) > 4 else .5
fy = float(sys.argv[5]) if len(sys.argv) > 5 else .5

im = ImageOps.exif_transpose(Image.open(src)).convert('RGB'); W, H = im.size
w, h = (int(H * aspect), H) if W / H > aspect else (W, int(W / aspect))
x = min(max(0, int(fx * W - w / 2)), W - w); y = min(max(0, int(fy * H - h / 2)), H - h)
im = im.crop((x, y, x + w, y + h)).resize((1200, round(1200 / aspect)), Image.LANCZOS); W, H = im.size

g = ImageEnhance.Contrast(ImageOps.autocontrast(ImageOps.grayscale(im), cutoff=1)).enhance(1.15)
step = 7; dots = Image.new('L', (W, H), 255); d = ImageDraw.Draw(dots)
a = math.radians(45); diag = int(math.hypot(W, H))
for i in range(-diag, diag, step):
    for j in range(-diag, diag, step):
        px = W / 2 + i * math.cos(a) - j * math.sin(a); py = H / 2 + i * math.sin(a) + j * math.cos(a)
        if 0 <= px < W and 0 <= py < H:
            v = g.getpixel((int(px), int(py))) / 255; r = max(.18, (1 - v * .9)) ** .8 * step * .62
            d.ellipse([px - r, py - r, px + r, py + r], fill=0)
b = ImageChops.multiply(g, Image.blend(Image.new('L', (W, H), 255), dots, .24))
ImageOps.colorize(b, (17, 17, 15), (250, 248, 243)).resize((900, round(900 / aspect)), Image.LANCZOS).save(out, quality=84, method=6)
print(out)
