import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTextAreaElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextArea = (element, ...properties) => {
    console.assert(element instanceof HTMLTextAreaElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLTextAreaElement for tag 'textarea'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const textArea = (...properties) => {
    const element = document.createElement('textarea');
    initTextArea(element, ...properties);
    return element;
}
