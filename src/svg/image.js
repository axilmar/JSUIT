import { initSVGGraphicsElement } from "./SVGGraphicsElement.js";

/**
 * Initializes an instance of SVGImageElement.
 * 
 * It invokes the function `initSVGGraphicsElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImage = (element, ...properties) => {
    console.assert(element instanceof SVGImageElement);
    initSVGGraphicsElement(element, ...properties);
}

/**
 * Creates an instance of SVGImageElement for tag 'image'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const image = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    initImage(element, ...properties);
    return element;
}
