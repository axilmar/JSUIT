import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEMergeNodeElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeMergeNode = (element, ...properties) => {
    console.assert(element instanceof SVGFEMergeNodeElement);
    initSVGElement(element, { additionalClassName: 'feMergeNode' }, ...properties);
}

/**
 * Creates an instance of SVGFEMergeNodeElement for tag 'feMergeNode'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feMergeNode = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
    initFeMergeNode(element, ...properties);
    return element;
}
