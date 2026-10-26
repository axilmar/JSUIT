import { initIcon } from "./icon.js";

//the url of the high quality svg; resolved relative to this module
const URL_HIGHQUALITY = new URL('../../assets/icons/highQuality.svg', import.meta.url).href;

/**
 * Initializes an icon element as a high quality icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/highQuality.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHighQualityIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HIGHQUALITY }, ...properties);
}

/**
 * Creates a high quality icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const highQualityIcon = (...properties) => {
    const element = document.createElement('div');
    initHighQualityIcon(element, ...properties);
    return element;
}
