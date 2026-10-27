import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLInputElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInputBase = (element, ...properties) => {
    console.assert(element instanceof HTMLInputElement);
    initHTMLElement(element, { additionalClassName: 'inputBase' }, ...properties);
}

/**
 * Creates an instance of HTMLInputElement for tag 'input'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const inputBase = (...properties) => {
    const element = document.createElement('input');
    initInputBase(element, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'checkbox'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const checkbox = (...properties) => {
    const element = document.createElement('input');
    element.type = 'checkbox';
    initInputBase(element, { additionalClassName: 'checkbox' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'color'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const color = (...properties) => {
    const element = document.createElement('input');
    element.type = 'color';
    initInputBase(element, { additionalClassName: 'color' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'date'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const date = (...properties) => {
    const element = document.createElement('input');
    element.type = 'date';
    initInputBase(element, { additionalClassName: 'date' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'datetime-local'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const dateTimeLocal = (...properties) => {
    const element = document.createElement('input');
    element.type = 'datetime-local';
    initInputBase(element, { additionalClassName: 'dateTimeLocal' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'email'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const email = (...properties) => {
    const element = document.createElement('input');
    element.type = 'email';
    initInputBase(element, { additionalClassName: 'email' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'file'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const file = (...properties) => {
    const element = document.createElement('input');
    element.type = 'file';
    initInputBase(element, { additionalClassName: 'file' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'hidden'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const hidden = (...properties) => {
    const element = document.createElement('input');
    element.type = 'hidden';
    initInputBase(element, { additionalClassName: 'hidden' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'image'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const image = (...properties) => {
    const element = document.createElement('input');
    element.type = 'image';
    initInputBase(element, { additionalClassName: 'image' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'month'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const month = (...properties) => {
    const element = document.createElement('input');
    element.type = 'month';
    initInputBase(element, { additionalClassName: 'month' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'number'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const number = (...properties) => {
    const element = document.createElement('input');
    element.type = 'number';
    initInputBase(element, { additionalClassName: 'number' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'password'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const password = (...properties) => {
    const element = document.createElement('input');
    element.type = 'password';
    initInputBase(element, { additionalClassName: 'password' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'radio'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const radio = (...properties) => {
    const element = document.createElement('input');
    element.type = 'radio';
    initInputBase(element, { additionalClassName: 'radio' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'range'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const range = (...properties) => {
    const element = document.createElement('input');
    element.type = 'range';
    initInputBase(element, { additionalClassName: 'range' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'reset'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const reset = (...properties) => {
    const element = document.createElement('input');
    element.type = 'reset';
    initInputBase(element, { additionalClassName: 'reset' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'search'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const search = (...properties) => {
    const element = document.createElement('input');
    element.type = 'search';
    initInputBase(element, { additionalClassName: 'search' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'submit'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const submit = (...properties) => {
    const element = document.createElement('input');
    element.type = 'submit';
    initInputBase(element, { additionalClassName: 'submit' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'tel'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const tel = (...properties) => {
    const element = document.createElement('input');
    element.type = 'tel';
    initInputBase(element, { additionalClassName: 'tel' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'text'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const text = (...properties) => {
    const element = document.createElement('input');
    element.type = 'text';
    initInputBase(element, { additionalClassName: 'text' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'url'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const url = (...properties) => {
    const element = document.createElement('input');
    element.type = 'url';
    initInputBase(element, { additionalClassName: 'url' }, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'week'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const week = (...properties) => {
    const element = document.createElement('input');
    element.type = 'week';
    initInputBase(element, { additionalClassName: 'week' }, ...properties);
    return element;
}
