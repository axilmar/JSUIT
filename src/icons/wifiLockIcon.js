import { initIcon } from "./icon.js";

//the url of the wifi lock svg; resolved relative to this module
const URL_WIFILOCK = new URL('../../assets/icons/wifiLock.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi lock icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiLock.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiLockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifiLockIcon', url: URL_WIFILOCK }, ...properties);
}

/**
 * Creates a wifi lock icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiLockIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiLockIcon(element, ...properties);
    return element;
}
