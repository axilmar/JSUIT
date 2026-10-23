import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGGraphicsElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSVGGraphicsElement = (element, ...properties) => {
    console.assert(element instanceof SVGGraphicsElement);
    initSVGElement(element, ...properties);
}
