import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEPointLightElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFePointLight = (element, ...properties) => {
    console.assert(element instanceof SVGFEPointLightElement);
    initSVGElement(element, { additionalClassName: 'fePointLight' }, ...properties);
}

/**
 * Creates an instance of SVGFEPointLightElement for tag 'fePointLight'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const fePointLight = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'fePointLight');
    initFePointLight(element, ...properties);
    return element;
}
