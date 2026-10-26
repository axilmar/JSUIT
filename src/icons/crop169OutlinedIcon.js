import { initIcon } from "./icon.js";

//the url of the crop169 outlined svg; resolved relative to this module
const URL_CROP169OUTLINED = new URL('../../assets/icons/crop169Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a crop169 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/crop169Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCrop169OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CROP169OUTLINED }, ...properties);
}

/**
 * Creates a crop169 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const crop169OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCrop169OutlinedIcon(element, ...properties);
    return element;
}
