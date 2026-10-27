import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFESpotLightElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeSpotLight = (element, ...properties) => {
    console.assert(element instanceof SVGFESpotLightElement);
    initSVGElement(element, { additionalClassName: 'feSpotLight' }, ...properties);
}

/**
 * Creates an instance of SVGFESpotLightElement for tag 'feSpotLight'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feSpotLight = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feSpotLight');
    initFeSpotLight(element, ...properties);
    return element;
}
