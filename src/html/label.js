import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLLabelElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLabel = (element, ...properties) => {
    console.assert(element instanceof HTMLLabelElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLLabelElement for tag 'label'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const label = (...properties) => {
    const element = document.createElement('label');
    initLabel(element, ...properties);
    return element;
}
