import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEDisplacementMapElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeDisplacementMap = (element, ...properties) => {
    console.assert(element instanceof SVGFEDisplacementMapElement);
    initSVGElement(element, { additionalClassName: 'feDisplacementMap' }, ...properties);
}

/**
 * Creates an instance of SVGFEDisplacementMapElement for tag 'feDisplacementMap'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feDisplacementMap = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feDisplacementMap');
    initFeDisplacementMap(element, ...properties);
    return element;
}
