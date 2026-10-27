import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGComponentTransferFunctionElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSVGComponentTransferFunctionElement = (element, ...properties) => {
    console.assert(element instanceof SVGComponentTransferFunctionElement);
    initSVGElement(element, { additionalClassName: 'SVGComponentTransferFunctionElement' }, ...properties);
}
