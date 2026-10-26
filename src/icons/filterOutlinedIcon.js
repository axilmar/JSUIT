import { initIcon } from "./icon.js";

//the url of the filter outlined svg; resolved relative to this module
const URL_FILTEROUTLINED = new URL('../../assets/icons/filterOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTEROUTLINED }, ...properties);
}

/**
 * Creates a filter outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterOutlinedIcon(element, ...properties);
    return element;
}
