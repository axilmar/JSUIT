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
    initHTMLElement(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
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
    initInputBase(element, ...properties);
    return element;
}
