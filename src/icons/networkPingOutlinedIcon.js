import { initIcon } from "./icon.js";

//the url of the network ping outlined svg; resolved relative to this module
const URL_NETWORKPINGOUTLINED = new URL('../../assets/icons/networkPingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network ping outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkPingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkPingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'networkPingOutlinedIcon', url: URL_NETWORKPINGOUTLINED }, ...properties);
}

/**
 * Creates a network ping outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkPingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkPingOutlinedIcon(element, ...properties);
    return element;
}
