import { initSVGAnimationElement } from "./SVGAnimationElement.js";

/**
 * Initializes an instance of SVGAnimateTransformElement.
 * 
 * It invokes the function `initSVGAnimationElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAnimateTransform = (element, ...properties) => {
    console.assert(element instanceof SVGAnimateTransformElement);
    initSVGAnimationElement(element, ...properties);
}

/**
 * Creates an instance of SVGAnimateTransformElement for tag 'animateTransform'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const animateTransform = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
    initAnimateTransform(element, ...properties);
    return element;
}
