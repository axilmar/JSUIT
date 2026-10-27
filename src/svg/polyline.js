import { initSVGGeometryElement } from "./SVGGeometryElement.js";

/**
 * Initializes an instance of SVGPolylineElement.
 * 
 * It invokes the function `initSVGGeometryElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPolyline = (element, ...properties) => {
    console.assert(element instanceof SVGPolylineElement);
    initSVGGeometryElement(element, { additionalClassName: 'polyline' }, ...properties);
}

/**
 * Creates an instance of SVGPolylineElement for tag 'polyline'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const polyline = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    initPolyline(element, ...properties);
    return element;
}
