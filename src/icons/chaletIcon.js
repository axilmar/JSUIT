import { initIcon } from "./icon.js";

//the url of the chalet svg; resolved relative to this module
const URL_CHALET = new URL('../../assets/icons/chalet.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chalet icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chalet.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChaletIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'chaletIcon', url: URL_CHALET }, ...properties);
}

/**
 * Creates a chalet icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chaletIcon = (...properties) => {
    const element = document.createElement('div');
    initChaletIcon(element, ...properties);
    return element;
}
