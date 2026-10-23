import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEDiffuseLightingElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeDiffuseLighting = (element, ...properties) => {
    console.assert(element instanceof SVGFEDiffuseLightingElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGFEDiffuseLightingElement for tag 'feDiffuseLighting'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feDiffuseLighting = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feDiffuseLighting');
    initFeDiffuseLighting(element, ...properties);
    return element;
}
