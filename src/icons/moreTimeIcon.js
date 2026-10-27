import { initIcon } from "./icon.js";

//the url of the more time svg; resolved relative to this module
const URL_MORETIME = new URL('../../assets/icons/moreTime.svg', import.meta.url).href;

/**
 * Initializes an icon element as a more time icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moreTime.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoreTimeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'moreTimeIcon', url: URL_MORETIME }, ...properties);
}

/**
 * Creates a more time icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moreTimeIcon = (...properties) => {
    const element = document.createElement('div');
    initMoreTimeIcon(element, ...properties);
    return element;
}
