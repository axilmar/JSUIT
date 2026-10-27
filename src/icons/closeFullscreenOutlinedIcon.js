import { initIcon } from "./icon.js";

//the url of the close fullscreen outlined svg; resolved relative to this module
const URL_CLOSEFULLSCREENOUTLINED = new URL('../../assets/icons/closeFullscreenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a close fullscreen outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/closeFullscreenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCloseFullscreenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'closeFullscreenOutlinedIcon', url: URL_CLOSEFULLSCREENOUTLINED }, ...properties);
}

/**
 * Creates a close fullscreen outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const closeFullscreenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCloseFullscreenOutlinedIcon(element, ...properties);
    return element;
}
