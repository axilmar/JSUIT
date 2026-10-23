import { initSVGAnimationElement } from "./SVGAnimationElement.js";

/**
 * Initializes an instance of SVGSetElement.
 * 
 * It invokes the function `initSVGAnimationElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSet = (element, ...properties) => {
    console.assert(element instanceof SVGSetElement);
    initSVGAnimationElement(element, ...properties);
}

/**
 * Creates an instance of SVGSetElement for tag 'set'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const set = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'set');
    initSet(element, ...properties);
    return element;
}
