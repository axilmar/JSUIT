import { initIcon } from "./icon.js";

//the url of the signal wifi4 bar lock svg; resolved relative to this module
const URL_SIGNALWIFI4BARLOCK = new URL('../../assets/icons/signalWifi4BarLock.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi4 bar lock icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifi4BarLock.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifi4BarLockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalWifi4BarLockIcon', url: URL_SIGNALWIFI4BARLOCK }, ...properties);
}

/**
 * Creates a signal wifi4 bar lock icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifi4BarLockIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifi4BarLockIcon(element, ...properties);
    return element;
}
