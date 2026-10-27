import { initIcon } from "./icon.js";

//the url of the network wifi3 bar svg; resolved relative to this module
const URL_NETWORKWIFI3BAR = new URL('../../assets/icons/networkWifi3Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network wifi3 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkWifi3Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkWifi3BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'networkWifi3BarIcon', url: URL_NETWORKWIFI3BAR }, ...properties);
}

/**
 * Creates a network wifi3 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkWifi3BarIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkWifi3BarIcon(element, ...properties);
    return element;
}
