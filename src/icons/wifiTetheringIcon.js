import { initIcon } from "./icon.js";

//the url of the wifi tethering svg; resolved relative to this module
const URL_WIFITETHERING = new URL('../../assets/icons/wifiTethering.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi tethering icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiTethering.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiTetheringIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wifiTetheringIcon', url: URL_WIFITETHERING }, ...properties);
}

/**
 * Creates a wifi tethering icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiTetheringIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiTetheringIcon(element, ...properties);
    return element;
}
