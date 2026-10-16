import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLSpanElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpan = (element, ...properties) => {
    console.assert(element instanceof HTMLSpanElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLSpanElement for tag 'span'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const span = (...properties) => {
    const element = document.createElement('span');
    initSpan(element, ...properties);
    return element;
}
