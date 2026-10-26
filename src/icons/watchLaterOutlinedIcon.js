import { initIcon } from "./icon.js";

//the url of the watch later outlined svg; resolved relative to this module
const URL_WATCHLATEROUTLINED = new URL('../../assets/icons/watchLaterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a watch later outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/watchLaterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWatchLaterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WATCHLATEROUTLINED }, ...properties);
}

/**
 * Creates a watch later outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const watchLaterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWatchLaterOutlinedIcon(element, ...properties);
    return element;
}
