import { initIcon } from "./icon.js";

//the url of the filter list off outlined svg; resolved relative to this module
const URL_FILTERLISTOFFOUTLINED = new URL('../../assets/icons/filterListOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter list off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterListOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterListOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filterListOffOutlinedIcon', url: URL_FILTERLISTOFFOUTLINED }, ...properties);
}

/**
 * Creates a filter list off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterListOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterListOffOutlinedIcon(element, ...properties);
    return element;
}
