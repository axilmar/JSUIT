import { initSVGGeometryElement } from "./SVGGeometryElement.js";

/**
 * Initializes an instance of SVGRectElement.
 * 
 * It invokes the function `initSVGGeometryElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRect = (element, ...properties) => {
    console.assert(element instanceof SVGRectElement);
    initSVGGeometryElement(element, ...properties);
}

/**
 * Creates an instance of SVGRectElement for tag 'rect'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const rect = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    initRect(element, ...properties);
    return element;
}
