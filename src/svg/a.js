import { initSVGGraphicsElement } from "./SVGGraphicsElement.js";

/**
 * Initializes an instance of SVGAElement.
 * 
 * It invokes the function `initSVGGraphicsElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initA = (element, ...properties) => {
    console.assert(element instanceof SVGAElement);
    initSVGGraphicsElement(element, ...properties);
}

/**
 * Creates an instance of SVGAElement for tag 'a'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const a = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    initA(element, ...properties);
    return element;
}
