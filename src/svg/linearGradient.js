import { initSVGGradientElement } from "./SVGGradientElement.js";

/**
 * Initializes an instance of SVGLinearGradientElement.
 * 
 * It invokes the function `initSVGGradientElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLinearGradient = (element, ...properties) => {
    console.assert(element instanceof SVGLinearGradientElement);
    initSVGGradientElement(element, { additionalClassName: 'linearGradient' }, ...properties);
}

/**
 * Creates an instance of SVGLinearGradientElement for tag 'linearGradient'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const linearGradient = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    initLinearGradient(element, ...properties);
    return element;
}
