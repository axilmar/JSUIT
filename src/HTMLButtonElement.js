import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLButtonElement.
 * 
 * The element get the class 'HTMLButtonElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLButtonElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLButtonElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLButtonElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLButtonElement for tag 'button'.
 * 
 * The element gets the class 'button'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const button = (props, ...children) => {
    props ??= {};
    props.className = `button ${props?.className ?? ''}`;
    const element = document.createElement('button');
    return initHTMLButtonElement(element, props, ...children);
}

