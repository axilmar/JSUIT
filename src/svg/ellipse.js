import { initSVGGeometryElement } from "./SVGGeometryElement.js";

/**
 * Initializes an instance of SVGEllipseElement.
 * 
 * It invokes the function `initSVGGeometryElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEllipse = (element, ...properties) => {
    console.assert(element instanceof SVGEllipseElement);
    initSVGGeometryElement(element, ...properties);
}

/**
 * Creates an instance of SVGEllipseElement for tag 'ellipse'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const ellipse = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    initEllipse(element, ...properties);
    return element;
}
