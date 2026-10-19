from PIL import Image, ImageFilter
import sys
ht = Image.open(sys.argv[1]); cut = Image.open(sys.argv[2]).convert('RGBA').resize(ht.size, Image.LANCZOS)
a = cut.split()[3].point(lambda v: 255 if v>110 else 0)
edge = a.filter(ImageFilter.MaxFilter(int(sys.argv[4]) if len(sys.argv)>4 else 21)).point(lambda v: 255 if v>128 else 0)
base = Image.new('RGBA', ht.size, (250,248,243,255)); base.putalpha(edge); base.alpha_composite(ht)
base = base.crop(base.getbbox()); base.thumbnail((720,720), Image.LANCZOS)
base.save(sys.argv[3], quality=86, method=6); print(sys.argv[3], base.size)
