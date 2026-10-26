import { initIcon } from "./icon.js";

//the url of the crop landscape outlined svg; resolved relative to this module
const URL_CROPLANDSCAPEOUTLINED = new URL('../../assets/icons/cropLandscapeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop landscape outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropLandscapeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropLandscapeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CROPLANDSCAPEOUTLINED }, ...properties);
}

/**
 * Creates a crop landscape outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropLandscapeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCropLandscapeOutlinedIcon(element, ...properties);
    return element;
}
