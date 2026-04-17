import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLParagraphElement.
 * 
 * The element get the class 'HTMLParagraphElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLParagraphElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLParagraphElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLParagraphElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLParagraphElement for tag 'p'.
 * 
 * The element gets the class 'p'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const p = (props, ...children) => {
    props ??= {};
    props.className = `p ${props?.className ?? ''}`;
    const element = document.createElement('p');
    return initHTMLParagraphElement(element, props, ...children);
}

