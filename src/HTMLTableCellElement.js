import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTableCellElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHTMLTableCellElement = (element, ...properties) => {
    console.assert(element instanceof HTMLTableCellElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLTableCellElement for tag 'th'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const th = (...properties) => {
    const element = document.createElement('th');
    initHTMLTableCellElement(element, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLTableCellElement for tag 'td'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const td = (...properties) => {
    const element = document.createElement('td');
    initHTMLTableCellElement(element, ...properties);
    return element;
}
