import { initIcon } from "./icon.js";

//the url of the network locked svg; resolved relative to this module
const URL_NETWORKLOCKED = new URL('../../assets/icons/networkLocked.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network locked icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkLocked.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkLockedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'networkLockedIcon', url: URL_NETWORKLOCKED }, ...properties);
}

/**
 * Creates a network locked icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkLockedIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkLockedIcon(element, ...properties);
    return element;
}
