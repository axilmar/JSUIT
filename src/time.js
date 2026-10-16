import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTimeElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTime = (element, ...properties) => {
    console.assert(element instanceof HTMLTimeElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLTimeElement for tag 'time'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const time = (...properties) => {
    const element = document.createElement('time');
    initTime(element, ...properties);
    return element;
}
