import { adoptStyleSheet } from './utility.js';

// 1. Programmatically structure html and body layouts directly
const html = document.documentElement; 
const body = document.body;            

html.style.margin = '0';
html.style.padding = '0';
html.style.width = '100%';
html.style.height = '100%';
html.style.overflow = 'hidden'; // Lock down root overflow

body.style.margin = '0';
body.style.padding = '0';
body.style.width = '100%';
body.style.height = '100%';
body.style.minHeight = '100vh';
body.style.overflow = 'hidden'; // Lock down body overflow

// MUI's default typography (body1), text color (text.primary) and background (background.default)
body.style.fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
body.style.fontSize = '1rem';
body.style.fontWeight = '400';
body.style.lineHeight = '1.5';
body.style.letterSpacing = '0.00938em';
body.style.color = 'rgba(0, 0, 0, 0.87)';
body.style.backgroundColor = '#fff';

// 2. Globally inject box-sizing and overflow rules without creating tags
const globalSheet = new CSSStyleSheet();

// Rule 1: Box-sizing reset
globalSheet.insertRule('*, *::before, *::after { box-sizing: border-box; }', 0);

// Rule 2: Force overflow hidden on all classes, elements, and pseudo-elements
globalSheet.insertRule('*, *::before, *::after { overflow: hidden !important; }', 1);

// Rule 3: Roboto font faces (urls are resolved relative to this module, not to the page)
for (const weight of [300, 400, 500, 700]) {
    const url = new URL(`../fonts/roboto-latin-${weight}-normal.woff2`, import.meta.url).href;
    globalSheet.insertRule(
        `@font-face { font-family: "Roboto"; font-style: normal; font-weight: ${weight}; font-display: swap; src: url("${url}") format("woff2"); }`,
        globalSheet.cssRules.length);
}

// Adopt the stylesheet into the global document context
adoptStyleSheet(globalSheet);
