import { initIcon } from "./icon.js";

//the url of the get app svg; resolved relative to this module
const URL_GETAPP = new URL('../../assets/icons/getApp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a get app icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/getApp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGetAppIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'getAppIcon', url: URL_GETAPP }, ...properties);
}

/**
 * Creates a get app icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const getAppIcon = (...properties) => {
    const element = document.createElement('div');
    initGetAppIcon(element, ...properties);
    return element;
}
