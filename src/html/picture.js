import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLPictureElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPicture = (element, ...properties) => {
    console.assert(element instanceof HTMLPictureElement);
    initHTMLElement(element, { additionalClassName: 'picture' }, ...properties);
}

/**
 * Creates an instance of HTMLPictureElement for tag 'picture'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const picture = (...properties) => {
    const element = document.createElement('picture');
    initPicture(element, ...properties);
    return element;
}
