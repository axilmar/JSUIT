import { initInput } from "./input.js";
import { validateOnInput } from "./validateOnInput.js";
import { attachDateTimePicker } from "./pickerInput.js";
import { attachSegmentedInput } from "./segmentedInput.js";

/**
 * Initializes an instance of HTMLInputElement as a time input, looking like a MUI text field.
 * 
 * It invokes the function `initInput(element, ...properties)`.
 * 
 * While the user types, the property `error` is set to true if the value is invalid (`element.validity.valid` is false). It is also set to true if the value does not match the `pattern` attribute, when there is one.
 * 
 * The browser's popup is replaced by a custom picker that looks like MUI's (see `attachDateTimePicker` in pickerInput.js).
 * 
 * The browser's own 'time' input is not used, because its popup cannot be suppressed in every browser: the element is a segmented
 * text input (see `attachSegmentedInput` in segmentedInput.js) whose `type` is 'time' and whose `value` is the ISO value of that type.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimeInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    initInput(element, ...properties);
    validateOnInput(element, true);
    attachSegmentedInput(element, 'time');
    attachDateTimePicker(element);
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
