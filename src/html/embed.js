import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLEmbedElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmbed = (element, ...properties) => {
    console.assert(element instanceof HTMLEmbedElement);
    initHTMLElement(element, { additionalClassName: 'embed' }, ...properties);
}

/**
 * Creates an instance of HTMLEmbedElement for tag 'embed'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const embed = (...properties) => {
    const element = document.createElement('embed');
    initEmbed(element, ...properties);
    return element;
}
