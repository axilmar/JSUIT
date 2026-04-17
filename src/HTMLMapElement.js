import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLMapElement.
 * 
 * The element get the class 'HTMLMapElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLMapElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLMapElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLMapElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLMapElement for tag 'map'.
 * 
 * The element gets the class 'map'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const map = (props, ...children) => {
    props ??= {};
    props.className = `map ${props?.className ?? ''}`;
    const element = document.createElement('map');
    return initHTMLMapElement(element, props, ...children);
}

