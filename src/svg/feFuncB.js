import { initSVGComponentTransferFunctionElement } from "./SVGComponentTransferFunctionElement.js";

/**
 * Initializes an instance of SVGFEFuncBElement.
 * 
 * It invokes the function `initSVGComponentTransferFunctionElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeFuncB = (element, ...properties) => {
    console.assert(element instanceof SVGFEFuncBElement);
    initSVGComponentTransferFunctionElement(element, ...properties);
}

/**
 * Creates an instance of SVGFEFuncBElement for tag 'feFuncB'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feFuncB = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feFuncB');
    initFeFuncB(element, ...properties);
    return element;
}
