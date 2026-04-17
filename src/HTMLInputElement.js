import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLInputElement.
 * 
 * The element get the class 'HTMLInputElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLInputElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLInputElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLInputElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for tag 'input'.
 * 
 * The element gets the class 'input'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const input = (props, ...children) => {
    props ??= {};
    props.className = `input ${props?.className ?? ''}`;
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'checkbox'.
 * 
 * The element gets the class 'checkbox'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const checkbox = (props, ...children) => {
    props ??= {};
    props.className = `checkbox ${props?.className ?? ''}`;
    props.type = 'checkbox';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'color'.
 * 
 * The element gets the class 'color'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const color = (props, ...children) => {
    props ??= {};
    props.className = `color ${props?.className ?? ''}`;
    props.type = 'color';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'date'.
 * 
 * The element gets the class 'date'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const date = (props, ...children) => {
    props ??= {};
    props.className = `date ${props?.className ?? ''}`;
    props.type = 'date';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'datetime-local'.
 * 
 * The element gets the class 'datetime-local'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const datetimeLocal = (props, ...children) => {
    props ??= {};
    props.className = `datetime-local ${props?.className ?? ''}`;
    props.type = 'datetime-local';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'email'.
 * 
 * The element gets the class 'email'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const email = (props, ...children) => {
    props ??= {};
    props.className = `email ${props?.className ?? ''}`;
    props.type = 'email';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'file'.
 * 
 * The element gets the class 'file'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const file = (props, ...children) => {
    props ??= {};
    props.className = `file ${props?.className ?? ''}`;
    props.type = 'file';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'hidden'.
 * 
 * The element gets the class 'hidden'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const hidden = (props, ...children) => {
    props ??= {};
    props.className = `hidden ${props?.className ?? ''}`;
    props.type = 'hidden';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'image'.
 * 
 * The element gets the class 'image'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const image = (props, ...children) => {
    props ??= {};
    props.className = `image ${props?.className ?? ''}`;
    props.type = 'image';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'month'.
 * 
 * The element gets the class 'month'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const month = (props, ...children) => {
    props ??= {};
    props.className = `month ${props?.className ?? ''}`;
    props.type = 'month';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'number'.
 * 
 * The element gets the class 'number'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const number = (props, ...children) => {
    props ??= {};
    props.className = `number ${props?.className ?? ''}`;
    props.type = 'number';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'password'.
 * 
 * The element gets the class 'password'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const password = (props, ...children) => {
    props ??= {};
    props.className = `password ${props?.className ?? ''}`;
    props.type = 'password';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'radio'.
 * 
 * The element gets the class 'radio'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const radio = (props, ...children) => {
    props ??= {};
    props.className = `radio ${props?.className ?? ''}`;
    props.type = 'radio';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'range'.
 * 
 * The element gets the class 'range'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const range = (props, ...children) => {
    props ??= {};
    props.className = `range ${props?.className ?? ''}`;
    props.type = 'range';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'reset'.
 * 
 * The element gets the class 'reset'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const reset = (props, ...children) => {
    props ??= {};
    props.className = `reset ${props?.className ?? ''}`;
    props.type = 'reset';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'search'.
 * 
 * The element gets the class 'search'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const search = (props, ...children) => {
    props ??= {};
    props.className = `search ${props?.className ?? ''}`;
    props.type = 'search';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'submit'.
 * 
 * The element gets the class 'submit'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const submit = (props, ...children) => {
    props ??= {};
    props.className = `submit ${props?.className ?? ''}`;
    props.type = 'submit';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'tel'.
 * 
 * The element gets the class 'tel'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const tel = (props, ...children) => {
    props ??= {};
    props.className = `tel ${props?.className ?? ''}`;
    props.type = 'tel';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'text'.
 * 
 * The element gets the class 'text'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const text = (props, ...children) => {
    props ??= {};
    props.className = `text ${props?.className ?? ''}`;
    props.type = 'text';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'url'.
 * 
 * The element gets the class 'url'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const url = (props, ...children) => {
    props ??= {};
    props.className = `url ${props?.className ?? ''}`;
    props.type = 'url';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLInputElement for type 'week'.
 * 
 * The element gets the class 'week'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const week = (props, ...children) => {
    props ??= {};
    props.className = `week ${props?.className ?? ''}`;
    props.type = 'week';
    const element = document.createElement('input');
    return initHTMLInputElement(element, props, ...children);
}

