import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGMaskElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMask = (element, ...properties) => {
    console.assert(element instanceof SVGMaskElement);
    initSVGElement(element, { additionalClassName: 'mask' }, ...properties);
}

/**
 * Creates an instance of SVGMaskElement for tag 'mask'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const mask = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    initMask(element, ...properties);
    return element;
}
