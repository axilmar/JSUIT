import { initIcon } from "./icon.js";

//the url of the crop portrait outlined svg; resolved relative to this module
const URL_CROPPORTRAITOUTLINED = new URL('../../assets/icons/cropPortraitOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop portrait outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropPortraitOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropPortraitOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CROPPORTRAITOUTLINED }, ...properties);
}

/**
 * Creates a crop portrait outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropPortraitOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCropPortraitOutlinedIcon(element, ...properties);
    return element;
}
