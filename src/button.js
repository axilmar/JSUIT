import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLButtonElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLButtonElement for tag 'button'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const button = (...properties) => {
    const element = document.createElement('button');
    initButton(element, ...properties);
    return element;
}
