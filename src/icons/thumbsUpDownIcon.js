import { initIcon } from "./icon.js";

//the url of the thumbs up down svg; resolved relative to this module
const URL_THUMBSUPDOWN = new URL('../../assets/icons/thumbsUpDown.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumbs up down icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbsUpDown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbsUpDownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THUMBSUPDOWN }, ...properties);
}

/**
 * Creates a thumbs up down icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbsUpDownIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbsUpDownIcon(element, ...properties);
    return element;
}
