import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEFloodElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeFlood = (element, ...properties) => {
    console.assert(element instanceof SVGFEFloodElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGFEFloodElement for tag 'feFlood'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feFlood = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feFlood');
    initFeFlood(element, ...properties);
    return element;
}
