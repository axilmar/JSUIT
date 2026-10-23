import { initSVGGeometryElement } from "./SVGGeometryElement.js";

/**
 * Initializes an instance of SVGPathElement.
 * 
 * It invokes the function `initSVGGeometryElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPath = (element, ...properties) => {
    console.assert(element instanceof SVGPathElement);
    initSVGGeometryElement(element, ...properties);
}

/**
 * Creates an instance of SVGPathElement for tag 'path'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const path = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    initPath(element, ...properties);
    return element;
}
