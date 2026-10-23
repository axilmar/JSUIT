import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEBlendElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeBlend = (element, ...properties) => {
    console.assert(element instanceof SVGFEBlendElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGFEBlendElement for tag 'feBlend'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feBlend = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feBlend');
    initFeBlend(element, ...properties);
    return element;
}
