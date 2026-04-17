import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLDivElement.
 * 
 * The element get the class 'HTMLDivElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLDivElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLDivElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLDivElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLDivElement for tag 'div'.
 * 
 * The element gets the class 'div'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const div = (props, ...children) => {
    props ??= {};
    props.className = `div ${props?.className ?? ''}`;
    const element = document.createElement('div');
    return initHTMLDivElement(element, props, ...children);
}

