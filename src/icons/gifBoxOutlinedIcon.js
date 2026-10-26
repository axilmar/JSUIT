import { initIcon } from "./icon.js";

//the url of the gif box outlined svg; resolved relative to this module
const URL_GIFBOXOUTLINED = new URL('../../assets/icons/gifBoxOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gif box outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gifBoxOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGifBoxOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GIFBOXOUTLINED }, ...properties);
}

/**
 * Creates a gif box outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gifBoxOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGifBoxOutlinedIcon(element, ...properties);
    return element;
}
