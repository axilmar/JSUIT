import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFilterElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilter = (element, ...properties) => {
    console.assert(element instanceof SVGFilterElement);
    initSVGElement(element, { additionalClassName: 'filter' }, ...properties);
}

/**
 * Creates an instance of SVGFilterElement for tag 'filter'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const filter = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    initFilter(element, ...properties);
    return element;
}
