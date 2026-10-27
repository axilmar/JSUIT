import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGTitleElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTitle = (element, ...properties) => {
    console.assert(element instanceof SVGTitleElement);
    initSVGElement(element, { additionalClassName: 'title' }, ...properties);
}

/**
 * Creates an instance of SVGTitleElement for tag 'title'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const title = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    initTitle(element, ...properties);
    return element;
}
