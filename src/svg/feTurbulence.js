import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFETurbulenceElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeTurbulence = (element, ...properties) => {
    console.assert(element instanceof SVGFETurbulenceElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGFETurbulenceElement for tag 'feTurbulence'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feTurbulence = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feTurbulence');
    initFeTurbulence(element, ...properties);
    return element;
}
