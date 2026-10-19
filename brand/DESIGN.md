---
version: 1
name: Tobias Treppmann — KI-Transformation
description: >
  Design spec for treppmann.de and everything that carries the KI-Transformation brand: web pages,
  print-outs, documents, reports, slides, charts and social posts. Video uses the companion
  frame.md (same atoms, frame as the unit). Ink, paper and one signal orange; halftone collage of
  real people and real objects on flat signal shapes; the five-step ladder as the one motif.
unit: the page — screen and A4; slides 16:9; social 1:1, 4:5, 9:16
principle: one accent · real material over decoration · numbers come from a source

colors:
  ink: "#11110f"
  paper: "#f3f0e8"
  white: "#fffdf7"
  signal: "#ff6138"
  muted: "#68675f"
  line: "rgba(17,17,15,0.22)"
  line-dark: "rgba(255,253,247,0.22)"
  check: "#2f7d4f"
  # Maturity ramp — signal mixed into paper (oklab), stage 1 → 5. Ordinal scales only.
  ramp-1: "#fad6c7"
  ramp-2: "#ffbba5"
  ramp-3: "#ffa083"
  ramp-4: "#ff8260"
  ramp-5: "#ff6138"

typography:
  display:  { fontFamily: "Switzer", weight: 500, size: "clamp(4.5rem, 6.2vw, 6rem)", lineHeight: 0.98, tracking: "-0.04em" }
  h2:       { fontFamily: "Switzer", weight: 500, size: "clamp(3.25rem, 5.2vw, 6rem)", lineHeight: 0.98, tracking: "-0.045em" }
  h3:       { fontFamily: "Switzer", weight: 500, size: "clamp(1.7rem, 2.3vw, 2.45rem)", lineHeight: 1.05, tracking: "-0.04em" }
  lead:     { fontFamily: "Switzer", weight: 400, size: "clamp(1.15rem, 1.8vw, 1.65rem)", lineHeight: 1.4, color: "muted" }
  body:     { fontFamily: "Switzer", weight: 400, size: "18px", lineHeight: 1.55 }
  small:    { fontFamily: "Switzer", weight: 400, size: "0.94rem", lineHeight: 1.55, color: "muted" }
  label:    { fontFamily: "Departure Mono", weight: 400, size: "0.62–0.78rem", tracking: "0.04–0.08em", upper: true }
  quote:    { fontFamily: "Gambarino", weight: 400, size: "clamp(2.6rem, 6vw, 4.4rem)", lineHeight: 1, tracking: "-0.02em" }
  stat:     { fontFamily: "Switzer", weight: 500, size: "clamp(4rem, 7vw, 7rem)", lineHeight: 0.9, tracking: "-0.05em" }
  print-body: { fontFamily: "Switzer", weight: 400, size: "10.5pt", lineHeight: 1.45 }
  print-h1:   { fontFamily: "Switzer", weight: 500, size: "30pt", lineHeight: 1, tracking: "-0.04em" }

fonts:
  Switzer: { files: ["public/fonts/Switzer-Variable.woff", "public/fonts/Switzer-VariableItalic.woff2"], weights: "100–900", licence: "Fontshare free licence (Indian Type Foundry), commercial use allowed" }
  Gambarino: { files: ["public/fonts/Gambarino-Regular.woff2"], weights: "400", licence: "Fontshare free licence" }
  Departure Mono: { files: ["public/fonts/DepartureMono-Regular.woff2"], weights: "400", licence: "SIL Open Font License 1.1" }
  fallbacks: { sans: "Arial, sans-serif", serif: "Georgia, serif", mono: "ui-monospace, monospace" }

spacing:
  shell: "min(1480px, 100vw - 64px); 16px side gutter on phones"
  section-y: "9rem desktop, 5rem phone"
  gap-lg: "6rem"
  gap-md: "2rem"
  gap-sm: "0.8rem"
  print-margin: "18mm"

components:
  registers:
    dark: "ground {colors.ink}, text {colors.white}, secondary text white at 58–65 %, accent {colors.signal}"
    paper: "ground {colors.paper}, text {colors.ink}, secondary {colors.muted}"
    light: "ground {colors.white}, text {colors.ink}"
    description: "Alternate dark and light sections; never put signal text on paper below 24px (contrast)."
  wordmark:
    text: "Tobias Treppmann / KI-Transformation"
    rule: "Switzer 650, -0.02em; the slash in {colors.signal}. No logo file exists — never draw one."
  section-label:
    typography: "{typography.small} 600, preceded by a 2rem hairline"
  rule: "1px {colors.line} (light) / {colors.line-dark} (dark). Columns are separated by hairlines, not cards."
  button-primary: "ground {colors.signal}, text {colors.ink}, square corners, 44px min height"
  button-ghost: "1px border in current colour, inverts on hover"
  collage-shape:
    kinds: "circle · arch (radius on top only) · square tilted 6°"
    color: "{colors.signal} flat — no gradient, no shadow on the shape"
  collage-object:
    treatment: "black-and-white halftone (45° grid), 10–25px paper sticker edge, soft drop shadow 0 10px 18px rgba(17,17,15,.22)"
  collage-person:
    treatment: "grayscale photo + light dot screen (26 % blend), paper sticker edge. Never full halftone on faces — it breaks glasses and eyes."
  ladder:
    description: "Five ascending steps, {colors.ramp-1}…{colors.ramp-5}, numbers in {typography.label}. The brand's one motif: maturity, progress, the KI-Check."
  ticket:
    description: "White paper slip, rotated −7° to +4°, mono kicker, one short line. Carries a real phrase, never a fake quote."
  chart:
    description: "See Charts. Ink bars, the one datum that matters in {colors.signal}, mono labels, source line underneath."
  corners: "square everywhere (0 radius) except collage shapes and the round radio marks"
