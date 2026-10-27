import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTableElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTable = (element, ...properties) => {
    console.assert(element instanceof HTMLTableElement);
    initHTMLElement(element, { additionalClassName: 'table' }, ...properties);
}

/**
 * Creates an instance of HTMLTableElement for tag 'table'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const table = (...properties) => {
    const element = document.createElement('table');
    initTable(element, ...properties);
    return element;
}
