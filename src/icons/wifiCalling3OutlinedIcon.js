import { initIcon } from "./icon.js";

//the url of the wifi calling3 outlined svg; resolved relative to this module
const URL_WIFICALLING3OUTLINED = new URL('../../assets/icons/wifiCalling3Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi calling3 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiCalling3Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiCalling3OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIFICALLING3OUTLINED }, ...properties);
}

/**
 * Creates a wifi calling3 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiCalling3OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiCalling3OutlinedIcon(element, ...properties);
    return element;
}
