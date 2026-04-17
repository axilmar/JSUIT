import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLDataElement.
 * 
 * The element get the class 'HTMLDataElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLDataElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLDataElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLDataElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLDataElement for tag 'data'.
 * 
 * The element gets the class 'data'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const data = (props, ...children) => {
    props ??= {};
    props.className = `data ${props?.className ?? ''}`;
    const element = document.createElement('data');
    return initHTMLDataElement(element, props, ...children);
}

