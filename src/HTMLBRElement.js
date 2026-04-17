import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLBRElement.
 * 
 * The element get the class 'HTMLBRElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLBRElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLBRElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLBRElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLBRElement for tag 'br'.
 * 
 * The element gets the class 'br'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const br = (props, ...children) => {
    props ??= {};
    props.className = `br ${props?.className ?? ''}`;
    const element = document.createElement('br');
    return initHTMLBRElement(element, props, ...children);
}

