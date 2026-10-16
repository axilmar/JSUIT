import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTableColElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHTMLTableColElement = (element, ...properties) => {
    console.assert(element instanceof HTMLTableColElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLTableColElement for tag 'colgroup'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const colGroup = (...properties) => {
    const element = document.createElement('colgroup');
    initHTMLTableColElement(element, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLTableColElement for tag 'col'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const col = (...properties) => {
    const element = document.createElement('col');
    initHTMLTableColElement(element, ...properties);
    return element;
}
