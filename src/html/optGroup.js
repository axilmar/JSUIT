import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLOptGroupElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOptGroup = (element, ...properties) => {
    console.assert(element instanceof HTMLOptGroupElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLOptGroupElement for tag 'optgroup'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const optGroup = (...properties) => {
    const element = document.createElement('optgroup');
    initOptGroup(element, ...properties);
    return element;
}
