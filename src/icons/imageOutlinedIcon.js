import { initIcon } from "./icon.js";

//the url of the image outlined svg; resolved relative to this module
const URL_IMAGEOUTLINED = new URL('../../assets/icons/imageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an image outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/imageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_IMAGEOUTLINED }, ...properties);
}

/**
 * Creates an image outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const imageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initImageOutlinedIcon(element, ...properties);
    return element;
}
