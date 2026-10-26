import { initIcon } from "./icon.js";

//the url of the app blocking svg; resolved relative to this module
const URL_APPBLOCKING = new URL('../../assets/icons/appBlocking.svg', import.meta.url).href;

/**
 * Initializes an icon element as an app blocking icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/appBlocking.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAppBlockingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_APPBLOCKING }, ...properties);
}

/**
 * Creates an app blocking icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const appBlockingIcon = (...properties) => {
    const element = document.createElement('div');
    initAppBlockingIcon(element, ...properties);
    return element;
}
