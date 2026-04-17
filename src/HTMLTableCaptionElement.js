import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTableCaptionElement.
 * 
 * The element get the class 'HTMLTableCaptionElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLTableCaptionElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLTableCaptionElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLTableCaptionElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLTableCaptionElement for tag 'caption'.
 * 
 * The element gets the class 'caption'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const caption = (props, ...children) => {
    props ??= {};
    props.className = `caption ${props?.className ?? ''}`;
    const element = document.createElement('caption');
    return initHTMLTableCaptionElement(element, props, ...children);
}

