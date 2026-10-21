import { initInputField } from "./inputField.js";
import { validateOnInput } from "./validateOnInput.js";
import { adoptStyleSheet } from "./utility.js";

import numberInputStyleSheet from './numberInput.css' with { type: 'css' };

adoptStyleSheet(numberInputStyleSheet);

const STEPPER_WIDTH = 28;       //width of the column of increment/decrement buttons at the right edge
const REPEAT_DELAY = 400;       //milliseconds before a held button starts repeating
const REPEAT_INTERVAL = 60;     //milliseconds between repeats

const HOVER_CLASSES = ['numberInput-hover-up', 'numberInput-hover-down'];
const PRESSED_CLASSES = ['numberInput-pressed-up', 'numberInput-pressed-down'];

//returns 'up' or 'down' if the pointer is over the increment or decrement button, or null
const getButton = (element, event) => {
    const rect = element.getBoundingClientRect();
    const border = parseFloat(getComputedStyle(element).borderRightWidth);
    if (element.disabled || element.readOnly || event.clientX < rect.right - border - STEPPER_WIDTH) {
        return null;
    }
    return event.clientY < rect.top + rect.height / 2 ? 'up' : 'down';
};

//sets the class of the buttons with the given classes ([up, down]) for the given button
const setButtonClass = (element, classes, button) => {
    element.classList.remove(...classes);
    if (button) {
        element.classList.add(classes[button === 'up' ? 0 : 1]);
    }
};

//steps the value, keeping the limits and the step of the element, and dispatches the events of a user's change
const step = (element, button) => {
    const before = element.value;
    if (button === 'up') {
        element.stepUp();
    }
    else {
        element.stepDown();
    }
    element.dispatchEvent(new Event('input', { bubbles: true }));
    if (element.value !== before) {
        element.dispatchEvent(new Event('change', { bubbles: true }));
    }
};

//adds the increment/decrement buttons of MUI's number field: two stacked buttons at the right edge of the field
const attachSteppers = (element) => {
    let timer = null;

    const stop = () => {
        clearTimeout(timer);
        clearInterval(timer);
        timer = null;
        setButtonClass(element, PRESSED_CLASSES, null);
        window.removeEventListener('pointerup', stop);
        window.removeEventListener('pointercancel', stop);
    };

    element.addEventListener('pointermove', (event) => {
        const button = getButton(element, event);
        setButtonClass(element, HOVER_CLASSES, button);
        element.style.cursor = button ? 'pointer' : '';
    });

    element.addEventListener('pointerleave', () => setButtonClass(element, HOVER_CLASSES, null));

    element.addEventListener('pointerdown', (event) => {
        const button = getButton(element, event);
        if (!button || event.button !== 0) {
            return;
        }
        event.preventDefault();
        element.focus();
        setButtonClass(element, PRESSED_CLASSES, button);
        step(element, button);
        timer = setTimeout(() => {
            timer = setInterval(() => step(element, button), REPEAT_INTERVAL);
        }, REPEAT_DELAY);
        window.addEventListener('pointerup', stop);
        window.addEventListener('pointercancel', stop);
    });
};

/**
 * Initializes an instance of HTMLInputElement as a number input, looking like a MUI number field.
 * 
 * It sets the element's type to 'number', then invokes the function `initInputField(element, ...properties)`.
 * 
 * While the user types, the property `error` is set to true if the value is invalid (`element.validity.valid` is false). It is also set to true if the value does not match the `pattern` attribute, when there is one.
 * 
 * The browser's spin buttons are replaced by MUI's increment and decrement buttons: two stacked buttons with arrow icons
 * at the right edge of the field, with hover and pressed states, repeating while held. They call `stepUp()` and `stepDown()`,
 * so `min`, `max` and `step` apply, and they dispatch the 'input' and 'change' events. The arrow keys work as in the browser.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNumberInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    element.type = 'number';
    initInputField(element, { additionalClassName: 'numberInput' }, ...properties);
    validateOnInput(element, true);
    attachSteppers(element);
}

/**
 * Creates a number input.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const numberInput = (...properties) => {
    const element = document.createElement('input');
    initNumberInput(element, ...properties);
    return element;
}
