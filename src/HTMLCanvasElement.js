import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLCanvasElement.
 * 
 * The element get the class 'HTMLCanvasElement'.
 * 
 * @param {*} element element to initialize.
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the element.
 */
export const initHTMLCanvasElement = (element, props, ...children) => {
    console.assert(element instanceof HTMLCanvasElement);
    props ??= {};
    children ??= [];
    props.className = `HTMLCanvasElement ${props?.className ?? ''}`;
    return initHTMLElement(element, props, ...children);
}

/**
 * Creates an instance of HTMLCanvasElement for tag 'canvas'.
 * 
 * The element gets the class 'canvas'.
 * 
 * @param {*} props element properties.
 * @param {*} children children of the element.
 * 
 * @return the created element.
 */
export const canvas = (props, ...children) => {
    props ??= {};
    props.className = `canvas ${props?.className ?? ''}`;
    const element = document.createElement('canvas');
    return initHTMLCanvasElement(element, props, ...children);
}

