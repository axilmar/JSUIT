import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLProgressElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initProgress = (element, ...properties) => {
    console.assert(element instanceof HTMLProgressElement);
    initHTMLElement(element, { additionalClassName: 'progress' }, ...properties);
}

/**
 * Creates an instance of HTMLProgressElement for tag 'progress'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const progress = (...properties) => {
    const element = document.createElement('progress');
    initProgress(element, ...properties);
    return element;
}
