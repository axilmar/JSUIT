import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLOptGroupElement.
 * 
 * The element get the class 'HTMLOptGroupElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLOptGroupElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLOptGroupElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLOptGroupElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLOptGroupElement for tag 'optgroup'.
 * 
 * The element gets the class 'optgroup'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const optgroup = (props, ...children) => {
    props ??= {};
    props.className = `optgroup ${props?.className ?? ''}`;
    const element = document.createElement('optgroup');
    return initHTMLOptGroupElement(element, props, ...children);
}

