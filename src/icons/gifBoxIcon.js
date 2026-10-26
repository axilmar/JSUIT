import { initIcon } from "./icon.js";

//the url of the gif box svg; resolved relative to this module
const URL_GIFBOX = new URL('../../assets/icons/gifBox.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gif box icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gifBox.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGifBoxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GIFBOX }, ...properties);
}

/**
 * Creates a gif box icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gifBoxIcon = (...properties) => {
    const element = document.createElement('div');
    initGifBoxIcon(element, ...properties);
    return element;
}
