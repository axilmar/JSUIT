import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEMergeElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeMerge = (element, ...properties) => {
    console.assert(element instanceof SVGFEMergeElement);
    initSVGElement(element, { additionalClassName: 'feMerge' }, ...properties);
}

/**
 * Creates an instance of SVGFEMergeElement for tag 'feMerge'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feMerge = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
    initFeMerge(element, ...properties);
    return element;
}
