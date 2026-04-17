import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTableColElement.
 * 
 * The element get the class 'HTMLTableColElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLTableColElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLTableColElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLTableColElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTableColElement for tag 'colgroup'.
 * 
 * The element gets the class 'colgroup'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const colgroup = (props, ...children) => {
    props ??= {};
    props.className = `colgroup ${props?.className ?? ''}`;
    const element = document.createElement('colgroup');
    return initHTMLTableColElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTableColElement for tag 'col'.
 * 
 * The element gets the class 'col'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const col = (props, ...children) => {
    props ??= {};
    props.className = `col ${props?.className ?? ''}`;
    const element = document.createElement('col');
    return initHTMLTableColElement(element, props, ...children);
}

