import { initIcon } from "./icon.js";

//the url of the image aspect ratio outlined svg; resolved relative to this module
const URL_IMAGEASPECTRATIOOUTLINED = new URL('../../assets/icons/imageAspectRatioOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an image aspect ratio outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/imageAspectRatioOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initImageAspectRatioOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'imageAspectRatioOutlinedIcon', url: URL_IMAGEASPECTRATIOOUTLINED }, ...properties);
}

/**
 * Creates an image aspect ratio outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const imageAspectRatioOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initImageAspectRatioOutlinedIcon(element, ...properties);
    return element;
}
