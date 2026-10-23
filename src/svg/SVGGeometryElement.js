import { initSVGGraphicsElement } from "./SVGGraphicsElement.js";

/**
 * Initializes an instance of SVGGeometryElement.
 * 
 * It invokes the function `initSVGGraphicsElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSVGGeometryElement = (element, ...properties) => {
    console.assert(element instanceof SVGGeometryElement);
    initSVGGraphicsElement(element, ...properties);
}
