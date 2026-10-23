import { initSVGGraphicsElement } from "./SVGGraphicsElement.js";

/**
 * Initializes an instance of SVGSwitchElement.
 * 
 * It invokes the function `initSVGGraphicsElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitch = (element, ...properties) => {
    console.assert(element instanceof SVGSwitchElement);
    initSVGGraphicsElement(element, ...properties);
}

/**
 * Creates an instance of SVGSwitchElement for tag 'switch'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const switchElement = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'switch');
    initSwitch(element, ...properties);
    return element;
}
