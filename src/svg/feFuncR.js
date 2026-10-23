import { initSVGComponentTransferFunctionElement } from "./SVGComponentTransferFunctionElement.js";

/**
 * Initializes an instance of SVGFEFuncRElement.
 * 
 * It invokes the function `initSVGComponentTransferFunctionElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeFuncR = (element, ...properties) => {
    console.assert(element instanceof SVGFEFuncRElement);
    initSVGComponentTransferFunctionElement(element, ...properties);
}

/**
 * Creates an instance of SVGFEFuncRElement for tag 'feFuncR'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feFuncR = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feFuncR');
    initFeFuncR(element, ...properties);
    return element;
}
