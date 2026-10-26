import { initIcon } from "./icon.js";

//the url of the photo filter outlined svg; resolved relative to this module
const URL_PHOTOFILTEROUTLINED = new URL('../../assets/icons/photoFilterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a photo filter outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/photoFilterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPhotoFilterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PHOTOFILTEROUTLINED }, ...properties);
}

/**
 * Creates a photo filter outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const photoFilterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPhotoFilterOutlinedIcon(element, ...properties);
    return element;
}
