import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLIFrameElement.
 * 
 * The element get the class 'HTMLIFrameElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLIFrameElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLIFrameElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLIFrameElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLIFrameElement for tag 'iframe'.
 * 
 * The element gets the class 'iframe'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const iframe = (props, ...children) => {
    props ??= {};
    props.className = `iframe ${props?.className ?? ''}`;
    const element = document.createElement('iframe');
    return initHTMLIFrameElement(element, props, ...children);
}

