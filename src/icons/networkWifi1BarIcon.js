import { initIcon } from "./icon.js";

//the url of the network wifi1 bar svg; resolved relative to this module
const URL_NETWORKWIFI1BAR = new URL('../../assets/icons/networkWifi1Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network wifi1 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkWifi1Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkWifi1BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NETWORKWIFI1BAR }, ...properties);
}

/**
 * Creates a network wifi1 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkWifi1BarIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkWifi1BarIcon(element, ...properties);
    return element;
}
