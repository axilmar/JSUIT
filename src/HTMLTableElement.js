import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTableElement.
 * 
 * The element get the class 'HTMLTableElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLTableElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLTableElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLTableElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTableElement for tag 'table'.
 * 
 * The element gets the class 'table'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const table = (props, ...children) => {
    props ??= {};
    props.className = `table ${props?.className ?? ''}`;
    const element = document.createElement('table');
    return initHTMLTableElement(element, props, ...children);
}

