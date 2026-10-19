import { initButton } from "./button.js";
import { adoptStyleSheet } from "./utility.js";

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
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContainedButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
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
