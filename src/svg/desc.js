import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGDescElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDesc = (element, ...properties) => {
    console.assert(element instanceof SVGDescElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGDescElement for tag 'desc'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const desc = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
    initDesc(element, ...properties);
    return element;
}
