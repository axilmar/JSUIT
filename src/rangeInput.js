import { initInput } from "./input.js";
import { validateOnInput } from "./validateOnInput.js";
import { adoptStyleSheet } from "./utility.js";

import rangeInputStyleSheet from './rangeInput.css' with { type: 'css' };

adoptStyleSheet(rangeInputStyleSheet);

//keeps the filled part of the track in sync with the value
const updateFill = (element) => {
    const min = parseFloat(element.min || 0);
    const max = parseFloat(element.max || 100);
    const percent = max > min ? (element.value - min) * 100 / (max - min) : 0;
    element.style.setProperty('--rangeInput-fill', percent + '%');
};

/**
 * Initializes an instance of HTMLInputElement as a range input, looking like a MUI slider.
 *
 * It sets the element's type to 'range', then invokes the function `initInput(element, ...properties)`.
 *
 * The element gets the class 'rangeInput' by default; an `additionalClassName` property adds further classes
 * (the color classes 'rangeInput-secondary', '-error', '-warning', '-info', '-success').
 * Its `errorClassName` defaults to 'rangeInput-error'.
 * Its `busyClassName` defaults to 'rangeInput-busy'.
 *
 * While the user types, the property `error` is set to true if the value does not match the `pattern` attribute (when there is one).
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRangeInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'range';
    element.addEventListener('input', () => updateFill(element));
    initInput(element, { additionalClassName: 'rangeInput', errorClassName: 'rangeInput-error', busyClassName: 'rangeInput-busy' }, ...properties);
    validateOnInput(element);
    updateFill(element);
}

/**
 * Creates a range input.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rangeInput = (...properties) => {
    const element = document.createElement('input');
    initRangeInput(element, ...properties);
    return element;
}
