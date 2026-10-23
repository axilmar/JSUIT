import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLSourceElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSource = (element, ...properties) => {
    console.assert(element instanceof HTMLSourceElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLSourceElement for tag 'source'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const source = (...properties) => {
    const element = document.createElement('source');
    initSource(element, ...properties);
    return element;
}
