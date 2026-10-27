import { initIcon } from "./icon.js";

//the url of the network wifi2 bar svg; resolved relative to this module
const URL_NETWORKWIFI2BAR = new URL('../../assets/icons/networkWifi2Bar.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network wifi2 bar icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkWifi2Bar.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkWifi2BarIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'networkWifi2BarIcon', url: URL_NETWORKWIFI2BAR }, ...properties);
}

/**
 * Creates a network wifi2 bar icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkWifi2BarIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkWifi2BarIcon(element, ...properties);
    return element;
}
