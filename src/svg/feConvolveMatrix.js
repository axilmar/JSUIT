import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEConvolveMatrixElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeConvolveMatrix = (element, ...properties) => {
    console.assert(element instanceof SVGFEConvolveMatrixElement);
    initSVGElement(element, { additionalClassName: 'feConvolveMatrix' }, ...properties);
}

/**
 * Creates an instance of SVGFEConvolveMatrixElement for tag 'feConvolveMatrix'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feConvolveMatrix = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feConvolveMatrix');
    initFeConvolveMatrix(element, ...properties);
    return element;
}
