import { initIcon } from "./icon.js";

//the url of the watch svg; resolved relative to this module
const URL_WATCH = new URL('../../assets/icons/watch.svg', import.meta.url).href;

/**
 * Initializes an icon element as a watch icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/watch.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWatchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'watchIcon', url: URL_WATCH }, ...properties);
}

/**
 * Creates a watch icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const watchIcon = (...properties) => {
    const element = document.createElement('div');
    initWatchIcon(element, ...properties);
    return element;
}
