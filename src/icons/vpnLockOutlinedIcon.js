import { initIcon } from "./icon.js";

//the url of the vpn lock outlined svg; resolved relative to this module
const URL_VPNLOCKOUTLINED = new URL('../../assets/icons/vpnLockOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vpn lock outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vpnLockOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVpnLockOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VPNLOCKOUTLINED }, ...properties);
}

/**
 * Creates a vpn lock outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vpnLockOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVpnLockOutlinedIcon(element, ...properties);
    return element;
}
