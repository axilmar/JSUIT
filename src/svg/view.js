import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGViewElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initView = (element, ...properties) => {
    console.assert(element instanceof SVGViewElement);
    initSVGElement(element, ...properties);
}

/**
 * Creates an instance of SVGViewElement for tag 'view'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const view = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'view');
    initView(element, ...properties);
    return element;
}
