import { initIcon } from "./icon.js";

//the url of the watch outlined svg; resolved relative to this module
const URL_WATCHOUTLINED = new URL('../../assets/icons/watchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a watch outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/watchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWatchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WATCHOUTLINED }, ...properties);
}

/**
 * Creates a watch outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const watchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWatchOutlinedIcon(element, ...properties);
    return element;
}
