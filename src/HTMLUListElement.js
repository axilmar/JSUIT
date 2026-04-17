import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLUListElement.
 * 
 * The element get the class 'HTMLUListElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLUListElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLUListElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLUListElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLUListElement for tag 'ul'.
 * 
 * The element gets the class 'ul'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const ul = (props, ...children) => {
    props ??= {};
    props.className = `ul ${props?.className ?? ''}`;
    const element = document.createElement('ul');
    return initHTMLUListElement(element, props, ...children);
}

