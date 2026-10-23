import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLLIElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLi = (element, ...properties) => {
    console.assert(element instanceof HTMLLIElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLLIElement for tag 'li'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const li = (...properties) => {
    const element = document.createElement('li');
    initLi(element, ...properties);
    return element;
}
