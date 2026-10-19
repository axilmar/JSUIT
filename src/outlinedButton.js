import { initButton } from "./button.js";
import { adoptStyleSheet } from "./utility.js";

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
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutlinedButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
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
