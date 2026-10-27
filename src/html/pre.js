import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLPreElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPre = (element, ...properties) => {
    console.assert(element instanceof HTMLPreElement);
    initHTMLElement(element, { additionalClassName: 'pre' }, ...properties);
}

/**
 * Creates an instance of HTMLPreElement for tag 'pre'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const pre = (...properties) => {
    const element = document.createElement('pre');
    initPre(element, ...properties);
    return element;
}
