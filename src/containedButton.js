import { initButton } from "./button.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "./utility.js";

import containedButtonStyleSheet from './containedButton.css' with { type: 'css' };

adoptStyleSheet(containedButtonStyleSheet);

/**
 * Initializes an instance of HTMLButtonElement as a contained button.
 * 
 * It invokes the function `initButton(element, ...properties)`.
 * 
 * The element gets the class 'containedButton' by default; an `additionalClassName` property adds further classes.
 * Its `errorClassName` defaults to 'containedButton-error'.
 * Its `busyClassName` defaults to 'containedButton-busy'.
 * 
 * The element gets the property 'displaySize', which accepts 'small', 'medium' (the default) and 'large', with the
 * MUI's button sizes (padding and font size: small 4px 10px, 13px; medium 6px 16px, 14px; large 8px 22px, 15px).
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContainedButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    defineDisplaySizeProperty(element, 'containedButton-small', 'containedButton-large');
    initButton(element, { additionalClassName: 'containedButton', errorClassName: 'containedButton-error', busyClassName: 'containedButton-busy' }, ...properties);
}

/**
 * Creates a contained button.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const containedButton = (...properties) => {
    const element = document.createElement('button');
    initContainedButton(element, ...properties);
    return element;
}
