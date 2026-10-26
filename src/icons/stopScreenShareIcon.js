import { initIcon } from "./icon.js";

//the url of the stop screen share svg; resolved relative to this module
const URL_STOPSCREENSHARE = new URL('../../assets/icons/stopScreenShare.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stop screen share icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stopScreenShare.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStopScreenShareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STOPSCREENSHARE }, ...properties);
}

/**
 * Creates a stop screen share icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stopScreenShareIcon = (...properties) => {
    const element = document.createElement('div');
    initStopScreenShareIcon(element, ...properties);
    return element;
}
