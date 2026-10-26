import { initIcon } from "./icon.js";

//the url of the mosque svg; resolved relative to this module
const URL_MOSQUE = new URL('../../assets/icons/mosque.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mosque icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mosque.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMosqueIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MOSQUE }, ...properties);
}

/**
 * Creates a mosque icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mosqueIcon = (...properties) => {
    const element = document.createElement('div');
    initMosqueIcon(element, ...properties);
    return element;
}
