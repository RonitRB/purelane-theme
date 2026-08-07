import re
import os

html_path = 'purelane-homepage.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Extract the base64 assets CSS
assets_match = re.search(r'(/\* ---------- PRODUCT ASSETS.*?\n\.p-wm\{.*?\})', html, re.DOTALL)
if assets_match:
    assets_css = assets_match.group(1)
    
    # append to purelane-base.css
    base_css_path = 'assets/purelane-base.css'
    with open(base_css_path, 'r', encoding='utf-8') as f:
        base_css = f.read()
    
    if 'PRODUCT ASSETS' not in base_css:
        with open(base_css_path, 'a', encoding='utf-8') as f:
            f.write('\n\n' + assets_css)

# Fix hero.liquid to use these placeholder classes
hero_path = 'sections/hero.liquid'
with open(hero_path, 'r', encoding='utf-8') as f:
    hero_code = f.read()

# Instead of {{ 'product-1' | placeholder_svg_tag ... }} we want <div class="pimg p-kbtl hp a d1"></div>
hero_code = re.sub(r'\{\{ \'product-1\' \| placeholder_svg_tag: \'hp a d1 placeholder\' \}\}', r'<div class="pimg p-kbtl hp a d1"></div>', hero_code)
hero_code = re.sub(r'\{\{ \'product-2\' \| placeholder_svg_tag: \'hp b d2 placeholder\' \}\}', r'<div class="pimg p-mbtl hp b d2"></div>', hero_code)
hero_code = re.sub(r'\{\{ \'product-3\' \| placeholder_svg_tag: \'hp c d3 placeholder\' \}\}', r'<div class="pimg p-tbtl hp c d3"></div>', hero_code)

with open(hero_path, 'w', encoding='utf-8') as f:
    f.write(hero_code)

# Fix product-card.liquid to use these placeholder classes
card_path = 'snippets/product-card.liquid'
with open(card_path, 'r', encoding='utf-8') as f:
    card_code = f.read()

card_code = re.sub(r'\{\{ \'product-1\' \| placeholder_svg_tag: \'pimg-real placeholder\' \}\}', r'<div class="pimg p-kbtl" style="height: 122px;"></div>', card_code)

with open(card_path, 'w', encoding='utf-8') as f:
    f.write(card_code)

# Fix combos.liquid to use these placeholder classes
combo_path = 'sections/combos.liquid'
with open(combo_path, 'r', encoding='utf-8') as f:
    combo_code = f.read()

combo_code = re.sub(r'\{\{ \'product-1\' \| placeholder_svg_tag: \'pimg placeholder\' \}\}', r'<div class="pimg p-floor"></div>', combo_code)
combo_code = re.sub(r'\{\{ \'product-2\' \| placeholder_svg_tag: \'pimg placeholder\' \}\}', r'<div class="pimg p-dish"></div>', combo_code)
combo_code = re.sub(r'\{\{ \'product-3\' \| placeholder_svg_tag: \'pimg placeholder\' \}\}', r'<div class="pimg p-handwash"></div>', combo_code)
combo_code = re.sub(r'\{\{ \'product-4\' \| placeholder_svg_tag: \'pimg placeholder\' \}\}', r'<div class="pimg p-laundry"></div>', combo_code)
combo_code = re.sub(r'\{\{ \'product-5\' \| placeholder_svg_tag: \'pimg placeholder\' \}\}', r'<div class="pimg p-kitchen"></div>', combo_code)
combo_code = re.sub(r'\{\{ \'product-6\' \| placeholder_svg_tag: \'pimg placeholder\' \}\}', r'<div class="pimg p-metal"></div>', combo_code)

with open(combo_path, 'w', encoding='utf-8') as f:
    f.write(combo_code)

print("Done extracting assets and fixing placeholders.")
