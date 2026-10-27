import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEColorMatrixElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeColorMatrix = (element, ...properties) => {
    console.assert(element instanceof SVGFEColorMatrixElement);
    initSVGElement(element, { additionalClassName: 'feColorMatrix' }, ...properties);
}

/**
 * Creates an instance of SVGFEColorMatrixElement for tag 'feColorMatrix'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feColorMatrix = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
    initFeColorMatrix(element, ...properties);
    return element;
}
