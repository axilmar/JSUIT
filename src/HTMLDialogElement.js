import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLDialogElement.
 * 
 * The element get the class 'HTMLDialogElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLDialogElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLDialogElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLDialogElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLDialogElement for tag 'dialog'.
 * 
 * The element gets the class 'dialog'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const dialog = (props, ...children) => {
    props ??= {};
    props.className = `dialog ${props?.className ?? ''}`;
    const element = document.createElement('dialog');
    return initHTMLDialogElement(element, props, ...children);
}

