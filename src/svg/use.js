import { initSVGGraphicsElement } from "./SVGGraphicsElement.js";

/**
 * Initializes an instance of SVGUseElement.
 * 
 * It invokes the function `initSVGGraphicsElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUse = (element, ...properties) => {
    console.assert(element instanceof SVGUseElement);
    initSVGGraphicsElement(element, { additionalClassName: 'use' }, ...properties);
}

/**
 * Creates an instance of SVGUseElement for tag 'use'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const use = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    initUse(element, ...properties);
    return element;
}
