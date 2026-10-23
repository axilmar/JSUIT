import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGGradientElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSVGGradientElement = (element, ...properties) => {
    console.assert(element instanceof SVGGradientElement);
    initSVGElement(element, ...properties);
}
