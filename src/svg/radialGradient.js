import { initSVGGradientElement } from "./SVGGradientElement.js";

/**
 * Initializes an instance of SVGRadialGradientElement.
 * 
 * It invokes the function `initSVGGradientElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRadialGradient = (element, ...properties) => {
    console.assert(element instanceof SVGRadialGradientElement);
    initSVGGradientElement(element, ...properties);
}

/**
 * Creates an instance of SVGRadialGradientElement for tag 'radialGradient'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const radialGradient = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
    initRadialGradient(element, ...properties);
    return element;
}
