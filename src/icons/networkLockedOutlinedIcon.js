import { initIcon } from "./icon.js";

//the url of the network locked outlined svg; resolved relative to this module
const URL_NETWORKLOCKEDOUTLINED = new URL('../../assets/icons/networkLockedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network locked outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkLockedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkLockedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'networkLockedOutlinedIcon', url: URL_NETWORKLOCKEDOUTLINED }, ...properties);
}

/**
 * Creates a network locked outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkLockedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkLockedOutlinedIcon(element, ...properties);
    return element;
}
