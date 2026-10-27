import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLLegendElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLegend = (element, ...properties) => {
    console.assert(element instanceof HTMLLegendElement);
    initHTMLElement(element, { additionalClassName: 'legend' }, ...properties);
}

/**
 * Creates an instance of HTMLLegendElement for tag 'legend'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const legend = (...properties) => {
    const element = document.createElement('legend');
    initLegend(element, ...properties);
    return element;
}
