import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLMenuElement.
 * 
 * The element get the class 'HTMLMenuElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLMenuElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLMenuElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLMenuElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLMenuElement for tag 'menu'.
 * 
 * The element gets the class 'menu'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const menu = (props, ...children) => {
    props ??= {};
    props.className = `menu ${props?.className ?? ''}`;
    const element = document.createElement('menu');
    return initHTMLMenuElement(element, props, ...children);
}

