import { initButton } from "./button.js";

import textButtonStyleSheet from './textButton.css' with { type: 'css' };

document.adoptedStyleSheets = [...document.adoptedStyleSheets, textButtonStyleSheet];

/**
 * Initializes an instance of HTMLButtonElement as a text button.
 * 
 * It invokes the function `initButton(element, ...properties)`.
 * 
 * The element gets the class 'textButton' by default; a `className` property overrides it.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    initButton(element, { className: 'textButton' }, ...properties);
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
