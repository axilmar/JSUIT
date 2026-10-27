import { initIcon } from "./icon.js";

//the url of the crop square outlined svg; resolved relative to this module
const URL_CROPSQUAREOUTLINED = new URL('../../assets/icons/cropSquareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop square outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropSquareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropSquareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cropSquareOutlinedIcon', url: URL_CROPSQUAREOUTLINED }, ...properties);
}

/**
 * Creates a crop square outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropSquareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCropSquareOutlinedIcon(element, ...properties);
    return element;
}
