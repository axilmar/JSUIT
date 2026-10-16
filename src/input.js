import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLInputElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInput = (element, ...properties) => {
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
export const input = (...properties) => {
    const element = document.createElement('input');
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
    return element;
}

/**
 * Creates an instance of HTMLInputElement of type 'datetime-local'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const datetimeLocal = (...properties) => {
    const element = document.createElement('input');
    element.type = 'datetime-local';
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
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
    initInput(element, ...properties);
    return element;
}
