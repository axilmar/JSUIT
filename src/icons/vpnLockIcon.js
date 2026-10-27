import { initIcon } from "./icon.js";

//the url of the vpn lock svg; resolved relative to this module
const URL_VPNLOCK = new URL('../../assets/icons/vpnLock.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vpn lock icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vpnLock.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVpnLockIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'vpnLockIcon', url: URL_VPNLOCK }, ...properties);
}

/**
 * Creates a vpn lock icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vpnLockIcon = (...properties) => {
    const element = document.createElement('div');
    initVpnLockIcon(element, ...properties);
    return element;
}
