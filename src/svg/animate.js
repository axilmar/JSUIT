import { initSVGAnimationElement } from "./SVGAnimationElement.js";

/**
 * Initializes an instance of SVGAnimateElement.
 * 
 * It invokes the function `initSVGAnimationElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAnimate = (element, ...properties) => {
    console.assert(element instanceof SVGAnimateElement);
    initSVGAnimationElement(element, ...properties);
}

/**
 * Creates an instance of SVGAnimateElement for tag 'animate'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const animate = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    initAnimate(element, ...properties);
    return element;
}
