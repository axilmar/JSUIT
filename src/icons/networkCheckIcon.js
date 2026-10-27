import { initIcon } from "./icon.js";

//the url of the network check svg; resolved relative to this module
const URL_NETWORKCHECK = new URL('../../assets/icons/networkCheck.svg', import.meta.url).href;

/**
 * Initializes an icon element as a network check icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/networkCheck.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNetworkCheckIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'networkCheckIcon', url: URL_NETWORKCHECK }, ...properties);
}

/**
 * Creates a network check icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const networkCheckIcon = (...properties) => {
    const element = document.createElement('div');
    initNetworkCheckIcon(element, ...properties);
    return element;
}
