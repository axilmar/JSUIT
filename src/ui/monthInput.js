import { initInput } from "./input.js";
import { validateOnInput } from "./validateOnInput.js";
import { attachDateTimePicker, attachSegmentedInput } from "./dateTimeUtil.js";

/**
 * Initializes an instance of HTMLInputElement as a month input, looking like a MUI text field.
 * 
 * It invokes the function `initInput(element, ...properties)`.
 * 
 * While the user types, the property `error` is set to true if the value is invalid (`element.validity.valid` is false). It is also set to true if the value does not match the `pattern` attribute, when there is one.
 * 
 * The element gets the properties 'futureEnabled' and 'pastEnabled' (boolean, default true). If one is false, a value after (futureEnabled) or
 * before (pastEnabled) the current time, compared by month, is invalid (a custom validity error, as for `min` and `max`), and the
 * popup picker does not allow selecting it.
 * 
 * The browser's popup is replaced by a custom picker that looks like MUI's (see `attachDateTimePicker` in dateTimeUtil.js).
 * 
 * The browser's own 'month' input is not used, because its popup cannot be suppressed in every browser: the element is a segmented
 * text input (see `attachSegmentedInput` in dateTimeUtil.js) whose `type` is 'month' and whose `value` is the ISO value of that type.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMonthInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    initInput(element, { additionalClassName: 'monthInput' }, ...properties);
    validateOnInput(element, true);
    attachSegmentedInput(element, 'month');
    attachDateTimePicker(element);
}

/**
 * Creates a month input.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const monthInput = (...properties) => {
    const element = document.createElement('input');
    initMonthInput(element, ...properties);
    return element;
}
