import { initInput } from "./input.js";
import { validateOnInput } from "./validateOnInput.js";

/**
 * Initializes an instance of HTMLInputElement as a telephone number input, looking like a MUI text field.
 * 
 * It sets the element's type to 'tel', then invokes the function `initInput(element, ...properties)`.
 * 
 * While the user types, the property `error` is set to true if the value is invalid: it does not match the `pattern` attribute, is shorter than `minLength` or longer than `maxLength`, or is missing while `required` is set.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTelInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'tel';
    initInput(element, ...properties);
    validateOnInput(element, true);
}

/**
 * Creates a telephone number input.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const telInput = (...properties) => {
    const element = document.createElement('input');
    initTelInput(element, ...properties);
    return element;
}
