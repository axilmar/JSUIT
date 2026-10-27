import { initIcon } from "./icon.js";

//the url of the share location svg; resolved relative to this module
const URL_SHARELOCATION = new URL('../../assets/icons/shareLocation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a share location icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/shareLocation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initShareLocationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'shareLocationIcon', url: URL_SHARELOCATION }, ...properties);
}

/**
 * Creates a share location icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const shareLocationIcon = (...properties) => {
    const element = document.createElement('div');
    initShareLocationIcon(element, ...properties);
    return element;
}
