import { initIcon } from "./icon.js";

//the url of the screen share svg; resolved relative to this module
const URL_SCREENSHARE = new URL('../../assets/icons/screenShare.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen share icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenShare.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenShareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCREENSHARE }, ...properties);
}

/**
 * Creates a screen share icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenShareIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenShareIcon(element, ...properties);
    return element;
}
