import { initSVGTextContentElement } from "./SVGTextContentElement.js";

/**
 * Initializes an instance of SVGTextPositioningElement.
 * 
 * It invokes the function `initSVGTextContentElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSVGTextPositioningElement = (element, ...properties) => {
    console.assert(element instanceof SVGTextPositioningElement);
    initSVGTextContentElement(element, ...properties);
}
