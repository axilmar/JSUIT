import { initIcon } from "./icon.js";

//the url of the screen share outlined svg; resolved relative to this module
const URL_SCREENSHAREOUTLINED = new URL('../../assets/icons/screenShareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a screen share outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/screenShareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initScreenShareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SCREENSHAREOUTLINED }, ...properties);
}

/**
 * Creates a screen share outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const screenShareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initScreenShareOutlinedIcon(element, ...properties);
    return element;
}
