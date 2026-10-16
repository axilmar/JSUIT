import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTableCaptionElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCaption = (element, ...properties) => {
    console.assert(element instanceof HTMLTableCaptionElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLTableCaptionElement for tag 'caption'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const caption = (...properties) => {
    const element = document.createElement('caption');
    initCaption(element, ...properties);
    return element;
}
