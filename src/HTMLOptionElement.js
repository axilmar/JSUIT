import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLOptionElement.
 * 
 * The element get the class 'HTMLOptionElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLOptionElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLOptionElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLOptionElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLOptionElement for tag 'option'.
 * 
 * The element gets the class 'option'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const option = (props, ...children) => {
    props ??= {};
    props.className = `option ${props?.className ?? ''}`;
    const element = document.createElement('option');
    return initHTMLOptionElement(element, props, ...children);
}

