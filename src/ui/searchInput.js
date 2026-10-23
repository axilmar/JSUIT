import { initInput } from "./input.js";
import { validateOnInput } from "./validateOnInput.js";
import { adoptStyleSheet } from "../utility/utility.js";

import searchInputStyleSheet from './searchInput.css' with { type: 'css' };

adoptStyleSheet(searchInputStyleSheet);

/**
 * Initializes an instance of HTMLInputElement as a search input, looking like a MUI search text field.
 *
 * It sets the element's type to 'search', then invokes the function `initInput(element, ...properties)`.
 *
 * The element gets the class 'searchInput', which draws MUI's search icon at the left edge of the field and
 * replaces the browser's clear button with MUI's close icon.
 *
 * While the user types, the property `error` is set to true if the value is invalid: it does not match the `pattern` attribute, is shorter than `minLength` or longer than `maxLength`, or is missing while `required` is set.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSearchInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'search';
    initInput(element, { additionalClassName: 'searchInput' }, ...properties);
    validateOnInput(element, true);
}

/**
 * Creates a search input.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const searchInput = (...properties) => {
    const element = document.createElement('input');
    initSearchInput(element, ...properties);
    return element;
}
