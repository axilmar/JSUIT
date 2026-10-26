import { initIcon } from "./icon.js";

//the url of the filter list outlined svg; resolved relative to this module
const URL_FILTERLISTOUTLINED = new URL('../../assets/icons/filterListOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter list outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterListOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterListOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERLISTOUTLINED }, ...properties);
}

/**
 * Creates a filter list outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterListOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterListOutlinedIcon(element, ...properties);
    return element;
}
