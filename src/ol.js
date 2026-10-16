import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLOListElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOl = (element, ...properties) => {
    console.assert(element instanceof HTMLOListElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLOListElement for tag 'ol'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const ol = (...properties) => {
    const element = document.createElement('ol');
    initOl(element, ...properties);
    return element;
}
