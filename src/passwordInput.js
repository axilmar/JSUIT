import { initInput } from "./input.js";
import { validateOnInput } from "./validateOnInput.js";
import { adoptStyleSheet } from "./utility.js";

import passwordInputStyleSheet from './passwordInput.css' with { type: 'css' };

adoptStyleSheet(passwordInputStyleSheet);

const VISIBLE_CLASS = 'passwordInput-visible';
const TOGGLE_WIDTH = 44;    //width of the area at the right edge that holds the visibility icon

//defines the boolean property 'visible': true shows the password as text
const defineVisibleProperty = (element) => {
    Object.defineProperty(element, 'visible', {
        configurable: true,
        enumerable: true,
        get: () => element.type === 'text',
        set: (value) => {
            value = !!value;
            element.type = value ? 'text' : 'password';
            element.classList.toggle(VISIBLE_CLASS, value);
        }
    });
};

//returns true if the mouse event happened over the visibility icon
const isOverToggle = (element, event) => {
    return event.clientX >= element.getBoundingClientRect().right - TOGGLE_WIDTH;
};

const mouseMoveListener = (event) => {
    const element = event.currentTarget;
    element.style.cursor = !element.disabled && isOverToggle(element, event) ? 'pointer' : '';
};

const clickListener = (event) => {
    const element = event.currentTarget;
    if (!element.disabled && isOverToggle(element, event)) {
        element.visible = !element.visible;
    }
};

/**
 * Initializes an instance of HTMLInputElement as a password input, looking like a MUI password text field.
 *
 * It sets the element's type to 'password', then invokes the function `initInput(element, ...properties)`.
 *
 * The element gets the class 'passwordInput', which draws MUI's visibility icon at the right edge of the field.
 * Clicking the icon toggles the boolean property 'visible' (default false), which switches the field between
 * showing the password as bullets and as text.
 *
 * While the user types, the property `error` is set to true if the value is invalid: it does not match the `pattern` attribute, is shorter than `minLength` or longer than `maxLength`, or is missing while `required` is set.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPasswordInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'password';
    defineVisibleProperty(element);
    element.addEventListener('mousemove', mouseMoveListener);
    element.addEventListener('click', clickListener);
    initInput(element, { additionalClassName: 'passwordInput' }, ...properties);
    validateOnInput(element, true);
}

/**
 * Creates a password input.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const passwordInput = (...properties) => {
    const element = document.createElement('input');
    initPasswordInput(element, ...properties);
    return element;
}
