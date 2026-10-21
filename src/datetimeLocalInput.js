import { initInputField } from "./inputField.js";
import { validateOnInput } from "./validateOnInput.js";

/**
 * Initializes an instance of HTMLInputElement as a local date and time input, looking like a MUI text field.
 * 
 * It sets the element's type to 'datetime-local', then invokes the function `initInputField(element, ...properties)`.
 * 
 * While the user types, the property `error` is set to true if the value is invalid (`element.validity.valid` is false). It is also set to true if the value does not match the `pattern` attribute, when there is one.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDatetimeLocalInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'datetime-local';
    initInputField(element, ...properties);
    validateOnInput(element, true);
}

/**
 * Creates a local date and time input.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const datetimeLocalInput = (...properties) => {
    const element = document.createElement('input');
    initDatetimeLocalInput(element, ...properties);
    return element;
}
