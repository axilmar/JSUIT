import { initInputField } from "./inputField.js";
import { validateOnInput } from "./validateOnInput.js";
import { adoptStyleSheet } from "./utility.js";

import fileInputStyleSheet from './fileInput.css' with { type: 'css' };

adoptStyleSheet(fileInputStyleSheet);

/**
 * Initializes an instance of HTMLInputElement as a file input, an outlined field whose
 * 'choose file' button looks like a MUI text button.
 *
 * It sets the element's type to 'file', then invokes the function `initInputField(element, ...properties)`.
 *
 * While the user types, the property `error` is set to true if the value is invalid: it does not match the `pattern` attribute, is shorter than `minLength` or longer than `maxLength`, or is missing while `required` is set.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'file';
    initInputField(element, { additionalClassName: 'fileInput' }, ...properties);
    validateOnInput(element, true);
}

/**
 * Creates a file input.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileInput = (...properties) => {
    const element = document.createElement('input');
    initFileInput(element, ...properties);
    return element;
}
