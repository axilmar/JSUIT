import { initIcon } from "./icon.js";

//the url of the image search outlined svg; resolved relative to this module
const URL_IMAGESEARCHOUTLINED = new URL('../../assets/icons/imageSearchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an image search outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/imageSearchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImageSearchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_IMAGESEARCHOUTLINED }, ...properties);
}

/**
 * Creates an image search outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const imageSearchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initImageSearchOutlinedIcon(element, ...properties);
    return element;
}
