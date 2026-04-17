import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLOutputElement.
 * 
 * The element get the class 'HTMLOutputElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLOutputElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLOutputElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLOutputElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLOutputElement for tag 'output'.
 * 
 * The element gets the class 'output'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const output = (props, ...children) => {
    props ??= {};
    props.className = `output ${props?.className ?? ''}`;
    const element = document.createElement('output');
    return initHTMLOutputElement(element, props, ...children);
}

