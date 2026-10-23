import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEComponentTransferElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeComponentTransfer = (element, ...properties) => {
    console.assert(element instanceof SVGFEComponentTransferElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGFEComponentTransferElement for tag 'feComponentTransfer'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feComponentTransfer = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feComponentTransfer');
    initFeComponentTransfer(element, ...properties);
    return element;
}
