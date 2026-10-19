from PIL import Image, ImageDraw, ImageOps, ImageEnhance
import sys, math
src = Image.open(sys.argv[1]).convert('RGBA')
S = 3  # upscale for crisp dots
w,h = src.size
alpha = src.split()[3]
g = ImageOps.grayscale(src.convert('RGB'))
g = ImageEnhance.Contrast(g).enhance(1.25)
g = ImageEnhance.Brightness(g).enhance(0.92)
step = float(sys.argv[3]) if len(sys.argv)>3 else 5
out = Image.new('RGBA', (w*S, h*S), (0,0,0,0))
d = ImageDraw.Draw(out)
ang = math.radians(45)
# rotated grid
diag = int(math.hypot(w,h))
for i in range(-diag, diag, int(step)):
  for j in range(-diag, diag, int(step)):
    x = w/2 + i*math.cos(ang) - j*math.sin(ang)
    y = h/2 + i*math.sin(ang) + j*math.cos(ang)
    if 0<=x<w and 0<=y<h and alpha.getpixel((int(x),int(y)))>128:
      v = g.getpixel((int(x),int(y)))/255
      r = max(0.16, (1-v*0.9))**0.8 * step*0.66
      if r>0.25:
        d.ellipse([(x-r)*S,(y-r)*S,(x+r)*S,(y+r)*S], fill=(20,20,18,255))
out = out.resize((w*2,h*2), Image.LANCZOS)
out.save(sys.argv[2])
