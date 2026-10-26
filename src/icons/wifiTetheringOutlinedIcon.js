import { initIcon } from "./icon.js";

//the url of the wifi tethering outlined svg; resolved relative to this module
const URL_WIFITETHERINGOUTLINED = new URL('../../assets/icons/wifiTetheringOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi tethering outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiTetheringOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiTetheringOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIFITETHERINGOUTLINED }, ...properties);
}

/**
 * Creates a wifi tethering outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiTetheringOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiTetheringOutlinedIcon(element, ...properties);
    return element;
}
