import { initIcon } from "./icon.js";

//the url of the thumb up alt svg; resolved relative to this module
const URL_THUMBUPALT = new URL('../../assets/icons/thumbUpAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumb up alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbUpAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbUpAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THUMBUPALT }, ...properties);
}

/**
 * Creates a thumb up alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbUpAltIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbUpAltIcon(element, ...properties);
    return element;
}
