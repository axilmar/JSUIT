import { initIcon } from "./icon.js";

//the url of the crop outlined svg; resolved relative to this module
const URL_CROPOUTLINED = new URL('../../assets/icons/cropOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CROPOUTLINED }, ...properties);
}

/**
 * Creates a crop outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCropOutlinedIcon(element, ...properties);
    return element;
}
