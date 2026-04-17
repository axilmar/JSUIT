import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLImageElement.
 * 
 * The element get the class 'HTMLImageElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLImageElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLImageElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLImageElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLImageElement for tag 'img'.
 * 
 * The element gets the class 'img'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const img = (props, ...children) => {
    props ??= {};
    props.className = `img ${props?.className ?? ''}`;
    const element = document.createElement('img');
    return initHTMLImageElement(element, props, ...children);
}

