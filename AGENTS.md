# AGENTS.md

Conventions for any AI agent working in this repository. Read this before writing or modifying anything.

## Repo shape

- Stock Shopify Dawn theme + custom Purelane sections for a plant-based homecare brand homepage.
- `purelane-homepage.html` (repo root) is the visual spec. Match it exactly — do not redesign, simplify, or improve on it. Where the underlying markup is bad for production (repeated inline SVGs per card, non-semantic divs, duplicated CSS palettes) fix it, but the rendered output must look the same.

## Never modify

- `assets/purelane-base.css` — global design tokens and shared chrome
- `assets/purelane-reveal.js` — global scroll-reveal observer used across all sections
- `snippets/product-card.liquid`
- `sections/product-grid.liquid`

These are already built and reviewed. If a task seems to require changing one of them, stop and report why instead of editing it.

## Rules for every new section

1. Never hardcode a price, a "you save X" figure, a rating, or copy that a merchant would want to edit. Pull from native product/variant fields, metafields, or metaobjects. Compute discounts from `price` vs `compare_at_price` in Liquid — never store a duplicate number.
2. Content and settings belong in that section's own `{% schema %}` block, not in `config/settings_schema.json`. Global settings are for genuinely site‑wide things (colors, typography) only.
3. Real Shopify schema setting types only: `product`, `product_list`, `collection`, `collection_list`, `text`, `richtext`, `range`, `checkbox`, `url`, `image_picker`, `metaobject`. There is no `product_picker` or `collection_picker` type — don't invent one.
4. Section CSS goes in a `{% style %}` tag scoped to that section's own class or id. Never leak into global chrome.
5. Images: `image_url` + `image_tag` with `widths`/`sizes`/`loading`. First 2‑4 cards eager, rest lazy. Handle missing images with `placeholder_svg_tag` — never a broken `<img>`.
6. Accessibility: every interactive element keyboard‑reachable, visible focus state (inherit `:focus-visible` from base CSS, don't override), alt text on every image, `aria-label` on icon‑only controls, `aria-hidden="true"` on decorative SVGs.
7. Respect `prefers-reduced-motion` for any animation you add — the global rule covers `.rv` elements already; extend the same pattern for anything section‑specific (marquees, auto‑advancing carousels).
8. Metaobjects are for genuinely reusable structured content with no native Shopify model (reviews). Everything else prefers native product/collection data or section/block settings.
9. Test at 375 px, 768 px, and 1440 px before calling anything done.

## Verification loop

Write → run `shopify theme dev` → open in the built‑in browser → screenshot at all three widths → diff against the matching section in `purelane‑homepage.html` → fix → re‑check. **Cap at 3 passes.** On the 3rd, stop and report exactly what doesn't match rather than guessing a 4th time.

## When you finish a task

Write a short node report: what you built, any deliberate deviation from the reference and why, anything unresolved after 3 verification passes. This feeds `ai‑workflow‑notes.md` later — write it as a handoff note, not a summary for its own sake.

## Commits

One commit per section/task, present tense, scoped: `Add combos section`, not `updates` or `wip`. Commit history is part of what's being reviewed — keep it readable.

## Definition of done

- Matches the reference visually at all three breakpoints
- Nothing hardcoded that a merchant would want to edit
- Keyboard‑operable, passes a manual tab‑through
- Survives theme editor add/remove/reorder/duplicate without erroring
- `prefers-reduced-motion` respected for anything animated

