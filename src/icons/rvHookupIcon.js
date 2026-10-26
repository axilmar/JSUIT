import { initIcon } from "./icon.js";

//the url of the rv hookup svg; resolved relative to this module
const URL_RVHOOKUP = new URL('../../assets/icons/rvHookup.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rv hookup icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rvHookup.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRvHookupIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RVHOOKUP }, ...properties);
}

/**
 * Creates a rv hookup icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rvHookupIcon = (...properties) => {
    const element = document.createElement('div');
    initRvHookupIcon(element, ...properties);
    return element;
}
