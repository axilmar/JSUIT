import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEGaussianBlurElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeGaussianBlur = (element, ...properties) => {
    console.assert(element instanceof SVGFEGaussianBlurElement);
    initSVGElement(element, { additionalClassName: 'feGaussianBlur' }, ...properties);
}

/**
 * Creates an instance of SVGFEGaussianBlurElement for tag 'feGaussianBlur'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feGaussianBlur = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    initFeGaussianBlur(element, ...properties);
    return element;
}
