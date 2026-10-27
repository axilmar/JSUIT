import { initIcon } from "./icon.js";

//the url of the signal wifi1 bar lock svg; resolved relative to this module
const URL_SIGNALWIFI1BARLOCK = new URL('../../assets/icons/signalWifi1BarLock.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal wifi1 bar lock icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalWifi1BarLock.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalWifi1BarLockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'signalWifi1BarLockIcon', url: URL_SIGNALWIFI1BARLOCK }, ...properties);
}

/**
 * Creates a signal wifi1 bar lock icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalWifi1BarLockIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalWifi1BarLockIcon(element, ...properties);
    return element;
}
