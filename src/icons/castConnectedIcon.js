import { initIcon } from "./icon.js";

//the url of the cast connected svg; resolved relative to this module
const URL_CASTCONNECTED = new URL('../../assets/icons/castConnected.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cast connected icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/castConnected.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCastConnectedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CASTCONNECTED }, ...properties);
}

/**
 * Creates a cast connected icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const castConnectedIcon = (...properties) => {
    const element = document.createElement('div');
    initCastConnectedIcon(element, ...properties);
    return element;
}
