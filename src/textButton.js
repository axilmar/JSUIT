import { initButton } from "./button.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "./utility.js";

import textButtonStyleSheet from './textButton.css' with { type: 'css' };

adoptStyleSheet(textButtonStyleSheet);

/**
 * Initializes an instance of HTMLButtonElement as a text button.
 * 
 * It invokes the function `initButton(element, ...properties)`.
 * 
 * The element gets the class 'textButton' by default; an `additionalClassName` property adds further classes.
 * Its `errorClassName` defaults to 'textButton-error'.
 * Its `busyClassName` defaults to 'textButton-busy'.
 * 
 * The element gets the property 'displaySize', which accepts 'small', 'medium' (the default) and 'large', with the
 * MUI's button sizes (padding and font size: small 4px 5px, 13px; medium 6px 8px, 14px; large 8px 11px, 15px).
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    defineDisplaySizeProperty(element, 'textButton-small', 'textButton-large');
    initButton(element, { additionalClassName: 'textButton', errorClassName: 'textButton-error', busyClassName: 'textButton-busy' }, ...properties);
}

/**
 * Creates a text button.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const textButton = (...properties) => {
    const element = document.createElement('button');
    initTextButton(element, ...properties);
    return element;
}
