import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLHRElement.
 * 
 * The element get the class 'HTMLHRElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLHRElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLHRElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLHRElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLHRElement for tag 'hr'.
 * 
 * The element gets the class 'hr'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const hr = (props, ...children) => {
    props ??= {};
    props.className = `hr ${props?.className ?? ''}`;
    const element = document.createElement('hr');
    return initHTMLHRElement(element, props, ...children);
}

