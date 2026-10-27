import { initInput } from "./input.js";
import { validateOnInput } from "./validateOnInput.js";

/**
 * Initializes an instance of HTMLInputElement as a url input, looking like a MUI text field.
 * 
 * It sets the element's type to 'url', then invokes the function `initInput(element, ...properties)`.
 * 
 * While the user types, the property `error` is set to true if the value is invalid (`element.validity.valid` is false). It is also set to true if the value does not match the `pattern` attribute, when there is one.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUrlInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'url';
    initInput(element, { additionalClassName: 'urlInput' }, ...properties);
    validateOnInput(element, true);
}

/**
 * Creates a url input.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const urlInput = (...properties) => {
    const element = document.createElement('input');
    initUrlInput(element, ...properties);
    return element;
}
