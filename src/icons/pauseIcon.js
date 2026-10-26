import { initIcon } from "./icon.js";

//the url of the pause svg; resolved relative to this module
const URL_PAUSE = new URL('../../assets/icons/pause.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pause icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pause.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPauseIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PAUSE }, ...properties);
}

/**
 * Creates a pause icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pauseIcon = (...properties) => {
    const element = document.createElement('div');
    initPauseIcon(element, ...properties);
    return element;
}
