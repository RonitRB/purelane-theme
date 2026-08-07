# Purelane Premium E-commerce Homepage

This repository contains the implementation of a premium ecommerce homepage for Purelane, built as a native Shopify theme on top of the Dawn architecture.

## Architecture & Approach

This project embraces the **Shopify Dawn architecture**. It uses standard Liquid, CSS, and vanilla JavaScript to deliver a polished frontend focused on merchant configurability, maintainability, and responsive ecommerce UX.

### Engineering Decisions
- **Preserved Architecture:** Retained full Shopify Dawn structure and Theme Editor compatibility.
- **Zero New Dependencies:** Avoided external UI frameworks (React, Vue, Tailwind) to keep bundle size low.
- **Scoped CSS Architecture:** All custom styles are strictly scoped to prevent regressions on other templates (Product Pages, Cart, etc.).
- **Progressive Enhancement:** Used minimal, vanilla JavaScript for interactive elements.
- **Graceful Fallbacks:** Designed robust empty states when merchant content or images are unavailable.
- **Responsive Integrity:** Maintained consistent layouts and fluid typography across mobile, tablet, and desktop breakpoints.

## Design Philosophy & Visual Language

The visual direction draws inspiration from premium DTC ecommerce brands, emphasizing product-first layouts, restrained typography, generous whitespace, and subtle interaction design.

### Core Pillars:
- **Product Dominance:** Photography is treated as the hero. Layouts use expansive aspect ratios and scale to give products breathing room.
- **Minimalist Palette:** The color scheme is restrained, utilizing deep inks (`#121218`), warm off-whites (`#f7f5f2`), and subtle glass effects to create visual hierarchy without clutter.
- **Micro-Interactions:** Clean hover states and scroll-triggered reveals provide a tactile feel without harming performance.
- **Rhythm & Hierarchy:** A strict vertical rhythm spacing system separates sections logically, with deep contrast differences between pricing metadata and secondary text.

## Sections Included

1. **Cinematic Hero:** Features a transparent header integration, scalable product photography, and an automated carousel with native `IntersectionObserver` pause-on-hover behavior.
2. **Product Grid:** Clean product cards with off-white backgrounds, precise typography hierarchy, and a fallback render system for empty states.
3. **Combos (Horizontal Scroll):** A mobile-optimized swipe rail for best-selling combos, featuring glassmorphic trays and clear "savings" badges to drive conversion.
4. **Bundles Grid:** A dense pricing grid utilizing tiered visual hierarchy (the "Most Popular" tier receives scaling and a highlighted border treatment).
5. **Editorial Reviews:** Clean, typography-first social proof.

## QA & Production Considerations

- **Responsive Scaling:** Audited across 375px, 768px, and 1440px widths to ensure layout integrity.
- **Performance & Stability:** Care was taken to minimize layout shifts (CLS) through fixed aspect ratios and reserved media space.
- **Accessibility Considerations:** Typography, color contrast, and interactive states were reviewed with accessibility in mind.
- **Fallback States:** Liquid empty-states are natively wired with placeholder assets to ensure a clean preview experience even before merchant setup.

## Getting Started

1. **Install Dependencies:** Ensure you have the Shopify CLI installed.
2. **Run Dev Server:** Run `shopify theme dev` from the project root.
3. **Preview:** Open the local preview link provided by the CLI.
4. **Configure:** Customize the homepage content and layouts directly through the Shopify Theme Editor.
