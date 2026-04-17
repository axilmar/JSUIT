import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLFieldSetElement.
 * 
 * The element get the class 'HTMLFieldSetElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLFieldSetElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLFieldSetElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLFieldSetElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLFieldSetElement for tag 'fieldset'.
 * 
 * The element gets the class 'fieldset'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const fieldset = (props, ...children) => {
    props ??= {};
    props.className = `fieldset ${props?.className ?? ''}`;
    const element = document.createElement('fieldset');
    return initHTMLFieldSetElement(element, props, ...children);
}

