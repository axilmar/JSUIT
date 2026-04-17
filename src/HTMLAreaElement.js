import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLAreaElement.
 * 
 * The element get the class 'HTMLAreaElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLAreaElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLAreaElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLAreaElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLAreaElement for tag 'area'.
 * 
 * The element gets the class 'area'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const area = (props, ...children) => {
    props ??= {};
    props.className = `area ${props?.className ?? ''}`;
    const element = document.createElement('area');
    return initHTMLAreaElement(element, props, ...children);
}

