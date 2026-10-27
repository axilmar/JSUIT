import { initSVGTextPositioningElement } from "./SVGTextPositioningElement.js";

/**
 * Initializes an instance of SVGTextElement.
 * 
 * It invokes the function `initSVGTextPositioningElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initText = (element, ...properties) => {
    console.assert(element instanceof SVGTextElement);
    initSVGTextPositioningElement(element, { additionalClassName: 'text' }, ...properties);
}

/**
 * Creates an instance of SVGTextElement for tag 'text'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const text = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    initText(element, ...properties);
    return element;
}
