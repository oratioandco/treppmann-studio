---
version: 1
name: Tobias Treppmann — KI-Transformation · Frame (video / frame layer)
description: >
  Video-first companion to brand/DESIGN.md. The unit is the frame (1920×1080). Atoms are identical
  and sacred — ink, paper, white, one signal orange and its ramp; Switzer 500 display with tight
  negative tracking, Departure Mono uppercase chrome; halftone collage cut-outs on flat signal
  shapes; the five-step ladder. Composition and scale are rewritten for the frame.
unit: the frame — 1920×1080 primary; 1080×1920 (9:16) and 1080×1080 (1:1) documented
principle: atoms are sacred · composition is free · numbers come from the script

colors:
  ink: "#11110f"
  paper: "#f3f0e8"
  white: "#fffdf7"
  signal: "#ff6138"
  muted: "#68675f"
  white-muted: "rgba(255,253,247,0.62)"
  line: "rgba(17,17,15,0.22)"
  line-dark: "rgba(255,253,247,0.22)"
  check: "#2f7d4f"
  ramp-1: "#fad6c7"
  ramp-2: "#ffbba5"
  ramp-3: "#ffa083"
  ramp-4: "#ff8260"
  ramp-5: "#ff6138"

typography:
  caption: { fontFamily: "Switzer", cqw: 1.0, weight: 400, lineHeight: 1.45 }
  body:    { fontFamily: "Switzer", cqw: 1.4, weight: 400, lineHeight: 1.45 }
  lead:    { fontFamily: "Switzer", cqw: 2.0, weight: 400, lineHeight: 1.3 }
  label:   { fontFamily: "Departure Mono", cqw: 0.8, weight: 400, tracking: "0.08em", upper: true }
  h2:      { fontFamily: "Switzer", cqw: 4.6, weight: 500, lineHeight: 0.98, tracking: "-0.045em" }
  h1:      { fontFamily: "Switzer", cqw: 6.6, weight: 500, lineHeight: 0.96, tracking: "-0.045em" }
  stat:    { fontFamily: "Switzer", cqw: 12.0, weight: 500, lineHeight: 0.9, tracking: "-0.05em" }
  quote:   { fontFamily: "Gambarino", cqw: 4.8, weight: 400, lineHeight: 1.05, tracking: "-0.02em" }

spacing:
  pad-x: "5cqw"
  pad-y: "5cqw"
  gap-lg: "3.5cqw"
  gap-md: "2cqw"
  gap-sm: "0.8cqw"

components:
  registers:
    dark: "ground {colors.ink}, text {colors.white}, secondary {colors.white-muted}, accent {colors.signal}"
    paper: "ground {colors.paper}, text {colors.ink}, secondary {colors.muted}"
    description: "One register per frame. Cover, chapter and end frames are dark."
  wordmark:
    text: "Tobias Treppmann / KI-Transformation"
    typography: "Switzer 650, -0.02em, slash in {colors.signal}"
    placement: "bottom-left on cover and end frames; omitted elsewhere"
  kicker: { typography: "{typography.label}", color: "{colors.signal} (dark) / {colors.muted} (paper)" }
  collage:
    shape: "flat {colors.signal} circle, arch or 6°-tilted square, no shadow"
    cutout: "halftone object or dot-screened person with paper sticker edge, drop shadow"
    motion: "shape scales in from 0.4 (1100ms ease-out), cut-out rises 40px, slip drops in rotated; stop-motion frame swaps at 8–12 fps feel with ±2° jitter"
  ladder:
    description: "Five steps ramp-1…ramp-5 growing from the baseline, 90ms stagger; never highlight one step as the viewer's level."
  source-line: { typography: "{typography.label}", color: "secondary", placement: "under any figure" }
---

# Frame layer

Read `brand/DESIGN.md` for intent, colour rules, imagery and Do/Don't. This file only reframes
the atoms for video.

## The frame

- 1920×1080 primary. 9:16 for Reels/Shorts/LinkedIn mobile, 1:1 for feed posts. Keep text inside
  a 5cqw safe area; on 9:16 keep the lower 18 % free of text (platform UI).
- One idea per frame. A frame carries either one number, one headline, one collage or one quote.
- Captions are burnt in for social cuts (Switzer 500 on a 70 % ink band, max two lines).

## Motion

- Calm and physical: things are placed, not flown in. Ease-out, 600–1100ms, small overshoot only
  for paper slips (rotation settle).
- Stop-motion for metaphors (problem → solution in 2–3 held frames, ~0.5 s each, slight jitter).
- No glitch, no particle, no neon, no 3D camera moves.

## Sound and voice

- Voice-over only in Tobias's own voice or none. No generic AI voice presented as him.
- Music, if any: sparse, acoustic or minimal piano; never stock "tech" builds.

## Truth

Every claim, figure and name in a video comes from `brand/CLAIMS.md`. Generated footage or images
must not depict real work, real clients or real people.
