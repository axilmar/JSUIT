import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLMapElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMap = (element, ...properties) => {
    console.assert(element instanceof HTMLMapElement);
    initHTMLElement(element, ...properties);
}

/**
 * Creates an instance of HTMLMapElement for tag 'map'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const map = (...properties) => {
    const element = document.createElement('map');
    initMap(element, ...properties);
    return element;
}
