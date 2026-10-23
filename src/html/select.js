import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLSelectElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSelect = (element, ...properties) => {
    console.assert(element instanceof HTMLSelectElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLSelectElement for tag 'select'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const select = (...properties) => {
    const element = document.createElement('select');
    initSelect(element, ...properties);
    return element;
}
