import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLObjectElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHTMLObjectElement = (element, ...properties) => {
    console.assert(element instanceof HTMLObjectElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLObjectElement for tag 'object'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const object = (...properties) => {
    const element = document.createElement('object');
    initHTMLObjectElement(element, ...properties);
    return element;
}
