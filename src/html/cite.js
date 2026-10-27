import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLCiteElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCite = (element, ...properties) => {
    console.assert(element instanceof HTMLElement);
    initHTMLElement(element, { additionalClassName: 'cite' }, ...properties);
}

/**
 * Creates an instance of HTMLCiteElement for tag 'cite'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const cite = (...properties) => {
    const element = document.createElement('cite');
    initCite(element, ...properties);
    return element;
}
