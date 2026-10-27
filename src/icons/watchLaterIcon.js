import { initIcon } from "./icon.js";

//the url of the watch later svg; resolved relative to this module
const URL_WATCHLATER = new URL('../../assets/icons/watchLater.svg', import.meta.url).href;

/**
 * Initializes an icon element as a watch later icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/watchLater.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWatchLaterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'watchLaterIcon', url: URL_WATCHLATER }, ...properties);
}

/**
 * Creates a watch later icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const watchLaterIcon = (...properties) => {
    const element = document.createElement('div');
    initWatchLaterIcon(element, ...properties);
    return element;
}
