import { initIcon } from "./icon.js";

//the url of the gif svg; resolved relative to this module
const URL_GIF = new URL('../../assets/icons/gif.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gif icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gif.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGifIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GIF }, ...properties);
}

/**
 * Creates a gif icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gifIcon = (...properties) => {
    const element = document.createElement('div');
    initGifIcon(element, ...properties);
    return element;
}
