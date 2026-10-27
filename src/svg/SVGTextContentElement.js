import { initSVGGraphicsElement } from "./SVGGraphicsElement.js";

/**
 * Initializes an instance of SVGTextContentElement.
 * 
 * It invokes the function `initSVGGraphicsElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSVGTextContentElement = (element, ...properties) => {
    console.assert(element instanceof SVGTextContentElement);
    initSVGGraphicsElement(element, { additionalClassName: 'SVGTextContentElement' }, ...properties);
}
