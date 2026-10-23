import { initSVGGraphicsElement } from "./SVGGraphicsElement.js";

/**
 * Initializes an instance of SVGSVGElement.
 * 
 * It invokes the function `initSVGGraphicsElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSvg = (element, ...properties) => {
    console.assert(element instanceof SVGSVGElement);
    initSVGGraphicsElement(element, ...properties);
}

/**
 * Creates an instance of SVGSVGElement for tag 'svg'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const svg = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    initSvg(element, ...properties);
    return element;
}
