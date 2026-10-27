import { initIcon } from "./icon.js";

//the url of the photo outlined svg; resolved relative to this module
const URL_PHOTOOUTLINED = new URL('../../assets/icons/photoOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'photoOutlinedIcon', url: URL_PHOTOOUTLINED }, ...properties);
}

/**
 * Creates a photo outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoOutlinedIcon(element, ...properties);
    return element;
}
