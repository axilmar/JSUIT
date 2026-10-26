import { initIcon } from "./icon.js";

//the url of the desktop mac svg; resolved relative to this module
const URL_DESKTOPMAC = new URL('../../assets/icons/desktopMac.svg', import.meta.url).href;

/**
 * Initializes an icon element as a desktop mac icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/desktopMac.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDesktopMacIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DESKTOPMAC }, ...properties);
}

/**
 * Creates a desktop mac icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const desktopMacIcon = (...properties) => {
    const element = document.createElement('div');
    initDesktopMacIcon(element, ...properties);
    return element;
}
