# AI Build Workflow: Prototype to Production

## Objective
Establish a repeatable, reliable workflow for translating complex, high-fidelity HTML/CSS/JS prototypes into dynamic Shopify Dawn components utilizing Agentic AI.

## The Verification Loop

This build successfully utilized a strict verification loop to ensure visual parity and functional correctness:

1. **Understand & Deconstruct**
   - Read the prototype source (`purelane-homepage.html`).
   - Identify global design tokens (CSS variables, utilities like `.glass`, typography rules).
   - Identify shared interactive behaviors (e.g., intersection observer for scroll reveals).

2. **Establish the Foundation**
   - Extract global CSS and JS into dedicated theme assets (`purelane-base.css`, `purelane-reveal.js`).
   - Wire these assets into the global layout (`layout/theme.liquid`) to make the design system available everywhere.
   - *Result: Sections can be built modularly without duplicating global CSS.*

3. **Section-by-Section Translation**
   - For each section in the prototype (Hero, Shop, Bundles, etc.):
     1. Create a new `.liquid` section file.
     2. Copy the HTML structure.
     3. Replace hardcoded text, images, and prices with Shopify Liquid tags and schema settings.
     4. Extract the section-specific CSS from the prototype and scope it within a `{% style %}` block to prevent leakage.
     5. Integrate any section-specific JS (e.g., Hero carousel, Marquee animations).

4. **Componentization**
   - Identify repeating UI patterns (e.g., Product Cards).
   - Extract them into Liquid snippets (`snippets/product-card.liquid`) to ensure consistency and DRY code across multiple sections (Product Grid, Combos).

5. **Assembly & Final Polish**
   - Construct the page structure via JSON templates (`templates/index.json`).
   - Perform a final review against core requirements (e.g., ensuring no hardcoded prices, verifying responsive breakpoints).

## Best Practices for Agentic AI

- **The Design is the Spec:** The AI must treat the provided HTML/CSS as absolute truth. Avoid rewriting CSS layout logic (e.g., changing Flexbox to Grid) unless explicitly required for Liquid integration.
- **Scope is King:** Always scope section CSS to `#shopify-section-{{ section.id }}`.
- **Dynamic Content:** Never hardcode "You save X" or specific prices. Always utilize Liquid math filters (`minus`, `plus`) and Shopify product objects (`product.price`, `product.compare_at_price`).
- **Real Images vs. SVGs:** Handle the transition from prototype placeholders (like base64 SVGs) to real product imagery gracefully, ensuring aspect ratios and containment (e.g., `object-fit: contain`) are applied to `<img>` tags.
