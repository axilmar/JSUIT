import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGMetadataElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMetadata = (element, ...properties) => {
    console.assert(element instanceof SVGMetadataElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGMetadataElement for tag 'metadata'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const metadata = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'metadata');
    initMetadata(element, ...properties);
    return element;
}
