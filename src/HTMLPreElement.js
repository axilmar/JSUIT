import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLPreElement.
 * 
 * The element get the class 'HTMLPreElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLPreElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLPreElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLPreElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLPreElement for tag 'pre'.
 * 
 * The element gets the class 'pre'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const pre = (props, ...children) => {
    props ??= {};
    props.className = `pre ${props?.className ?? ''}`;
    const element = document.createElement('pre');
    return initHTMLPreElement(element, props, ...children);
}

