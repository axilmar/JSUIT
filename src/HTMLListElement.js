import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLListElement.
 * 
 * The element get the class 'HTMLListElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLListElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLListElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLListElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLListElement for tag 'dl'.
 * 
 * The element gets the class 'dl'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const dl = (props, ...children) => {
    props ??= {};
    props.className = `dl ${props?.className ?? ''}`;
    const element = document.createElement('dl');
    return initHTMLListElement(element, props, ...children);
}

