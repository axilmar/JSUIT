import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGFEOffsetElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFeOffset = (element, ...properties) => {
    console.assert(element instanceof SVGFEOffsetElement);
    initSVGElement(element, { additionalClassName: 'feOffset' }, ...properties);
}

/**
 * Creates an instance of SVGFEOffsetElement for tag 'feOffset'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const feOffset = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'feOffset');
    initFeOffset(element, ...properties);
    return element;
}
