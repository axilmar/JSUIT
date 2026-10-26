import { initIcon } from "./icon.js";

//the url of the deblur svg; resolved relative to this module
const URL_DEBLUR = new URL('../../assets/icons/deblur.svg', import.meta.url).href;

/**
 * Initializes an icon element as a deblur icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deblur.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeblurIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEBLUR }, ...properties);
}

/**
 * Creates a deblur icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deblurIcon = (...properties) => {
    const element = document.createElement('div');
    initDeblurIcon(element, ...properties);
    return element;
}
