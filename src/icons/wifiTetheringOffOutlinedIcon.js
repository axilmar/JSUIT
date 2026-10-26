import { initIcon } from "./icon.js";

//the url of the wifi tethering off outlined svg; resolved relative to this module
const URL_WIFITETHERINGOFFOUTLINED = new URL('../../assets/icons/wifiTetheringOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi tethering off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiTetheringOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiTetheringOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIFITETHERINGOFFOUTLINED }, ...properties);
}

/**
 * Creates a wifi tethering off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiTetheringOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiTetheringOffOutlinedIcon(element, ...properties);
    return element;
}
