import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGMarkerElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMarker = (element, ...properties) => {
    console.assert(element instanceof SVGMarkerElement);
    initSVGElement(element, { additionalClassName: 'marker' }, ...properties);
}

/**
 * Creates an instance of SVGMarkerElement for tag 'marker'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const marker = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    initMarker(element, ...properties);
    return element;
}
