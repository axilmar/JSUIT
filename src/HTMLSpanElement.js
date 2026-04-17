import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLSpanElement.
 * 
 * The element get the class 'HTMLSpanElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLSpanElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLSpanElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLSpanElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLSpanElement for tag 'span'.
 * 
 * The element gets the class 'span'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const span = (props, ...children) => {
    props ??= {};
    props.className = `span ${props?.className ?? ''}`;
    const element = document.createElement('span');
    return initHTMLSpanElement(element, props, ...children);
}

