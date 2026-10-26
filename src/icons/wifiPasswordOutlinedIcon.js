import { initIcon } from "./icon.js";

//the url of the wifi password outlined svg; resolved relative to this module
const URL_WIFIPASSWORDOUTLINED = new URL('../../assets/icons/wifiPasswordOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi password outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiPasswordOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiPasswordOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIFIPASSWORDOUTLINED }, ...properties);
}

/**
 * Creates a wifi password outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiPasswordOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiPasswordOutlinedIcon(element, ...properties);
    return element;
}
