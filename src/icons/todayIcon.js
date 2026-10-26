import { initIcon } from "./icon.js";

//the url of the today svg; resolved relative to this module
const URL_TODAY = new URL('../../assets/icons/today.svg', import.meta.url).href;

/**
 * Initializes an icon element as a today icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/today.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTodayIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TODAY }, ...properties);
}

/**
 * Creates a today icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const todayIcon = (...properties) => {
    const element = document.createElement('div');
    initTodayIcon(element, ...properties);
    return element;
}
