import { initIcon } from "./icon.js";

//the url of the crop free outlined svg; resolved relative to this module
const URL_CROPFREEOUTLINED = new URL('../../assets/icons/cropFreeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop free outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cropFreeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCropFreeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CROPFREEOUTLINED }, ...properties);
}

/**
 * Creates a crop free outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cropFreeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCropFreeOutlinedIcon(element, ...properties);
    return element;
}
