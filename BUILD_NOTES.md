# Purelane Homepage Build Notes

## Overview
This build transforms a high-fidelity static HTML prototype into a production-ready Shopify Dawn theme implementation. The strategy prioritized preserving the exact visual aesthetics, glassmorphism, and micro-animations of the prototype while making the content fully dynamic and merchant-manageable via the Shopify Theme Editor.

## Architecture & Strategy

1. **Foundation First (`purelane-base.css` & `purelane-reveal.js`)**
   - Extracted all root CSS variables (colors, typography, spacing, gradients) into a standalone `purelane-base.css` file.
   - Extracted the intersection observer logic for scroll reveals into `purelane-reveal.js`.
   - Wired these directly into `layout/theme.liquid` to act as a globally available design system for all custom sections.
   - Preserved `prefers-reduced-motion` queries to ensure accessibility compliance.

2. **Scoped Section Implementation**
   - Each section (`hero`, `product-grid`, `reviews`, `combos`, `bundles`) was built as an independent `.liquid` file.
   - Replaced static content with dynamic Shopify schema settings (text, rich text, url, collection pickers).
   - Used Liquid `blocks` for repeating elements (e.g., hero badges, review cards, bundle categories).
   - Injected section-specific CSS directly within the `{% style %}` block to prevent CSS leakage and ensure modularity, utilizing the global tokens from `purelane-base.css`.

3. **Product & Asset Handling**
   - The prototype relied heavily on Base64 encoded SVGs for product imagery. This was replaced with Shopify's native `image_url` and `image_tag` filters, allowing merchants to use real product photography.
   - Created a reusable `snippets/product-card.liquid` to standardise product display across grids and sliders, handling dynamic pricing, compare-at prices, and hover interactions.

## Section Details

### 1. Hero (`sections/hero.liquid`)
- Replaced the inline SVG product slider with a dynamic collection picker (rendering the first 3 products).
- Implemented the custom Javascript slider logic (timing, dots, hover states) exactly as in the prototype, but sourcing real product featured images.
- Added a simplified gradient background (`.purelane-hero`) in place of the complex water cinematics (as per project scope).

### 2. Product Grid (`sections/product-grid.liquid`)
- Built a flexible grid utilizing the `product-card.liquid` snippet.
- Allows merchant to select a collection and define a limit (up to 8 products).

### 3. Reviews (`sections/reviews.liquid`)
- Converted the infinite scrolling marquee into a block-based section.
- Merchants can add up to 10 distinct reviews (author, text, rating, product tag).
- The CSS animation (`marq`) flawlessly loops the dynamic blocks.

### 4. Best Selling Combos (`sections/combos.liquid`)
- The most complex section, featuring horizontal scroll snapping.
- Utilizes product metafields for components (e.g. `product.metafields.custom.combo_components`).
- Calculates dynamic savings based on `compare_at_price` vs `price`.
- Includes a "Featured" badge matching system that automatically elevates a specific combo visually (using `.hero-combo` class).

### 5. Bundles (`sections/bundles.liquid`)
- Replaced static bundle categories with collection pickers.
- Defaults to the collection's image and description, with optional overrides via block settings.

## Accessibility (A11y) & Performance
- **Reduced Motion:** Fully supported. All transition durations and animation play states are zeroed or paused when `prefers-reduced-motion` is active.
- **Lazy Loading:** Secondary images and below-the-fold content utilize `loading: 'lazy'`. The hero images use `loading: 'eager'` to prevent LCP degradation.
- **Semantic HTML:** Maintained proper heading hierarchies (`h1` through `h5`) and aria labels for interactive elements (buttons, sliders, marquees).

## Next Steps for Merchant
1. Create a `combos_components` product reference list metafield to drive the combos stack UI.
2. Upload high-quality, transparent PNG/WebP product photography to replace the prototype SVGs.
3. Configure the theme settings and populate the sections via the Shopify Customizer.
