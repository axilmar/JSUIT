import { initIcon } from "./icon.js";

//the url of the network wifi svg; resolved relative to this module
const URL_NETWORKWIFI = new URL('../../assets/icons/networkWifi.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network wifi icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkWifi.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkWifiIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NETWORKWIFI }, ...properties);
}

/**
 * Creates a network wifi icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkWifiIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkWifiIcon(element, ...properties);
    return element;
}
