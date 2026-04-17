import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLFormElement.
 * 
 * The element get the class 'HTMLFormElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLFormElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLFormElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLFormElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLFormElement for tag 'form'.
 * 
 * The element gets the class 'form'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const form = (props, ...children) => {
    props ??= {};
    props.className = `form ${props?.className ?? ''}`;
    const element = document.createElement('form');
    return initHTMLFormElement(element, props, ...children);
}

