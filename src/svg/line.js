import { initSVGGeometryElement } from "./SVGGeometryElement.js";

/**
 * Initializes an instance of SVGLineElement.
 * 
 * It invokes the function `initSVGGeometryElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLine = (element, ...properties) => {
    console.assert(element instanceof SVGLineElement);
    initSVGGeometryElement(element, { additionalClassName: 'line' }, ...properties);
}

/**
 * Creates an instance of SVGLineElement for tag 'line'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const line = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    initLine(element, ...properties);
    return element;
}
