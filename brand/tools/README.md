# Collage tools

Run from the treppmann-studio root. Needs macOS 14+ (`swift`, Vision), `python3` with Pillow, and the
Alibaba Bailian CLI `bl` (authenticated) for generated objects.

| Script | Does |
|---|---|
| `gen-object.sh <name> "<object>"` | Generates an isolated b/w object photo, cuts it out, halftones it, adds the paper edge → `public/images/collage/<name>.webp` |
| `edit-frame.sh <source.png> <name> "<change>"` | Stop-motion frame from an existing object (same light and angle). Image goes in as a data URL because `bl image edit` fails on local uploads (HTTP 401) |
| `person.sh <photo> <out.webp>` | Cuts a person out and applies the person treatment (grayscale + light dot screen + paper edge) |
| `cutout.swift <in> <out.png>` | Vision foreground mask → transparent PNG |
| `halftone.py <cut.png> <out.png> [step]` | 45° dot halftone, ink dots, keeps small dots in highlights |
| `sticker.py <ht.png> <cut.png> <out.webp> [edge]` | Paper sticker edge, crop, ≤720px webp |
| `photoscreen.py <cut.png> <out.webp> [edge]` | Person treatment, ≤900px webp |
| `check-brand.mjs` | Fails if DESIGN.md, frame.md, tokens.css, brand.json and the site CSS disagree |

Object prompt style (keep it identical so the set stays consistent):
`<object>, isolated single object on plain pure white background, vintage black and white
documentary photograph, high contrast, sharp focus, studio lighting, no text, no logos, no people`

Bailian rate limit: generate one image at a time.
