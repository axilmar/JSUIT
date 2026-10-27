import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLMeterElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMeter = (element, ...properties) => {
    console.assert(element instanceof HTMLMeterElement);
    initHTMLElement(element, { additionalClassName: 'meter' }, ...properties);
}

/**
 * Creates an instance of HTMLMeterElement for tag 'meter'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const meter = (...properties) => {
    const element = document.createElement('meter');
    initMeter(element, ...properties);
    return element;
}
