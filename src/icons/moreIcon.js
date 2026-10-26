import { initIcon } from "./icon.js";

//the url of the more svg; resolved relative to this module
const URL_MORE = new URL('../../assets/icons/more.svg', import.meta.url).href;

/**
 * Initializes an icon element as a more icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/more.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MORE }, ...properties);
}

/**
 * Creates a more icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moreIcon = (...properties) => {
    const element = document.createElement('div');
    initMoreIcon(element, ...properties);
    return element;
}
