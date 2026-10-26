import { initIcon } from "./icon.js";

//the url of the monochrome photos outlined svg; resolved relative to this module
const URL_MONOCHROMEPHOTOSOUTLINED = new URL('../../assets/icons/monochromePhotosOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a monochrome photos outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/monochromePhotosOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMonochromePhotosOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MONOCHROMEPHOTOSOUTLINED }, ...properties);
}

/**
 * Creates a monochrome photos outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const monochromePhotosOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMonochromePhotosOutlinedIcon(element, ...properties);
    return element;
}
