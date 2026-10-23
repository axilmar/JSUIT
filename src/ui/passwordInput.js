import { initInput } from "./input.js";
import { validateOnInput } from "./validateOnInput.js";
import { adoptStyleSheet } from "../utility/utility.js";

import passwordInputStyleSheet from './passwordInput.css' with { type: 'css' };

adoptStyleSheet(passwordInputStyleSheet);

const TOGGLE_CLASS = 'passwordInput-toggle';
const UNMASKED_CLASS = 'passwordInput-unmasked';
const TOGGLE_WIDTH = 44;    //width of the area at the right edge that holds the visibility icon
const DEFAULT_MODE = 'unmaskedClicked';
const MODES = ['masked', 'unmasked', 'unmaskedClicked', 'unmaskedToggled'];

const iconClickHandlers = new WeakMap();   //element -> the function to invoke when the icon is clicked

//defines the property 'maskMode'
const defineMaskModeProperty = (element) => {
    let mode = DEFAULT_MODE;
    let unmasked = false;

    //the next click outside of the element masks the password again (mode 'unmaskedClicked')
    const documentClickListener = (event) => {
        if (!element.contains(event.target) && event.target !== element) {
            update(false);
        }
    };

    const update = (value) => {
        unmasked = value;
        const shown = mode === 'unmasked' || unmasked;
        element.type = shown ? 'text' : 'password';
        element.classList.toggle(UNMASKED_CLASS, shown);
        element.classList.toggle(TOGGLE_CLASS, mode === 'unmaskedClicked' || mode === 'unmaskedToggled');
        document.removeEventListener('click', documentClickListener, true);
        if (mode === 'unmaskedClicked' && unmasked) {
            document.addEventListener('click', documentClickListener, true);
        }
    };

    Object.defineProperty(element, 'maskMode', {
        configurable: true,
        enumerable: true,
        get: () => mode,
        set: (value) => {
            console.assert(MODES.includes(value));
            mode = MODES.includes(value) ? value : 'masked';
            update(false);
        }
    });

    //the click on the icon toggles the mask
    iconClickHandlers.set(element, () => update(!unmasked));
};

//returns true if the mouse event happened over the visibility icon
const isOverToggle = (element, event) => {
    return element.classList.contains(TOGGLE_CLASS) && event.clientX >= element.getBoundingClientRect().right - TOGGLE_WIDTH;
};

const mouseMoveListener = (event) => {
    const element = event.currentTarget;
    element.style.cursor = !element.disabled && isOverToggle(element, event) ? 'pointer' : '';
};

const clickListener = (event) => {
    const element = event.currentTarget;
    if (!element.disabled && isOverToggle(element, event)) {
        iconClickHandlers.get(element)();
    }
};

/**
 * Initializes an instance of HTMLInputElement as a password input, looking like a MUI password text field.
 *
 * It sets the element's type to 'password', then invokes the function `initInput(element, ...properties)`.
 *
 * The element gets the class 'passwordInput'; the modes with an icon add the class 'passwordInput-toggle', which draws it at the right edge of the field.
 * The property 'maskMode' (default 'unmaskedClicked') defines when the password is shown as text:
 * - 'masked': always masked, without an icon.
 * - 'unmasked': always shown as text, without an icon.
 * - 'unmaskedClicked': the field has MUI's visibility icon; clicking it shows the text; clicking it again, or clicking anywhere else on the page except on the field, masks it again.
 * - 'unmaskedToggled': the field has the icon; clicking it toggles between masked (icon 'visibility') and shown as text (icon 'visibility off').
 * Setting the property masks the password. Any other value is an error (it is treated as 'masked').
 *
 * While the user types, the property `error` is set to true if the value is invalid: it does not match the `pattern` attribute, is shorter than `minLength` or longer than `maxLength`, or is missing while `required` is set.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPasswordInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'password';
    defineMaskModeProperty(element);
    element.maskMode = DEFAULT_MODE;
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
