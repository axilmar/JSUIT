import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGMPathElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMpath = (element, ...properties) => {
    console.assert(element instanceof SVGMPathElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGMPathElement for tag 'mpath'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const mpath = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
    initMpath(element, ...properties);
    return element;
}
