import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEDropShadowElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeDropShadow = (element, ...properties) => {
    console.assert(element instanceof SVGFEDropShadowElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGFEDropShadowElement for tag 'feDropShadow'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feDropShadow = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feDropShadow');
    initFeDropShadow(element, ...properties);
    return element;
}
