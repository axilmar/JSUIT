import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTableRowElement.
 * 
 * The element get the class 'HTMLTableRowElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLTableRowElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLTableRowElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLTableRowElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTableRowElement for tag 'tr'.
 * 
 * The element gets the class 'tr'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const tr = (props, ...children) => {
    props ??= {};
    props.className = `tr ${props?.className ?? ''}`;
    const element = document.createElement('tr');
    return initHTMLTableRowElement(element, props, ...children);
}

