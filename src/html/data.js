import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLDataElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initData = (element, ...properties) => {
    console.assert(element instanceof HTMLDataElement);
    initHTMLElement(element, { additionalClassName: 'data' }, ...properties);
}

/**
 * Creates an instance of HTMLDataElement for tag 'data'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const data = (...properties) => {
    const element = document.createElement('data');
    initData(element, ...properties);
    return element;
}
