import { initSVGGraphicsElement } from "./SVGGraphicsElement.js";

/**
 * Initializes an instance of SVGForeignObjectElement.
 * 
 * It invokes the function `initSVGGraphicsElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initForeignObject = (element, ...properties) => {
    console.assert(element instanceof SVGForeignObjectElement);
    initSVGGraphicsElement(element, { additionalClassName: 'foreignObject' }, ...properties);
}

/**
 * Creates an instance of SVGForeignObjectElement for tag 'foreignObject'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const foreignObject = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    initForeignObject(element, ...properties);
    return element;
}
