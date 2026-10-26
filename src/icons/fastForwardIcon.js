import { initIcon } from "./icon.js";

//the url of the fast forward svg; resolved relative to this module
const URL_FASTFORWARD = new URL('../../assets/icons/fastForward.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fast forward icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fastForward.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFastForwardIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FASTFORWARD }, ...properties);
}

/**
 * Creates a fast forward icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fastForwardIcon = (...properties) => {
    const element = document.createElement('div');
    initFastForwardIcon(element, ...properties);
    return element;
}
