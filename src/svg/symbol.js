import { initSVGGraphicsElement } from "./SVGGraphicsElement.js";

/**
 * Initializes an instance of SVGSymbolElement.
 * 
 * It invokes the function `initSVGGraphicsElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSymbol = (element, ...properties) => {
    console.assert(element instanceof SVGSymbolElement);
    initSVGGraphicsElement(element, ...properties);
}

/**
 * Creates an instance of SVGSymbolElement for tag 'symbol'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const symbol = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');
    initSymbol(element, ...properties);
    return element;
}
