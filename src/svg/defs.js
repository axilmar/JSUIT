import { initSVGGraphicsElement } from "./SVGGraphicsElement.js";

/**
 * Initializes an instance of SVGDefsElement.
 * 
 * It invokes the function `initSVGGraphicsElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDefs = (element, ...properties) => {
    console.assert(element instanceof SVGDefsElement);
    initSVGGraphicsElement(element, ...properties);
}

/**
 * Creates an instance of SVGDefsElement for tag 'defs'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const defs = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    initDefs(element, ...properties);
    return element;
}
