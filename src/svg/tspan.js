import { initSVGTextPositioningElement } from "./SVGTextPositioningElement.js";

/**
 * Initializes an instance of SVGTSpanElement.
 * 
 * It invokes the function `initSVGTextPositioningElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTspan = (element, ...properties) => {
    console.assert(element instanceof SVGTSpanElement);
    initSVGTextPositioningElement(element, ...properties);
}

/**
 * Creates an instance of SVGTSpanElement for tag 'tspan'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const tspan = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    initTspan(element, ...properties);
    return element;
}
