import { initElement } from "./Element.js";

/**
 * Initializes an HTML element.
 * 
 * It invokes the function `initElement(htmlElement, ...properties)`.
 * 
 * @param {*} htmlElement the html element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHTMLElement = (htmlElement, ...properties) => {
    console.assert(htmlElement instanceof HTMLElement);
    initElement(htmlElement, ...properties);
}
