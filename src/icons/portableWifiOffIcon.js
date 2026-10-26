import { initIcon } from "./icon.js";

//the url of the portable wifi off svg; resolved relative to this module
const URL_PORTABLEWIFIOFF = new URL('../../assets/icons/portableWifiOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a portable wifi off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/portableWifiOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPortableWifiOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PORTABLEWIFIOFF }, ...properties);
}

/**
 * Creates a portable wifi off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const portableWifiOffIcon = (...properties) => {
    const element = document.createElement('div');
    initPortableWifiOffIcon(element, ...properties);
    return element;
}
