import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLObjectElement.
 * 
 * The element get the class 'HTMLObjectElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLObjectElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLObjectElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLObjectElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLObjectElement for tag 'object'.
 * 
 * The element gets the class 'object'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const object = (props, ...children) => {
    props ??= {};
    props.className = `object ${props?.className ?? ''}`;
    const element = document.createElement('object');
    return initHTMLObjectElement(element, props, ...children);
}