---

# Tobias Treppmann — KI-Transformation · Design

## Overview

The brand sells one idea: **AI that people actually use, built from how the work really runs.**
The look follows from that. It is grounded rather than futuristic: ink, paper and one warm signal
orange, a calm editorial grid, and collages made from real things — Tobias's own photos, objects
from real work, his own slides. No robots, no glowing brains, no blue gradients, no stock teams.

Reference points (for spirit, never to copy): The Fountain Institute and Dark Horse (halftone
cut-out collage on flat colour), Futurice (restraint). Anti-references: appliedAI, neuland.ai and
other "AI wave" looks — interchangeable.

## Colour

- **One accent.** Signal orange carries emphasis, action and the collage shapes. Everything else is
  ink, paper, white and muted grey. Do not add a second accent colour.
- **The ramp is for order, not for judgement.** Maturity stages, steps and progress use the ramp
  from pale to full signal. Never traffic-light colours (red/amber/green) for stages — stage 1 is
  where most readers stand, it must not read as "bad".
- **Acid green (#d7ff3f)** is a legacy colour of the design-studio pages only. Not part of this brand.
- Dark mode is the dark register; there is no separate dark theme.

## Typography

- **Switzer** for almost everything, weight 500 for headings with tight negative tracking, 400 for
  text. **Departure Mono** only for labels, kickers, step numbers, sources and chart axes — always
  uppercase and small. **Gambarino** (serif) only for a large single quote or the KI-Check title;
  never for body text.
- Headlines are sentences with a full stop: "Drei Beispiele aus der Praxis." Short. Balanced wrap.
- German first (Sie-Form), English second. Typographic quotes „…“ in German, "…" in English.

## Imagery — the collage system

1. **People** are only real people who agreed to be shown, mainly Tobias. Cut out with macOS
   Vision, grayscale + light dot screen, paper sticker edge, placed on a signal shape.
2. **Objects** carry the metaphor of a problem or step (access card, crumpled notes, tangled
   cord, stack of letters, hands passing a wrench, stamp). Generated as isolated black-and-white
   photographs, cut out, halftoned, sticker edge. One object per idea.
3. **Real artefacts** (his slides, flipcharts, sticky-note walls) appear as paper slips or cropped
   halftone panels.
4. **Stop-motion, not video, on web pages:** a problem image steps to its solution in 2–3 frames as
   the reader scrolls (labelled "Heute → Danach").
5. Generated images are never presented as documentation of real work, real people or real
   screens. Third parties in photos need consent, are cropped out, or are anonymised:
   - **Anonymised real photo:** colleagues' faces replaced with AI, Tobias's face restored
     pixel-for-pixel from the original. Caption ends with "Mit KI bearbeitet" / "Edited with AI".
   - **Re-created scene:** a real event re-generated with the original photo as reference (e.g. the
     DCI workshop 2018). Caption ends with "Mit KI nachgestellt" / "Recreated with AI".
   - Captions state what really happened (who, where, when); the AI label says what was changed.

Tools and exact steps: `brand/tools/README.md`.

## Composition rules

- Grid: a narrow label column (≈ 0.48fr) and a wide content column (≈ 1.52fr); three-column rows
  separated by hairlines. Generous vertical space.
- Every section has at most one collage. A collage sits where the eye starts (above a card title,
  in the label column, in the hero's right column).
- Text-heavy sections get a visual anchor (number, ladder, object) rather than more words.
- Motion: reveal on scroll (fade + 18–26px rise, 110ms stagger), counters on figures, steps fill as
  you scroll. Everything respects `prefers-reduced-motion` and works without JavaScript.

## Charts

- Bars or single big numbers; no pies, no 3D, no gridlines except a baseline.
- Bars in ink; **the one value the chart is about** in signal. Ordinal series may use the ramp.
- Value labels in Departure Mono above the bar ("28 %"), category labels below in Switzer small.
- A source line under every chart: "Quelle: Bitkom, September 2026" in mono, linked where possible.
- German number format: "57 %", "1,62 Mio. €". Never round beyond the source's own rounding.

## Applications

| Output | Size | Register | Notes |
|---|---|---|---|
| Web page | responsive | dark hero, then alternate | 16px gutter on phones, no horizontal scroll |
| Print / PDF one-pager | A4 portrait, 18mm margins | paper | print-body 10.5pt; collage max one per page; URL + mail in footer |
| Report | A4 or web article | paper + one dark cover | numbered sections, charts per Charts, sources at the end |
| Slides | 16:9 (1920×1080) | dark cover, paper content | one idea per slide; template `brand/slides.md` |
| Social square | 1080×1080 | dark or paper | headline ≤ 8 words, one collage or one number, wordmark bottom-left |
| Social portrait | 1080×1350 / 1080×1920 | dark | same, more air; captions burnt-in for video |
| LinkedIn banner | 1584×396 | dark | wordmark left, ladder or portrait right; safe zone for the round avatar bottom-left |
| Video | see frame.md | | HyperFrames; brand not layout |

## Do / Don't

- Do use real material and say where it comes from (caption in mono).
- Do keep one accent, square corners, hairlines.
- Don't use emoji as icons (Apple renders ↗ as emoji — append U+FE0E).
- Don't invent logos, testimonials, client names, numbers or screenshots.
- Don't use stock photos of people or AI clichés (robots, circuits, glowing brains).
- Don't use the ramp or orange to grade the reader.
