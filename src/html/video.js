import { initHTMLMediaElement } from "./HTMLMediaElement.js";

/**
 * Initializes an instance of HTMLVideoElement.
 * 
 * It invokes the function `initHTMLMediaElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideo = (element, ...properties) => {
    console.assert(element instanceof HTMLVideoElement);
    initHTMLMediaElement(element, ...properties);
}

/**
 * Creates an instance of HTMLVideoElement for tag 'video'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const video = (...properties) => {
    const element = document.createElement('video');
    initVideo(element, ...properties);
    return element;
}
