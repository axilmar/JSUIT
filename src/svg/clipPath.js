import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGClipPathElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initClipPath = (element, ...properties) => {
    console.assert(element instanceof SVGClipPathElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGClipPathElement for tag 'clipPath'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const clipPath = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    initClipPath(element, ...properties);
    return element;
}
