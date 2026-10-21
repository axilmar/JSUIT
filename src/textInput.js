import { initInputField } from "./inputField.js";
import { validateOnInput } from "./validateOnInput.js";

/**
 * Initializes an instance of HTMLInputElement as a text input, looking like a MUI text field.
 * 
 * It sets the element's type to 'text', then invokes the function `initInputField(element, ...properties)`.
 * 
 * While the user types, the property `error` is set to true if the value is invalid: it does not match the `pattern` attribute, is shorter than `minLength` or longer than `maxLength`, or is missing while `required` is set.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTextInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'text';
    initInputField(element, ...properties);
    validateOnInput(element, true);
}

/**
 * Creates a text input.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const textInput = (...properties) => {
    const element = document.createElement('input');
    initTextInput(element, ...properties);
    return element;
}
