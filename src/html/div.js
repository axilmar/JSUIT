import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLDivElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDiv = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initHTMLElement(element, { additionalClassName: 'div' }, ...properties);
}

/**
 * Creates an instance of HTMLDivElement for tag 'div'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const div = (...properties) => {
    const element = document.createElement('div');
    initDiv(element, ...properties);
    return element;
}
