const fs = require('fs');

const htmlPath = 'purelane-homepage.html';
const html = fs.readFileSync(htmlPath, 'utf8');

const match = html.match(/(?:\/\* ---------- PRODUCT ASSETS.*?\n\.p-wm\{.*?\})/s);
if (match) {
    const assetsCss = match[0];
    const baseCssPath = 'assets/purelane-base.css';
    let baseCss = fs.readFileSync(baseCssPath, 'utf8');
    
    if (!baseCss.includes('PRODUCT ASSETS')) {
        fs.appendFileSync(baseCssPath, '\n\n' + assetsCss);
        console.log('Appended assets to CSS.');
    }
} else {
    console.log('Assets not found in HTML.');
}

const heroPath = 'sections/hero.liquid';
let heroCode = fs.readFileSync(heroPath, 'utf8');
heroCode = heroCode.replace(/\{\{\s*'product-1'\s*\|\s*placeholder_svg_tag:\s*'hp a d1 placeholder'\s*\}\}/g, '<div class="pimg p-kbtl hp a d1"></div>');
heroCode = heroCode.replace(/\{\{\s*'product-2'\s*\|\s*placeholder_svg_tag:\s*'hp b d2 placeholder'\s*\}\}/g, '<div class="pimg p-mbtl hp b d2"></div>');
heroCode = heroCode.replace(/\{\{\s*'product-3'\s*\|\s*placeholder_svg_tag:\s*'hp c d3 placeholder'\s*\}\}/g, '<div class="pimg p-tbtl hp c d3"></div>');
heroCode = heroCode.replace(/\{\{\s*'product-1'\s*\|\s*placeholder_svg_tag:\s*'hp a d1'\s*\}\}/g, '<div class="pimg p-kbtl hp a d1"></div>');
heroCode = heroCode.replace(/\{\{\s*'product-2'\s*\|\s*placeholder_svg_tag:\s*'hp b d2'\s*\}\}/g, '<div class="pimg p-mbtl hp b d2"></div>');
heroCode = heroCode.replace(/\{\{\s*'product-3'\s*\|\s*placeholder_svg_tag:\s*'hp c d3'\s*\}\}/g, '<div class="pimg p-tbtl hp c d3"></div>');
fs.writeFileSync(heroPath, heroCode);

const cardPath = 'snippets/product-card.liquid';
let cardCode = fs.readFileSync(cardPath, 'utf8');
cardCode = cardCode.replace(/\{\{\s*'product-1'\s*\|\s*placeholder_svg_tag:\s*'pimg-real placeholder'\s*\}\}/g, '<div class="pimg p-kbtl" style="height: 122px; width: 100%;"></div>');
fs.writeFileSync(cardPath, cardCode);

const comboPath = 'sections/combos.liquid';
let comboCode = fs.readFileSync(comboPath, 'utf8');
comboCode = comboCode.replace(/\{\{\s*'product-1'\s*\|\s*placeholder_svg_tag:\s*'pimg placeholder'\s*\}\}/g, '<div class="pimg p-floor"></div>');
comboCode = comboCode.replace(/\{\{\s*'product-2'\s*\|\s*placeholder_svg_tag:\s*'pimg placeholder'\s*\}\}/g, '<div class="pimg p-dish"></div>');
comboCode = comboCode.replace(/\{\{\s*'product-3'\s*\|\s*placeholder_svg_tag:\s*'pimg placeholder'\s*\}\}/g, '<div class="pimg p-handwash"></div>');
comboCode = comboCode.replace(/\{\{\s*'product-4'\s*\|\s*placeholder_svg_tag:\s*'pimg placeholder'\s*\}\}/g, '<div class="pimg p-laundry"></div>');
comboCode = comboCode.replace(/\{\{\s*'product-5'\s*\|\s*placeholder_svg_tag:\s*'pimg placeholder'\s*\}\}/g, '<div class="pimg p-kitchen"></div>');
comboCode = comboCode.replace(/\{\{\s*'product-6'\s*\|\s*placeholder_svg_tag:\s*'pimg placeholder'\s*\}\}/g, '<div class="pimg p-metal"></div>');
fs.writeFileSync(comboPath, comboCode);

console.log("Done.");
