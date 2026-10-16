import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLParagraphElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initP = (element, ...properties) => {
    console.assert(element instanceof HTMLParagraphElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLParagraphElement for tag 'p'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const p = (...properties) => {
    const element = document.createElement('p');
    initP(element, ...properties);
    return element;
}
