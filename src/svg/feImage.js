import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEImageElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeImage = (element, ...properties) => {
    console.assert(element instanceof SVGFEImageElement);
    initSVGElement(element, { additionalClassName: 'feImage' }, ...properties);
}

/**
 * Creates an instance of SVGFEImageElement for tag 'feImage'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feImage = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feImage');
    initFeImage(element, ...properties);
    return element;
}
