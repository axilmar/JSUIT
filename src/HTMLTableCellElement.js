import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTableCellElement.
 * 
 * The element get the class 'HTMLTableCellElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLTableCellElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLTableCellElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLTableCellElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTableCellElement for tag 'th'.
 * 
 * The element gets the class 'th'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const th = (props, ...children) => {
    props ??= {};
    props.className = `th ${props?.className ?? ''}`;
    const element = document.createElement('th');
    return initHTMLTableCellElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTableCellElement for tag 'td'.
 * 
 * The element gets the class 'td'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const td = (props, ...children) => {
    props ??= {};
    props.className = `td ${props?.className ?? ''}`;
    const element = document.createElement('td');
    return initHTMLTableCellElement(element, props, ...children);
}

