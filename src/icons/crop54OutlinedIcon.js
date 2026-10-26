import { initIcon } from "./icon.js";

//the url of the crop54 outlined svg; resolved relative to this module
const URL_CROP54OUTLINED = new URL('../../assets/icons/crop54Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop54 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/crop54Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCrop54OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CROP54OUTLINED }, ...properties);
}

/**
 * Creates a crop54 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const crop54OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCrop54OutlinedIcon(element, ...properties);
    return element;
}
