import { initSVGTextContentElement } from "./SVGTextContentElement.js";

/**
 * Initializes an instance of SVGTextPathElement.
 * 
 * It invokes the function `initSVGTextContentElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextPath = (element, ...properties) => {
    console.assert(element instanceof SVGTextPathElement);
    initSVGTextContentElement(element, ...properties);
}

/**
 * Creates an instance of SVGTextPathElement for tag 'textPath'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const textPath = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'textPath');
    initTextPath(element, ...properties);
    return element;
}
