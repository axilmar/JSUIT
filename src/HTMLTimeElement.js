import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTimeElement.
 * 
 * The element get the class 'HTMLTimeElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLTimeElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLTimeElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLTimeElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTimeElement for tag 'time'.
 * 
 * The element gets the class 'time'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const time = (props, ...children) => {
    props ??= {};
    props.className = `time ${props?.className ?? ''}`;
    const element = document.createElement('time');
    return initHTMLTimeElement(element, props, ...children);
}

