import { initSVGComponentTransferFunctionElement } from "./SVGComponentTransferFunctionElement.js";

/**
 * Initializes an instance of SVGFEFuncAElement.
 * 
 * It invokes the function `initSVGComponentTransferFunctionElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeFuncA = (element, ...properties) => {
    console.assert(element instanceof SVGFEFuncAElement);
    initSVGComponentTransferFunctionElement(element, { additionalClassName: 'feFuncA' }, ...properties);
}

/**
 * Creates an instance of SVGFEFuncAElement for tag 'feFuncA'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feFuncA = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feFuncA');
    initFeFuncA(element, ...properties);
    return element;
}
