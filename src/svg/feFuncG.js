import { initSVGComponentTransferFunctionElement } from "./SVGComponentTransferFunctionElement.js";

/**
 * Initializes an instance of SVGFEFuncGElement.
 * 
 * It invokes the function `initSVGComponentTransferFunctionElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeFuncG = (element, ...properties) => {
    console.assert(element instanceof SVGFEFuncGElement);
    initSVGComponentTransferFunctionElement(element, { additionalClassName: 'feFuncG' }, ...properties);
}

/**
 * Creates an instance of SVGFEFuncGElement for tag 'feFuncG'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feFuncG = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feFuncG');
    initFeFuncG(element, ...properties);
    return element;
}
