import { initSVGElement } from "./SVGElement.js";

/**
 * Initializes an instance of SVGScriptElement.
 * 
 * It invokes the function `initSVGElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScript = (element, ...properties) => {
    console.assert(element instanceof SVGScriptElement);
    initSVGElement(element, { additionalClassName: 'script' }, ...properties);
}

/**
 * Creates an instance of SVGScriptElement for tag 'script'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const script = (...properties) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', 'script');
    initScript(element, ...properties);
    return element;
}
