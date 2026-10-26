import { initIcon } from "./icon.js";

//the url of the crop75 outlined svg; resolved relative to this module
const URL_CROP75OUTLINED = new URL('../../assets/icons/crop75Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop75 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/crop75Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCrop75OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CROP75OUTLINED }, ...properties);
}

/**
 * Creates a crop75 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const crop75OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCrop75OutlinedIcon(element, ...properties);
    return element;
}
