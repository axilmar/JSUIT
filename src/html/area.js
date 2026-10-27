import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLAreaElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArea = (element, ...properties) => {
    console.assert(element instanceof HTMLAreaElement);
    initHTMLElement(element, { additionalClassName: 'area' }, ...properties);
}

/**
 * Creates an instance of HTMLAreaElement for tag 'area'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const area = (...properties) => {
    const element = document.createElement('area');
    initArea(element, ...properties);
    return element;
}
