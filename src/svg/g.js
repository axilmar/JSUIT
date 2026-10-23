import { initSVGGraphicsElement } from "./SVGGraphicsElement.js";

/**
 * Initializes an instance of SVGGElement.
 * 
 * It invokes the function `initSVGGraphicsElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initG = (element, ...properties) => {
    console.assert(element instanceof SVGGElement);
    initSVGGraphicsElement(element, ...properties);
}

/**
 * Creates an instance of SVGGElement for tag 'g'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const g = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    initG(element, ...properties);
    return element;
}
