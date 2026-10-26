import { initIcon } from "./icon.js";

//the url of the vpn key off outlined svg; resolved relative to this module
const URL_VPNKEYOFFOUTLINED = new URL('../../assets/icons/vpnKeyOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vpn key off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vpnKeyOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVpnKeyOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VPNKEYOFFOUTLINED }, ...properties);
}

/**
 * Creates a vpn key off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vpnKeyOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVpnKeyOffOutlinedIcon(element, ...properties);
    return element;
}
