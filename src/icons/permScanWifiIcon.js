import { initIcon } from "./icon.js";

//the url of the perm scan wifi svg; resolved relative to this module
const URL_PERMSCANWIFI = new URL('../../assets/icons/permScanWifi.svg', import.meta.url).href;

/**
 * Initializes an icon element as a perm scan wifi icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/permScanWifi.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPermScanWifiIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'permScanWifiIcon', url: URL_PERMSCANWIFI }, ...properties);
}

/**
 * Creates a perm scan wifi icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const permScanWifiIcon = (...properties) => {
    const element = document.createElement('div');
    initPermScanWifiIcon(element, ...properties);
    return element;
}
