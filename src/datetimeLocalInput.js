import { initInputField } from "./inputField.js";
import { validateOnInput } from "./validateOnInput.js";
import { attachDateTimePicker } from "./pickerInput.js";
import { attachSegmentedInput } from "./segmentedInput.js";

/**
 * Initializes an instance of HTMLInputElement as a local date and time input, looking like a MUI text field.
 * 
 * It invokes the function `initInputField(element, ...properties)`.
 * 
 * While the user types, the property `error` is set to true if the value is invalid (`element.validity.valid` is false). It is also set to true if the value does not match the `pattern` attribute, when there is one.
 * 
 * The browser's popup is replaced by a custom picker that looks like MUI's (see `attachDateTimePicker` in pickerInput.js).
 * 
 * The browser's own 'datetime-local' input is not used, because its popup cannot be suppressed in every browser: the element is a segmented
 * text input (see `attachSegmentedInput` in segmentedInput.js) whose `type` is 'datetime-local' and whose `value` is the ISO value of that type.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDatetimeLocalInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    initInputField(element, ...properties);
    validateOnInput(element, true);
    attachSegmentedInput(element, 'datetime-local');
    attachDateTimePicker(element);
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
