import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFECompositeElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeComposite = (element, ...properties) => {
    console.assert(element instanceof SVGFECompositeElement);
    initSVGElement(element, { additionalClassName: 'feComposite' }, ...properties);
}

/**
 * Creates an instance of SVGFECompositeElement for tag 'feComposite'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feComposite = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
    initFeComposite(element, ...properties);
    return element;
}
