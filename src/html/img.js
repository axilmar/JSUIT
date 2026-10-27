import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLImageElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImg = (element, ...properties) => {
    console.assert(element instanceof HTMLImageElement);
    initHTMLElement(element, { additionalClassName: 'img' }, ...properties);
}

/**
 * Creates an instance of HTMLImageElement for tag 'img'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const img = (...properties) => {
    const element = document.createElement('img');
    initImg(element, ...properties);
    return element;
}
