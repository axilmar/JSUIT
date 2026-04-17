import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTextAreaElement.
 * 
 * The element get the class 'HTMLTextAreaElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLTextAreaElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLTextAreaElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLTextAreaElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTextAreaElement for tag 'textarea'.
 * 
 * The element gets the class 'textarea'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const textarea = (props, ...children) => {
    props ??= {};
    props.className = `textarea ${props?.className ?? ''}`;
    const element = document.createElement('textarea');
    return initHTMLTextAreaElement(element, props, ...children);
}

