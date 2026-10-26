import { initIcon } from "./icon.js";

//the url of the signal wifi3 bar lock svg; resolved relative to this module
const URL_SIGNALWIFI3BARLOCK = new URL('../../assets/icons/signalWifi3BarLock.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi3 bar lock icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifi3BarLock.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifi3BarLockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALWIFI3BARLOCK }, ...properties);
}

/**
 * Creates a signal wifi3 bar lock icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifi3BarLockIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifi3BarLockIcon(element, ...properties);
    return element;
}
