import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLDataListElement.
 * 
 * The element get the class 'HTMLDataListElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLDataListElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLDataListElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLDataListElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLDataListElement for tag 'datalist'.
 * 
 * The element gets the class 'datalist'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const datalist = (props, ...children) => {
    props ??= {};
    props.className = `datalist ${props?.className ?? ''}`;
    const element = document.createElement('datalist');
    return initHTMLDataListElement(element, props, ...children);
}

