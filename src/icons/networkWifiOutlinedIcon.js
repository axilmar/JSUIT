import { initIcon } from "./icon.js";

//the url of the network wifi outlined svg; resolved relative to this module
const URL_NETWORKWIFIOUTLINED = new URL('../../assets/icons/networkWifiOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network wifi outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkWifiOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkWifiOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NETWORKWIFIOUTLINED }, ...properties);
}

/**
 * Creates a network wifi outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkWifiOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkWifiOutlinedIcon(element, ...properties);
    return element;
}
