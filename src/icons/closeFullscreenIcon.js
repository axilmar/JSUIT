import { initIcon } from "./icon.js";

//the url of the close fullscreen svg; resolved relative to this module
const URL_CLOSEFULLSCREEN = new URL('../../assets/icons/closeFullscreen.svg', import.meta.url).href;

/**
 * Initializes an icon element as a close fullscreen icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/closeFullscreen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloseFullscreenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'closeFullscreenIcon', url: URL_CLOSEFULLSCREEN }, ...properties);
}

/**
 * Creates a close fullscreen icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const closeFullscreenIcon = (...properties) => {
    const element = document.createElement('div');
    initCloseFullscreenIcon(element, ...properties);
    return element;
}
