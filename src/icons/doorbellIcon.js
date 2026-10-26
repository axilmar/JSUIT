import { initIcon } from "./icon.js";

//the url of the doorbell svg; resolved relative to this module
const URL_DOORBELL = new URL('../../assets/icons/doorbell.svg', import.meta.url).href;

/**
 * Initializes an icon element as a doorbell icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doorbell.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoorbellIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DOORBELL }, ...properties);
}

/**
 * Creates a doorbell icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doorbellIcon = (...properties) => {
    const element = document.createElement('div');
    initDoorbellIcon(element, ...properties);
    return element;
}
