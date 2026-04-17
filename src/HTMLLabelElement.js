import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLLabelElement.
 * 
 * The element get the class 'HTMLLabelElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLLabelElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLLabelElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLLabelElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLLabelElement for tag 'label'.
 * 
 * The element gets the class 'label'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const label = (props, ...children) => {
    props ??= {};
    props.className = `label ${props?.className ?? ''}`;
    const element = document.createElement('label');
    return initHTMLLabelElement(element, props, ...children);
}

