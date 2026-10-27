import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFETileElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeTile = (element, ...properties) => {
    console.assert(element instanceof SVGFETileElement);
    initSVGElement(element, { additionalClassName: 'feTile' }, ...properties);
}

/**
 * Creates an instance of SVGFETileElement for tag 'feTile'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feTile = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feTile');
    initFeTile(element, ...properties);
    return element;
}
