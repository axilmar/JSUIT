import { initButton } from "./button.js";
import { defineErrorProperty } from "./utility.js";

import containedButtonStyleSheet from './containedButton.css' with { type: 'css' };

document.adoptedStyleSheets = [...document.adoptedStyleSheets, containedButtonStyleSheet];

/**
 * Initializes an instance of HTMLButtonElement as a contained button.
 * 
 * It invokes the function `initButton(element, ...properties)`.
 * 
 * The element gets the class 'containedButton' by default; an `addClassName` property adds further classes.
 * 
 * The element gets a boolean property 'error' that adds/removes the style 'containedButton-error'.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initContainedButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    defineErrorProperty(element, 'containedButton-error');
    initButton(element, { addClassName: 'containedButton' }, ...properties);
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
