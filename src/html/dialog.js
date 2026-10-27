import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLDialogElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDialog = (element, ...properties) => {
    console.assert(element instanceof HTMLDialogElement);
    initHTMLElement(element, { additionalClassName: 'dialog' }, ...properties);
}

/**
 * Creates an instance of HTMLDialogElement for tag 'dialog'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const dialog = (...properties) => {
    const element = document.createElement('dialog');
    initDialog(element, ...properties);
    return element;
}
