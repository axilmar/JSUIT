import { initIcon } from "./icon.js";

//the url of the thumb down svg; resolved relative to this module
const URL_THUMBDOWN = new URL('../../assets/icons/thumbDown.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumb down icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbDown.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbDownIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THUMBDOWN }, ...properties);
}

/**
 * Creates a thumb down icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbDownIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbDownIcon(element, ...properties);
    return element;
}
