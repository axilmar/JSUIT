import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTableRowElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTr = (element, ...properties) => {
    console.assert(element instanceof HTMLTableRowElement);
    initHTMLElement(element, { additionalClassName: 'tr' }, ...properties);
}

/**
 * Creates an instance of HTMLTableRowElement for tag 'tr'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const tr = (...properties) => {
    const element = document.createElement('tr');
    initTr(element, ...properties);
    return element;
}
