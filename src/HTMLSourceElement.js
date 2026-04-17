import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLSourceElement.
 * 
 * The element get the class 'HTMLSourceElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLSourceElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLSourceElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLSourceElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLSourceElement for tag 'source'.
 * 
 * The element gets the class 'source'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const source = (props, ...children) => {
    props ??= {};
    props.className = `source ${props?.className ?? ''}`;
    const element = document.createElement('source');
    return initHTMLSourceElement(element, props, ...children);
}

