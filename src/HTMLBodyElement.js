import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLBodyElement.
 * 
 * The element get the class 'HTMLBodyElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLBodyElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLBodyElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLBodyElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

