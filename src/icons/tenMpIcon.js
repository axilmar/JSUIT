import { initIcon } from "./icon.js";

//the url of the ten mp svg; resolved relative to this module
const URL_TENMP = new URL('../../assets/icons/tenMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a ten mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tenMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTenMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TENMP }, ...properties);
}

/**
 * Creates a ten mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tenMpIcon = (...properties) => {
    const element = document.createElement('div');
    initTenMpIcon(element, ...properties);
    return element;
}
