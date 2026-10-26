import { initIcon } from "./icon.js";

//the url of the miscellaneous services outlined svg; resolved relative to this module
const URL_MISCELLANEOUSSERVICESOUTLINED = new URL('../../assets/icons/miscellaneousServicesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a miscellaneous services outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/miscellaneousServicesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMiscellaneousServicesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MISCELLANEOUSSERVICESOUTLINED }, ...properties);
}

/**
 * Creates a miscellaneous services outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const miscellaneousServicesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMiscellaneousServicesOutlinedIcon(element, ...properties);
    return element;
}
