import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLIFrameElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initIframe = (element, ...properties) => {
    console.assert(element instanceof HTMLIFrameElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLIFrameElement for tag 'iframe'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const iframe = (...properties) => {
    const element = document.createElement('iframe');
    initIframe(element, ...properties);
    return element;
}
