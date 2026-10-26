import { initIcon } from "./icon.js";

//the url of the filter center focus outlined svg; resolved relative to this module
const URL_FILTERCENTERFOCUSOUTLINED = new URL('../../assets/icons/filterCenterFocusOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter center focus outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterCenterFocusOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterCenterFocusOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERCENTERFOCUSOUTLINED }, ...properties);
}

/**
 * Creates a filter center focus outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterCenterFocusOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterCenterFocusOutlinedIcon(element, ...properties);
    return element;
}
