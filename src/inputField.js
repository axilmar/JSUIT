import { initInput } from "./input.js";
import { adoptStyleSheet } from "./utility.js";

import inputFieldStyleSheet from './inputField.css' with { type: 'css' };

adoptStyleSheet(inputFieldStyleSheet);

const SMALL_CLASS = 'inputField-small';

//defines the boolean property 'small'
const defineSmallProperty = (element) => {
    Object.defineProperty(element, 'small', {
        configurable: true,
        enumerable: true,
        get: () => element.classList.contains(SMALL_CLASS),
        set: (value) => { element.classList.toggle(SMALL_CLASS, !!value); }
    });
};

const LABEL_CLASS = 'inputField-label';
const LABEL_SHRUNK_CLASS = 'inputField-label-shrunk';
const LABELED_CLASS = 'inputField-labeled';
const CONTAINER_CLASS = 'inputField-container';

//the types that always show something in the field (a format, a swatch, an icon), so their label is always shrunk
const ALWAYS_SHRUNK_TYPES = ['date', 'datetime-local', 'month', 'week', 'time', 'color', 'file', 'search'];

const getValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').get;
const setValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;

//shrinks the label (moves it to the border) if the field has focus or a value, or if the type always shows something
const updateLabel = (element, state) => {
    if (state.label) {
        const shrunk = ALWAYS_SHRUNK_TYPES.includes(element.type) || document.activeElement === element || getValue.call(element) !== '';
        state.label.classList.toggle(LABEL_SHRUNK_CLASS, shrunk);
    }
};

//puts the input and the label in a container, if the input has a parent; returns true if the container exists
const placeLabel = (element, state) => {
    if (!state.container) {
        if (!element.parentNode) {
            return false;
        }
        state.container = document.createElement('span');
        state.container.className = CONTAINER_CLASS;
        element.replaceWith(state.container);
        state.container.append(element);
    }
    state.container.append(state.label);
    return true;
};

//defines the property 'label'
const defineLabelProperty = (element) => {
    const state = { label: null, container: null, observer: null };

    //an element without a parent cannot get its container yet; it is placed when the element is first rendered
    const placeWhenRendered = () => {
        if (state.observer) {
            return;
        }
        state.observer = new ResizeObserver(() => {
            if (!state.label || placeLabel(element, state)) {
                state.observer.disconnect();
                state.observer = null;
            }
        });
        state.observer.observe(element);
    };

    Object.defineProperty(element, 'value', {
        configurable: true,
        enumerable: true,
        get: () => getValue.call(element),
        set: (value) => { setValue.call(element, value); updateLabel(element, state); }
    });

    for (const eventName of ['input', 'change', 'focus', 'blur']) {
        element.addEventListener(eventName, () => updateLabel(element, state));
    }

    Object.defineProperty(element, 'label', {
        configurable: true,
        enumerable: true,
        get: () => state.label,
        set: (label) => {
            console.assert(label === null || label === undefined || typeof label === 'string' || label instanceof Element);
            if (typeof label === 'string') {
                const span = document.createElement('span');
                span.textContent = label;
                label = span;
            }
            state.label?.remove();
            state.label = label ?? null;
            element.classList.toggle(LABELED_CLASS, state.label !== null);
            if (state.label) {
                state.label.classList.add(LABEL_CLASS);
                updateLabel(element, state);
                if (!placeLabel(element, state)) {
                    placeWhenRendered();
                }
            }
        }
    });
};

/**
 * Initializes an instance of HTMLInputElement as an input field, looking like MUI's outlined text field.
 * 
 * It invokes the function `initInput(element, ...properties)`.
 * 
 * The element gets the class 'inputField' by default; an `additionalClassName` property adds further classes
 * (the color classes 'inputField-secondary', '-error', '-warning', '-info', '-success' change the focus color).
 * Its `errorClassName` defaults to 'inputField-error'.
 * Its `busyClassName` defaults to 'inputField-busy'.
 * 
 * The element gets a boolean property 'small' (default false), for MUI's small (dense) size.
 * 
 * The element gets a property 'label', which accepts an element or a string (a string becomes the text of a span).
 * The label is shown like the floating label of MUI's outlined text field: inside the field while it is empty and not focused,
 * shrunk on the border otherwise (always shrunk for the types that always show something, like date and color).
 * An input cannot contain the label, so the input is wrapped in a span of class 'inputField-container' together with the label,
 * as soon as it has a parent; use the container (`element.parentNode`) to move the field. The label has an opaque background
 * (css property `--inputField-label-background`, default white) that opens the notch in the border.
 * Setting it to null removes the label.
 * 
 * MUI's helper text and adornments are not available, because an input element cannot contain them.
 * 
 * The label is not available for the range input, which has no rectangular border.
 * 
 * The 'type' of the element must be set before this function is invoked.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInputField = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    defineSmallProperty(element);
    defineLabelProperty(element);
    initInput(element, { additionalClassName: 'inputField', errorClassName: 'inputField-error', busyClassName: 'inputField-busy' }, ...properties);
}

/**
 * Creates an input field of type 'text'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const inputField = (...properties) => {
    const element = document.createElement('input');
    element.type = 'text';
    initInputField(element, ...properties);
    return element;
}
