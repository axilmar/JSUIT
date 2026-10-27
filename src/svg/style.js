import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGStyleElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStyle = (element, ...properties) => {
    console.assert(element instanceof SVGStyleElement);
    initSVGElement(element, { additionalClassName: 'style' }, ...properties);
}

/**
 * Creates an instance of SVGStyleElement for tag 'style'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const style = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    initStyle(element, ...properties);
    return element;
}
