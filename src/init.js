//Programmatically structure html and body layouts directly
const html = document.documentElement; 
const body = document.body;            

//set the html element to fully occupy the page without scrolling
html.style.margin = '0';
html.style.padding = '0';
html.style.width = '100%';
html.style.height = '100%';
html.style.overflow = 'hidden';

//set the body element to fully occupy the page without scrolling
body.style.margin = '0';
body.style.padding = '0';
body.style.width = '100%';
body.style.height = '100%';
body.style.minHeight = '100vh';
body.style.overflow = 'hidden';

//global text settings
body.style.fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
body.style.fontSize = '1rem';
body.style.fontWeight = '400';
body.style.lineHeight = '1.5';
body.style.letterSpacing = '0.00938em';
body.style.color = 'rgba(0, 0, 0, 0.87)';
body.style.backgroundColor = '#fff';

//inject rules without creating tags
const globalSheet = new CSSStyleSheet();

//make box sizing border box by default; no scrolling whatsoever for any element, except explicitly enabled by an element
globalSheet.insertRule('* { box-sizing: border-box; overflow: hidden !important; }', globalSheet.cssRules.length);

//when an object is hidden, set its display is none to avoid any interactions with the hidden element
globalSheet.insertRule('[hidden] { display: none !important; }', globalSheet.cssRules.length);

//Roboto font faces (urls are resolved relative to this module, not to the page)
for (const weight of [300, 400, 500, 700]) {
    const url = new URL(`../fonts/roboto-latin-${weight}-normal.woff2`, import.meta.url).href;
    globalSheet.insertRule(
        `@font-face { font-family: "Roboto"; font-style: normal; font-weight: ${weight}; font-display: swap; src: url("${url}") format("woff2"); }`,
        globalSheet.cssRules.length);
}

// Adopt the stylesheet into the global document context
document.adoptedStyleSheets = [...document.adoptedStyleSheets, globalSheet];
