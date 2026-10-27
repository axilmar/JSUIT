import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLDListElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDl = (element, ...properties) => {
    console.assert(element instanceof HTMLDListElement);
    initHTMLElement(element, { additionalClassName: 'dl' }, ...properties);
}

/**
 * Creates an instance of HTMLDListElement for tag 'dl'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const dl = (...properties) => {
    const element = document.createElement('dl');
    initDl(element, ...properties);
    return element;
}
