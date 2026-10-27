import { initIcon } from "./icon.js";

//the url of the network wifi2 bar outlined svg; resolved relative to this module
const URL_NETWORKWIFI2BAROUTLINED = new URL('../../assets/icons/networkWifi2BarOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network wifi2 bar outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkWifi2BarOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkWifi2BarOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'networkWifi2BarOutlinedIcon', url: URL_NETWORKWIFI2BAROUTLINED }, ...properties);
}

/**
 * Creates a network wifi2 bar outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkWifi2BarOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkWifi2BarOutlinedIcon(element, ...properties);
    return element;
}
