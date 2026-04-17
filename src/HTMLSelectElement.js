import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLSelectElement.
 * 
 * The element get the class 'HTMLSelectElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLSelectElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLSelectElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLSelectElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLSelectElement for tag 'select'.
 * 
 * The element gets the class 'select'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const select = (props, ...children) => {
    props ??= {};
    props.className = `select ${props?.className ?? ''}`;
    const element = document.createElement('select');
    return initHTMLSelectElement(element, props, ...children);
}

