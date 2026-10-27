import { initIcon } from "./icon.js";

//the url of the crop original outlined svg; resolved relative to this module
const URL_CROPORIGINALOUTLINED = new URL('../../assets/icons/cropOriginalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop original outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropOriginalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropOriginalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cropOriginalOutlinedIcon', url: URL_CROPORIGINALOUTLINED }, ...properties);
}

/**
 * Creates a crop original outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropOriginalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCropOriginalOutlinedIcon(element, ...properties);
    return element;
}
