import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLUListElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUl = (element, ...properties) => {
    console.assert(element instanceof HTMLUListElement);
    initHTMLElement(element, { additionalClassName: 'ul' }, ...properties);
}

/**
 * Creates an instance of HTMLUListElement for tag 'ul'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const ul = (...properties) => {
    const element = document.createElement('ul');
    initUl(element, ...properties);
    return element;
}
