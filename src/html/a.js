import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLAnchorElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initA = (element, ...properties) => {
    console.assert(element instanceof HTMLAnchorElement);
    initHTMLElement(element, { additionalClassName: 'a' }, ...properties);
}

/**
 * Creates an instance of HTMLAnchorElement for tag 'a'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const a = (...properties) => {
    const element = document.createElement('a');
    initA(element, ...properties);
    return element;
}
