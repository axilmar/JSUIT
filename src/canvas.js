import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLCanvasElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCanvas = (element, ...properties) => {
    console.assert(element instanceof HTMLCanvasElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLCanvasElement for tag 'canvas'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const canvas = (...properties) => {
    const element = document.createElement('canvas');
    initCanvas(element, ...properties);
    return element;
}
