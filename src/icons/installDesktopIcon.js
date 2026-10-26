import { initIcon } from "./icon.js";

//the url of the install desktop svg; resolved relative to this module
const URL_INSTALLDESKTOP = new URL('../../assets/icons/installDesktop.svg', import.meta.url).href;

/**
 * Initializes an icon element as an install desktop icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/installDesktop.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInstallDesktopIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INSTALLDESKTOP }, ...properties);
}

/**
 * Creates an install desktop icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const installDesktopIcon = (...properties) => {
    const element = document.createElement('div');
    initInstallDesktopIcon(element, ...properties);
    return element;
}
