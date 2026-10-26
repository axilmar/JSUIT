import { initIcon } from "./icon.js";

//the url of the outbound svg; resolved relative to this module
const URL_OUTBOUND = new URL('../../assets/icons/outbound.svg', import.meta.url).href;

/**
 * Initializes an icon element as an outbound icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/outbound.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initOutboundIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_OUTBOUND }, ...properties);
}

/**
 * Creates an outbound icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const outboundIcon = (...properties) => {
    const element = document.createElement('div');
    initOutboundIcon(element, ...properties);
    return element;
}
