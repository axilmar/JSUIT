import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLModElement.
 * 
 * The element get the class 'HTMLModElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLModElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLModElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLModElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLModElement for tag 'ins'.
 * 
 * The element gets the class 'ins'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const ins = (props, ...children) => {
    props ??= {};
    props.className = `ins ${props?.className ?? ''}`;
    const element = document.createElement('ins');
    return initHTMLModElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLModElement for tag 'del'.
 * 
 * The element gets the class 'del'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const del = (props, ...children) => {
    props ??= {};
    props.className = `del ${props?.className ?? ''}`;
    const element = document.createElement('del');
    return initHTMLModElement(element, props, ...children);
}

