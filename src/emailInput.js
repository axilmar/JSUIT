import { initInput } from "./input.js";
import { validateOnInput } from "./validateOnInput.js";

/**
 * Initializes an instance of HTMLInputElement as an email input, looking like a MUI text field.
 * 
 * It sets the element's type to 'email', then invokes the function `initInput(element, ...properties)`.
 * 
 * While the user types, the property `error` is set to true if the value is invalid (`element.validity.valid` is false). It is also set to true if the value does not match the `pattern` attribute, when there is one.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmailInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'email';
    initInput(element, ...properties);
    validateOnInput(element, true);
}

/**
 * Creates an email input.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const emailInput = (...properties) => {
    const element = document.createElement('input');
    initEmailInput(element, ...properties);
    return element;
}
