import { initInput } from "./input.js";
import { validateOnInput } from "./validateOnInput.js";
import { adoptStyleSheet } from "../utility/utility.js";

import colorInputStyleSheet from './colorInput.css' with { type: 'css' };

adoptStyleSheet(colorInputStyleSheet);

/**
 * Initializes an instance of HTMLInputElement as a color input, an outlined field showing the color as a swatch.
 *
 * It sets the element's type to 'color', then invokes the function `initInput(element, ...properties)`.
 *
 * While the user types, the property `error` is set to true if the value does not match the `pattern` attribute (when there is one).
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initColorInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'color';
    initInput(element, { additionalClassName: 'colorInput' }, ...properties);
    validateOnInput(element);
}

/**
 * Creates a color input.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const colorInput = (...properties) => {
    const element = document.createElement('input');
    initColorInput(element, ...properties);
    return element;
}
