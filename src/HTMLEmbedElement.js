import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLEmbedElement.
 * 
 * The element get the class 'HTMLEmbedElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLEmbedElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLEmbedElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLEmbedElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLEmbedElement for tag 'embed'.
 * 
 * The element gets the class 'embed'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const embed = (props, ...children) => {
    props ??= {};
    props.className = `embed ${props?.className ?? ''}`;
    const element = document.createElement('embed');
    return initHTMLEmbedElement(element, props, ...children);
}

