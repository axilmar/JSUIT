import { initIcon } from "./icon.js";

//the url of the thumb up svg; resolved relative to this module
const URL_THUMBUP = new URL('../../assets/icons/thumbUp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumb up icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbUp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbUpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THUMBUP }, ...properties);
}

/**
 * Creates a thumb up icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbUpIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbUpIcon(element, ...properties);
    return element;
}
