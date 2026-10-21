import { initButton } from "./button.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "./utility.js";

import outlinedButtonStyleSheet from './outlinedButton.css' with { type: 'css' };

adoptStyleSheet(outlinedButtonStyleSheet);

/**
 * Initializes an instance of HTMLButtonElement as an outlined button.
 * 
 * It invokes the function `initButton(element, ...properties)`.
 * 
 * The element gets the class 'outlinedButton' by default; an `additionalClassName` property adds further classes.
 * Its `errorClassName` defaults to 'outlinedButton-error'.
 * Its `busyClassName` defaults to 'outlinedButton-busy'.
 * 
 * The element gets the property 'displaySize', which accepts 'small', 'medium' (the default) and 'large', with the
 * MUI's button sizes (padding and font size, without the 1px border: small 4px 10px, 13px; medium 6px 16px, 14px; large 8px 22px, 15px).
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutlinedButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    defineDisplaySizeProperty(element, 'outlinedButton-small', 'outlinedButton-large');
    initButton(element, { additionalClassName: 'outlinedButton', errorClassName: 'outlinedButton-error', busyClassName: 'outlinedButton-busy' }, ...properties);
}

/**
 * Creates an outlined button.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const outlinedButton = (...properties) => {
    const element = document.createElement('button');
    initOutlinedButton(element, ...properties);
    return element;
}
