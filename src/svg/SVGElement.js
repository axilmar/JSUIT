import { initElement } from "../core/Element.js";

/**
 * Initializes an SVG element.
 * 
 * It invokes the function `initElement(svgElement, ...properties)`.
 * 
 * @param {*} svgElement the svg element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSVGElement = (svgElement, ...properties) => {
    console.assert(svgElement instanceof SVGElement);
    initElement(svgElement, { additionalClassName: 'SVGElement' }, ...properties);
}
