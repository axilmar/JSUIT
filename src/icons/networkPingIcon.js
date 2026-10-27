import { initIcon } from "./icon.js";

//the url of the network ping svg; resolved relative to this module
const URL_NETWORKPING = new URL('../../assets/icons/networkPing.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network ping icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkPing.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkPingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'networkPingIcon', url: URL_NETWORKPING }, ...properties);
}

/**
 * Creates a network ping icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkPingIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkPingIcon(element, ...properties);
    return element;
}
