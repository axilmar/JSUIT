import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLLIElement.
 * 
 * The element get the class 'HTMLLIElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLLIElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLLIElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLLIElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLLIElement for tag 'li'.
 * 
 * The element gets the class 'li'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const li = (props, ...children) => {
    props ??= {};
    props.className = `li ${props?.className ?? ''}`;
    const element = document.createElement('li');
    return initHTMLLIElement(element, props, ...children);
}

