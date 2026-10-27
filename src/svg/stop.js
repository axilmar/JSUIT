import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGStopElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStop = (element, ...properties) => {
    console.assert(element instanceof SVGStopElement);
    initSVGElement(element, { additionalClassName: 'stop' }, ...properties);
}

/**
 * Creates an instance of SVGStopElement for tag 'stop'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const stop = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    initStop(element, ...properties);
    return element;
}
