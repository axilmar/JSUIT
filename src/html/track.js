import { initHTMLElement } from "./HTMLElement.js";

/**
 * Initializes an instance of HTMLTrackElement.
 * 
 * It invokes the function `initHTMLElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTrack = (element, ...properties) => {
    console.assert(element instanceof HTMLTrackElement);
    initHTMLElement(element, { additionalClassName: 'track' }, ...properties);
}

/**
 * Creates an instance of HTMLTrackElement for tag 'track'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const track = (...properties) => {
    const element = document.createElement('track');
    initTrack(element, ...properties);
    return element;
}
