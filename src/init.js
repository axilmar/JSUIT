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

// 2. Globally inject box-sizing and overflow rules without creating tags
const globalSheet = new CSSStyleSheet();

// Rule 1: Box-sizing reset
globalSheet.insertRule('*, *::before, *::after { box-sizing: border-box; }', 0);

// Rule 2: Force overflow hidden on all classes, elements, and pseudo-elements
globalSheet.insertRule('*, *::before, *::after { overflow: hidden !important; }', 1);

// Adopt the stylesheet into the global document context
adoptStyleSheet(globalSheet);
