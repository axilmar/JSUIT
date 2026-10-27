import { initIcon } from "./icon.js";

//the url of the network wifi3 bar outlined svg; resolved relative to this module
const URL_NETWORKWIFI3BAROUTLINED = new URL('../../assets/icons/networkWifi3BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network wifi3 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkWifi3BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkWifi3BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'networkWifi3BarOutlinedIcon', url: URL_NETWORKWIFI3BAROUTLINED }, ...properties);
}

/**
 * Creates a network wifi3 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkWifi3BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkWifi3BarOutlinedIcon(element, ...properties);
    return element;
}
