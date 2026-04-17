import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLAnchorElement.
 * 
 * The element get the class 'HTMLAnchorElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLAnchorElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLAnchorElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLAnchorElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLAnchorElement for tag 'a'.
 * 
 * The element gets the class 'a'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const a = (props, ...children) => {
    props ??= {};
    props.className = `a ${props?.className ?? ''}`;
    const element = document.createElement('a');
    return initHTMLAnchorElement(element, props, ...children);
}

