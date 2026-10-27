import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLOptionElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOption = (element, ...properties) => {
    console.assert(element instanceof HTMLOptionElement);
    initHTMLElement(element, { additionalClassName: 'option' }, ...properties);
}

/**
 * Creates an instance of HTMLOptionElement for tag 'option'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const option = (...properties) => {
    const element = document.createElement('option');
    initOption(element, ...properties);
    return element;
}
