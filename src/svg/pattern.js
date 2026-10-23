import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGPatternElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPattern = (element, ...properties) => {
    console.assert(element instanceof SVGPatternElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGPatternElement for tag 'pattern'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const pattern = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
    initPattern(element, ...properties);
    return element;
}
