import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLFormElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForm = (element, ...properties) => {
    console.assert(element instanceof HTMLFormElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLFormElement for tag 'form'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const form = (...properties) => {
    const element = document.createElement('form');
    initForm(element, ...properties);
    return element;
}
