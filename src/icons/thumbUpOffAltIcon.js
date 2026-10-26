import { initIcon } from "./icon.js";

//the url of the thumb up off alt svg; resolved relative to this module
const URL_THUMBUPOFFALT = new URL('../../assets/icons/thumbUpOffAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thumb up off alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thumbUpOffAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThumbUpOffAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THUMBUPOFFALT }, ...properties);
}

/**
 * Creates a thumb up off alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thumbUpOffAltIcon = (...properties) => {
    const element = document.createElement('div');
    initThumbUpOffAltIcon(element, ...properties);
    return element;
}
