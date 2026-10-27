import { initInput } from "./input.js";
import { validateOnInput } from "./validateOnInput.js";
import { attachDateTimePicker, attachSegmentedInput } from "./dateTimeUtil.js";

/**
 * Initializes an instance of HTMLInputElement as a time input, looking like a MUI text field.
 * 
 * It invokes the function `initInput(element, ...properties)`.
 * 
 * While the user types, the property `error` is set to true if the value is invalid (`element.validity.valid` is false). It is also set to true if the value does not match the `pattern` attribute, when there is one.
 * 
 * The element gets the property 'hour12' (boolean, default false): the time is a 24-hour time (hours 00 to 23, without AM/PM) in the field and in
 * the popup picker; if it is true, it is a 12-hour time (hours 01 to 12, with AM/PM).
 *
 * The element also gets the property 'seconds' (boolean, default false): if it is true, the time has seconds, in the field, in the popup picker (which
 * has a list for them) and in the value ('14:30:15'); otherwise the time is only hours and minutes ('14:30').
 *
 * The element gets the properties 'futureEnabled' and 'pastEnabled' (boolean, default true). If one is false, a value after (futureEnabled) or
 * before (pastEnabled) the current time, compared by minute (or second, if `seconds` is true), is invalid (a custom validity error, as for `min` and `max`), and the
 * popup picker does not allow selecting it.
 * 
 * The browser's popup is replaced by a custom picker that looks like MUI's (see `attachDateTimePicker` in dateTimeUtil.js).
 * 
 * The browser's own 'time' input is not used, because its popup cannot be suppressed in every browser: the element is a segmented
 * text input (see `attachSegmentedInput` in dateTimeUtil.js) whose `type` is 'time' and whose `value` is the ISO value of that type.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimeInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    initInput(element, { additionalClassName: 'timeInput' }, ...properties);
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
