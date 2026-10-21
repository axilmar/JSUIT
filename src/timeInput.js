import { initInputField } from "./inputField.js";
import { validateOnInput } from "./validateOnInput.js";

/**
 * Initializes an instance of HTMLInputElement as a time input, looking like a MUI text field.
 * 
 * It sets the element's type to 'time', then invokes the function `initInputField(element, ...properties)`.
 * 
 * While the user types, the property `error` is set to true if the value is invalid (`element.validity.valid` is false). It is also set to true if the value does not match the `pattern` attribute, when there is one.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimeInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'time';
    initInputField(element, ...properties);
    validateOnInput(element, true);
}

/**
 * Creates a time input.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const timeInput = (...properties) => {
    const element = document.createElement('input');
    initTimeInput(element, ...properties);
    return element;
}
