import { initIcon } from "./icon.js";

//the url of the quickreply svg; resolved relative to this module
const URL_QUICKREPLY = new URL('../../assets/icons/quickreply.svg', import.meta.url).href;

/**
 * Initializes an icon element as a quickreply icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/quickreply.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initQuickreplyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_QUICKREPLY }, ...properties);
}

/**
 * Creates a quickreply icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const quickreplyIcon = (...properties) => {
    const element = document.createElement('div');
    initQuickreplyIcon(element, ...properties);
    return element;
}
