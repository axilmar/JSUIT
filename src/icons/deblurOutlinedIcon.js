import { initIcon } from "./icon.js";

//the url of the deblur outlined svg; resolved relative to this module
const URL_DEBLUROUTLINED = new URL('../../assets/icons/deblurOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a deblur outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/deblurOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDeblurOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEBLUROUTLINED }, ...properties);
}

/**
 * Creates a deblur outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const deblurOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDeblurOutlinedIcon(element, ...properties);
    return element;
}
