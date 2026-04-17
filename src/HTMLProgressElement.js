import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLProgressElement.
 * 
 * The element get the class 'HTMLProgressElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLProgressElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLProgressElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLProgressElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLProgressElement for tag 'progress'.
 * 
 * The element gets the class 'progress'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const progress = (props, ...children) => {
    props ??= {};
    props.className = `progress ${props?.className ?? ''}`;
    const element = document.createElement('progress');
    return initHTMLProgressElement(element, props, ...children);
}

