import { initIcon } from "./icon.js";

//the url of the cached outlined svg; resolved relative to this module
const URL_CACHEDOUTLINED = new URL('../../assets/icons/cachedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cached outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cachedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCachedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CACHEDOUTLINED }, ...properties);
}

/**
 * Creates a cached outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cachedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCachedOutlinedIcon(element, ...properties);
    return element;
}
