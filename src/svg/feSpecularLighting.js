import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFESpecularLightingElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeSpecularLighting = (element, ...properties) => {
    console.assert(element instanceof SVGFESpecularLightingElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGFESpecularLightingElement for tag 'feSpecularLighting'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feSpecularLighting = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feSpecularLighting');
    initFeSpecularLighting(element, ...properties);
    return element;
}
