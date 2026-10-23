import { initSVGGeometryElement } from "./SVGGeometryElement.js";

/**
 * Initializes an instance of SVGPolygonElement.
 * 
 * It invokes the function `initSVGGeometryElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPolygon = (element, ...properties) => {
    console.assert(element instanceof SVGPolygonElement);
    initSVGGeometryElement(element, ...properties);
}

/**
 * Creates an instance of SVGPolygonElement for tag 'polygon'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const polygon = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    initPolygon(element, ...properties);
    return element;
}
