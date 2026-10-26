import { initIcon } from "./icon.js";

//the url of the vpn key outlined svg; resolved relative to this module
const URL_VPNKEYOUTLINED = new URL('../../assets/icons/vpnKeyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vpn key outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vpnKeyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVpnKeyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VPNKEYOUTLINED }, ...properties);
}

/**
 * Creates a vpn key outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vpnKeyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVpnKeyOutlinedIcon(element, ...properties);
    return element;
}
