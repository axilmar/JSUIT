import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLMediaElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHTMLMediaElement = (element, ...properties) => {
    console.assert(element instanceof HTMLMediaElement);
    initHTMLElement(element, ...properties);
}
