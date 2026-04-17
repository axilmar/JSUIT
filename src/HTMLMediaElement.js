import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLMediaElement.
 * 
 * The element get the class 'HTMLMediaElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLMediaElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLMediaElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLMediaElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

