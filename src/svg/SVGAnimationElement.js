import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGAnimationElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSVGAnimationElement = (element, ...properties) => {
    console.assert(element instanceof SVGAnimationElement);
    initSVGElement(element, { additionalClassName: 'SVGAnimationElement' }, ...properties);
}
