import { initHTMLMediaElement } from "./HTMLMediaElement.js";

/**
 * Initializes an instance of HTMLAudioElement.
 * 
 * It invokes the function `initHTMLMediaElement(element, ...properties)`.
 * 
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAudio = (element, ...properties) => {
    console.assert(element instanceof HTMLAudioElement);
    initHTMLMediaElement(element, ...properties);
}

/**
 * Creates an instance of HTMLAudioElement for tag 'audio'.
 * 
 * @param  {...any} properties the element's properties.
 * 
 * @return the created element.
 */
export const audio = (...properties) => {
    const element = document.createElement('audio');
    initAudio(element, ...properties);
    return element;
}
