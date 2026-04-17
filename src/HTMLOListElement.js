import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLOListElement.
 * 
 * The element get the class 'HTMLOListElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLOListElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLOListElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLOListElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLOListElement for tag 'ol'.
 * 
 * The element gets the class 'ol'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const ol = (props, ...children) => {
    props ??= {};
    props.className = `ol ${props?.className ?? ''}`;
    const element = document.createElement('ol');
    return initHTMLOListElement(element, props, ...children);
}

