import { initIcon } from "./icon.js";

//the url of the wifi tethering off svg; resolved relative to this module
const URL_WIFITETHERINGOFF = new URL('../../assets/icons/wifiTetheringOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi tethering off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiTetheringOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiTetheringOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIFITETHERINGOFF }, ...properties);
}

/**
 * Creates a wifi tethering off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiTetheringOffIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiTetheringOffIcon(element, ...properties);
    return element;
}
