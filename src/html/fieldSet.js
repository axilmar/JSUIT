import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLFieldSetElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFieldSet = (element, ...properties) => {
    console.assert(element instanceof HTMLFieldSetElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLFieldSetElement for tag 'fieldset'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const fieldSet = (...properties) => {
    const element = document.createElement('fieldset');
    initFieldSet(element, ...properties);
    return element;
}
