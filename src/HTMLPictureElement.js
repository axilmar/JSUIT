import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLPictureElement.
 * 
 * The element get the class 'HTMLPictureElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLPictureElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLPictureElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLPictureElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLPictureElement for tag 'picture'.
 * 
 * The element gets the class 'picture'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const picture = (props, ...children) => {
    props ??= {};
    props.className = `picture ${props?.className ?? ''}`;
    const element = document.createElement('picture');
    return initHTMLPictureElement(element, props, ...children);
}

