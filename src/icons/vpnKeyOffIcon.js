import { initIcon } from "./icon.js";

//the url of the vpn key off svg; resolved relative to this module
const URL_VPNKEYOFF = new URL('../../assets/icons/vpnKeyOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vpn key off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vpnKeyOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVpnKeyOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VPNKEYOFF }, ...properties);
}

/**
 * Creates a vpn key off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vpnKeyOffIcon = (...properties) => {
    const element = document.createElement('div');
    initVpnKeyOffIcon(element, ...properties);
    return element;
}
