import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEMorphologyElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeMorphology = (element, ...properties) => {
    console.assert(element instanceof SVGFEMorphologyElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGFEMorphologyElement for tag 'feMorphology'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feMorphology = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feMorphology');
    initFeMorphology(element, ...properties);
    return element;
}
