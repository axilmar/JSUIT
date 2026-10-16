import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLBRElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBr = (element, ...properties) => {
    console.assert(element instanceof HTMLBRElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLBRElement for tag 'br'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const br = (...properties) => {
    const element = document.createElement('br');
    initBr(element, ...properties);
    return element;
}
