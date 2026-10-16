import { initButton } from "./button.js";
import { loadCSS } from "./utility.js";

loadCSS(new URL('./outlinedButton.css', import.meta.url).href);

/**
 * Initializes an instance of HTMLButtonElement as an outlined button.
 * 
 * It invokes the function `initButton(element, ...properties)`.
 * 
 * The element gets the class 'outlinedButton' by default; a `className` property overrides it.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutlinedButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    initButton(element, { className: 'outlinedButton' }, ...properties);
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
