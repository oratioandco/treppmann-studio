import sys, math
from PIL import Image, ImageOps, ImageEnhance, ImageChops, ImageDraw, ImageFilter
cut = Image.open(sys.argv[1]).convert('RGBA'); cut = cut.crop(cut.getbbox())
S = 2; W, H = cut.width*S, cut.height*S
a = cut.split()[3].resize((W,H))
g = ImageOps.grayscale(cut.convert('RGB')); g = ImageOps.autocontrast(g, cutoff=1); g = ImageEnhance.Contrast(g).enhance(1.2).resize((W,H), Image.LANCZOS)
# light dot screen
step = 7; dots = Image.new('L',(W,H),255); d = ImageDraw.Draw(dots); ang = math.radians(45); diag = int(math.hypot(W,H))
for i in range(-diag, diag, step):
  for j in range(-diag, diag, step):
    x = W/2 + i*math.cos(ang) - j*math.sin(ang); y = H/2 + i*math.sin(ang) + j*math.cos(ang)
    if 0<=x<W and 0<=y<H:
      v = g.getpixel((int(x),int(y)))/255; r = max(.18,(1-v*.9))**.8*step*.62
      d.ellipse([x-r,y-r,x+r,y+r], fill=0)
screen = Image.blend(Image.new('L',(W,H),255), dots, .26)
b = ImageOps.colorize(ImageChops.multiply(g, screen), (17,17,15), (250,248,243)).convert('RGBA')
edge = a.point(lambda v: 255 if v>110 else 0).filter(ImageFilter.MaxFilter(int(sys.argv[3]) if len(sys.argv)>3 else 17))
base = Image.new('RGBA',(W,H),(250,248,243,255)); base.putalpha(edge); b.putalpha(a.point(lambda v: 255 if v>110 else 0)); base.alpha_composite(b)
base = base.crop(base.getbbox()); base.thumbnail((900,900), Image.LANCZOS); base.save(sys.argv[2], quality=86, method=6); print(base.size)
