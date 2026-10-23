import { initSVGGeometryElement } from "./SVGGeometryElement.js";

/**
 * Initializes an instance of SVGCircleElement.
 * 
 * It invokes the function `initSVGGeometryElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCircle = (element, ...properties) => {
    console.assert(element instanceof SVGCircleElement);
    initSVGGeometryElement(element, ...properties);
}

/**
 * Creates an instance of SVGCircleElement for tag 'circle'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const circle = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    initCircle(element, ...properties);
    return element;
}
