import { initIcon } from "./icon.js";

//the url of the network wifi1 bar outlined svg; resolved relative to this module
const URL_NETWORKWIFI1BAROUTLINED = new URL('../../assets/icons/networkWifi1BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network wifi1 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkWifi1BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkWifi1BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'networkWifi1BarOutlinedIcon', url: URL_NETWORKWIFI1BAROUTLINED }, ...properties);
}

/**
 * Creates a network wifi1 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkWifi1BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkWifi1BarOutlinedIcon(element, ...properties);
    return element;
}
