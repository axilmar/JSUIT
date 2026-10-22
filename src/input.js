import { initInputBase } from "./inputBase.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "./utility.js";

import inputStyleSheet from './input.css' with { type: 'css' };

adoptStyleSheet(inputStyleSheet);

const LABEL_CLASS = 'input-label';
const LABEL_SHRUNK_CLASS = 'input-label-shrunk';
const LABELED_CLASS = 'input-labeled';
const CONTAINER_CLASS = 'input-container';
const VARIANTS = ['outlined', 'filled', 'standard'];     //the class of a variant is 'input-' followed by its name

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

//defines the property 'variant'
const defineVariantProperty = (element) => {
    let variant;

    Object.defineProperty(element, 'variant', {
        configurable: true,
        enumerable: true,
        get: () => variant,
        set: (value) => {
            console.assert(VARIANTS.includes(value));
            element.classList.remove(...VARIANTS.map(name => 'input-' + name));
            element.classList.add('input-' + value);
            variant = value;
        }
    });
};

/**
 * Initializes an instance of HTMLInputElement as an input field, looking like MUI's text field.
 * 
 * It invokes the function `initInputBase(element, ...properties)`.
 * 
 * The element gets the class 'input' by default; an `additionalClassName` property adds further classes
 * (the color classes 'input-secondary', '-error', '-warning', '-info', '-success' change the focus color).
 * Its `errorClassName` defaults to 'input-error'.
 * Its `busyClassName` defaults to 'input-busy'.
 * 
 * The element gets the property 'variant', which accepts 'outlined' (the default), 'filled' and 'standard': the looks of the
 * variants of MUI's text field. In the standard variant there is only an underline, in the filled one a gray background
 * with an underline, and in the outlined one a rounded border. The element has the class 'input-' and the variant.
 * 
 * The element gets the property 'displaySize', which accepts 'small', 'medium' (the default) and 'large'. The small and medium
 * sizes are MUI's: the vertical padding is 8.5px and 16.5px, so the height is 40px and 56px for the 16px font. MUI has no large
 * input, so the large size extends them: a 1.25rem font with 20px vertical padding (a height of about 69px). The label follows the size.
 * 
 * The element gets a property 'label', which accepts an element or a string (a string becomes the text of a span).
 * The label is shown like the floating label of MUI's text field: inside the field while it is empty and not focused,
 * shrunk otherwise (above the field in the standard variant, on the top of the field in the filled one, on the border in the outlined
 * one; always shrunk for the types that always show something, like date and color).
 * An input cannot contain the label, so the input is wrapped in a span of class 'input-container' together with the label,
 * as soon as it has a parent; use the container (`element.parentNode`) to move the field. In the outlined variant, the label has
 * an opaque background (css property `--input-label-background`, default white) that opens the notch in the border.
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
export const initInput = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    defineDisplaySizeProperty(element, 'input-small', 'input-large');
    defineVariantProperty(element);
    defineLabelProperty(element);
    element.variant = 'outlined';
    initInputBase(element, { additionalClassName: 'input', errorClassName: 'input-error', busyClassName: 'input-busy' }, ...properties);
}

/**
 * Creates an input field of type 'text'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const input = (...properties) => {
    const element = document.createElement('input');
    element.type = 'text';
    initInput(element, ...properties);
    return element;
}
