import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEDistantLightElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeDistantLight = (element, ...properties) => {
    console.assert(element instanceof SVGFEDistantLightElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGFEDistantLightElement for tag 'feDistantLight'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feDistantLight = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feDistantLight');
    initFeDistantLight(element, ...properties);
    return element;
}
