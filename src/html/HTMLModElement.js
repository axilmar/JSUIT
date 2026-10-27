import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLModElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHTMLModElement = (element, ...properties) => {
    console.assert(element instanceof HTMLModElement);
    initHTMLElement(element, { additionalClassName: 'HTMLModElement' }, ...properties);
}

/**
 * Creates an instance of HTMLModElement for tag 'ins'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const ins = (...properties) => {
    const element = document.createElement('ins');
    initHTMLModElement(element, { additionalClassName: 'ins' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLModElement for tag 'del'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const del = (...properties) => {
    const element = document.createElement('del');
    initHTMLModElement(element, { additionalClassName: 'del' }, ...properties);
    return element;
}
