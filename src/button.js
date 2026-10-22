import { initButtonBase } from "./buttonBase.js";
import { adoptStyleSheet, defineDisplaySizeProperty } from "./utility.js";

import buttonStyleSheet from './button.css' with { type: 'css' };

adoptStyleSheet(buttonStyleSheet);

const VARIANTS = ['text', 'outlined', 'contained'];     //the class of a variant is 'button-' followed by its name

//defines the property 'variant'
const defineVariantProperty = (element) => {
    let variant;

    Object.defineProperty(element, 'variant', {
        configurable: true,
        enumerable: true,
        get: () => variant,
        set: (value) => {
            console.assert(VARIANTS.includes(value));
            element.classList.remove(...VARIANTS.map(name => 'button-' + name));
            element.classList.add('button-' + value);
            variant = value;
        }
    });
};

/**
 * Initializes an instance of HTMLButtonElement as a button, looking like MUI's button.
 *
 * It invokes the function `initButtonBase(element, ...properties)`.
 *
 * The element gets the class 'button' by default; an `additionalClassName` property adds further classes
 * (the color classes 'button-secondary', '-error', '-warning', '-info', '-success').
 * Its `errorClassName` defaults to 'button-error'.
 * Its `busyClassName` defaults to 'button-busy'.
 *
 * The element gets the property 'variant', which accepts 'outlined' (the default), 'text' and 'contained': the looks of the
 * variants of MUI's button. The element has the class 'button-' and the variant.
 *
 * The element gets the property 'displaySize', which accepts 'small', 'medium' (the default) and 'large', with the
 * MUI's button sizes (padding and font size, without the 1px border of the outlined variant; text: small 4px 5px, 13px,
 * medium 6px 8px, 14px, large 8px 11px, 15px; outlined and contained: small 4px 10px, 13px, medium 6px 16px, 14px,
 * large 8px 22px, 15px).
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initButton = (element, ...properties) => {
    console.assert(element instanceof HTMLButtonElement);
    defineDisplaySizeProperty(element, 'button-small', 'button-large');
    defineVariantProperty(element);
    element.variant = 'outlined';
    initButtonBase(element, { additionalClassName: 'button', errorClassName: 'button-error', busyClassName: 'button-busy' }, ...properties);
}

/**
 * Creates a button.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const button = (...properties) => {
    const element = document.createElement('button');
    initButton(element, ...properties);
    return element;
}
