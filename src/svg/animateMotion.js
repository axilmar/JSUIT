import { initSVGAnimationElement } from "./SVGAnimationElement.js";

/**
 * Initializes an instance of SVGAnimateMotionElement.
 * 
 * It invokes the function `initSVGAnimationElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAnimateMotion = (element, ...properties) => {
    console.assert(element instanceof SVGAnimateMotionElement);
    initSVGAnimationElement(element, { additionalClassName: 'animateMotion' }, ...properties);
}

/**
 * Creates an instance of SVGAnimateMotionElement for tag 'animateMotion'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const animateMotion = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
    initAnimateMotion(element, ...properties);
    return element;
}
