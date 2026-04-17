import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLCiteElement.
 * 
 * The element get the class 'HTMLCiteElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLCiteElement = (element, props, ...children) => {
    props ??= {};
    children ??= [];
    props.className = `HTMLCiteElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLCiteElement for tag 'cite'.
 * 
 * The element gets the class 'cite'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const cite = (props, ...children) => {
    props ??= {};
    props.className = `cite ${props?.className ?? ''}`;
    const element = document.createElement('cite');
    return initHTMLCiteElement(element, props, ...children);
}

