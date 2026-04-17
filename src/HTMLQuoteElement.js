import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLQuoteElement.
 * 
 * The element get the class 'HTMLQuoteElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLQuoteElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLQuoteElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLQuoteElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLQuoteElement for tag 'blockquote'.
 * 
 * The element gets the class 'blockquote'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const blockquote = (props, ...children) => {
    props ??= {};
    props.className = `blockquote ${props?.className ?? ''}`;
    const element = document.createElement('blockquote');
    return initHTMLQuoteElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLQuoteElement for tag 'q'.
 * 
 * The element gets the class 'q'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const q = (props, ...children) => {
    props ??= {};
    props.className = `q ${props?.className ?? ''}`;
    const element = document.createElement('q');
    return initHTMLQuoteElement(element, props, ...children);
}

