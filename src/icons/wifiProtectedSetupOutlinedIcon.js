import { initIcon } from "./icon.js";

//the url of the wifi protected setup outlined svg; resolved relative to this module
const URL_WIFIPROTECTEDSETUPOUTLINED = new URL('../../assets/icons/wifiProtectedSetupOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi protected setup outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiProtectedSetupOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiProtectedSetupOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIFIPROTECTEDSETUPOUTLINED }, ...properties);
}

/**
 * Creates a wifi protected setup outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiProtectedSetupOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiProtectedSetupOutlinedIcon(element, ...properties);
    return element;
}
