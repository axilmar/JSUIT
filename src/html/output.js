import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLOutputElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutput = (element, ...properties) => {
    console.assert(element instanceof HTMLOutputElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLOutputElement for tag 'output'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const output = (...properties) => {
    const element = document.createElement('output');
    initOutput(element, ...properties);
    return element;
}
