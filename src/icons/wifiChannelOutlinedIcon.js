import { initIcon } from "./icon.js";

//the url of the wifi channel outlined svg; resolved relative to this module
const URL_WIFICHANNELOUTLINED = new URL('../../assets/icons/wifiChannelOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wifi channel outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wifiChannelOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWifiChannelOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIFICHANNELOUTLINED }, ...properties);
}

/**
 * Creates a wifi channel outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wifiChannelOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWifiChannelOutlinedIcon(element, ...properties);
    return element;
}
