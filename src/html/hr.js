import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLHRElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHr = (element, ...properties) => {
    console.assert(element instanceof HTMLHRElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLHRElement for tag 'hr'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const hr = (...properties) => {
    const element = document.createElement('hr');
    initHr(element, ...properties);
    return element;
}
