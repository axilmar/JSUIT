import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLMenuElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMenu = (element, ...properties) => {
    console.assert(element instanceof HTMLMenuElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLMenuElement for tag 'menu'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const menu = (...properties) => {
    const element = document.createElement('menu');
    initMenu(element, ...properties);
    return element;
}
