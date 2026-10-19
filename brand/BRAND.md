# Tobias Treppmann — KI-Transformation · brand sheet (written 2026-10-19)

The brand sheet for every on-brand output: web, print, documents, reports, slides, charts, video,
social. Format follows the `generate-product-ad` Gate 0 sheet, so ads, decks and Aroma runs read
the same file. Values live in the files named below; this sheet points to them and adds rights and
voice.

| File | Role | Read by |
|---|---|---|
| `brand/DESIGN.md` | Design spec — YAML tokens (normative) + rules (web, print, slides, charts, social) | design.md tooling, HyperFrames fallback, Claude |
| `brand/frame.md` | Video spec, frame as the unit | HyperFrames (`frame.md` wins over `design.md`) |
| `brand/brand.json` | Aroma `Brand` record (colours, font roles, fixed texts, rules) | Aroma / aperto-studio |
| `brand/tokens.css` | CSS custom properties, the same values | HTML pages, print CSS, slide theme |
| `brand/CLAIMS.md` | Claims register — what may be said or shown | everything that states a fact |
| `brand/slides.md` | Slide template (Marp; Slidev-readable) | decks |
| `brand/themes/treppmann.css` | Marp theme | `marp brand/slides.md` |
| `brand/tools/` | Cut-out, halftone, sticker, object generation, consistency check | collage production |

The site's live CSS (`src/styles/global.css`) is the origin of the tokens. `node
brand/tools/check-brand.mjs` fails if the files disagree.

## Rights

- Owner: Tobias Treppmann (own brand, sole trader). No agency, no client brand inside it.
- Fonts: Switzer and Gambarino (Fontshare free licence, commercial use allowed), Departure Mono
  (SIL OFL 1.1). Files in `public/fonts/`.
- Photos of Tobias:
  - Portrait `public/images/tobias-treppmann.jpg` — his own.
  - Stage photos: Startup.Life_Think, Betahaus Berlin, 24 Feb 2020 (Dropbox `Startup Life/Events/Meetup/20200224/photos`). Tobias may be shown; other people in them only cropped out or with consent.
  - Datameer photos: Tobias may show them (his statement, 2026-10-19).
  - Datameer work photos 2017–2018 (Apple Photos; whiteboard, sticky-note wall): may be shown;
    colleagues anonymised with AI, label "Mit KI bearbeitet".
  - DCI design-thinking workshop, 19 Mar 2018 (Dropbox): reference only, shown as an AI
    re-creation labelled "Mit KI nachgestellt".
  - Other Apple Photos work shots (2020, 2023): candidates until Tobias says what each shows.
- Clients and employers that may be named: Bibel TV, Ninox, ChurchDesk, Hypoport, Datameer, as on
  treppmann.de. Never name Bibel TV's development agency.
- Screens that may be shown: the case-study images already public on treppmann.design. Nothing from
  Bibel TV internal tools without his explicit OK.
- Not cleared: the IDEO.org Design Kit deck (third-party), any customer logos as a logo wall.

## Identity

- Wordmark (text only): "Tobias Treppmann / KI-Transformation", Switzer 650, the slash in signal.
  No logo file exists. Do not design one without Tobias.
- Palette: ink #11110f, paper #f3f0e8, white #fffdf7, signal #ff6138, muted #68675f; maturity ramp
  #fad6c7 → #ff6138. Primary on screen: dark hero, then paper/white sections.
- Typography: Switzer (display + text), Departure Mono (labels), Gambarino (single quotes only).
- Motif: the five-step ladder (KI-Check stages: Gekauft · Ausprobiert · Erste Vorhaben · Ein Prozess
  läuft anders · Teil der Arbeitsweise).
- Photography/illustration register: halftone collage — dot-screened real people, halftone objects,
  flat signal shapes, paper slips. See DESIGN.md → Imagery.
- Motion register: calm, placed, ease-out; scroll reveals, counters, stop-motion metaphors.
- Forbidden: robots, circuit boards, glowing brains, blue AI gradients, stock team photos, emoji
  icons, traffic-light maturity scales, drawn logos, fake quotes or testimonials.

## Voice

- Person: Tobias, first person singular ("Ich"), addressing the reader with "Sie" (German) / "you".
- Primary language German (de-DE), English (en) second. Same claims in both.
- Tone: plain, concrete, calm, honest about limits. Short sentences; one idea per sentence; the
  verb early. Numbers with source and date.
- Words to use: Prozess, Arbeit, Menschen, nutzen, messen, einführen, gemeinsam, konkret.
- Anti-words: revolutionieren, disruptiv, Gamechanger, KI-Magie, synergetisch, ganzheitlich,
  "nahtlos", "Reise", superlatives without a source; English buzzwords where German works.
- Promise style: "meist", "rund", "je nach" where the outcome depends on the client. Never
  guarantees.
- Voice-over: Tobias's own voice or none.
- Required lines: sources under figures; "Ohne Anmeldung, nichts wird gespeichert" for the
  KI-Check; generated images are illustrations, not documentation.

## Placement targets

| Target | Format | CTA |
|---|---|---|
| treppmann.de, report, KI-Check | web | Erstgespräch (fantastical.app/tobiastreppmann) |
| LinkedIn post / carousel | 1080×1080, 1080×1350, PDF carousel 1080×1350 | link in first comment or post |
| LinkedIn banner | 1584×396 | treppmann.de |
| Talk / pitch deck | 16:9 | contact slide |
| One-pager / leave-behind | A4 PDF | URL + QR to treppmann.de |
| Short video | 9:16 and 16:9 | treppmann.de |
