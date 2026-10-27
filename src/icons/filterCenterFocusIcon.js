import { initIcon } from "./icon.js";

//the url of the filter center focus svg; resolved relative to this module
const URL_FILTERCENTERFOCUS = new URL('../../assets/icons/filterCenterFocus.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter center focus icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterCenterFocus.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterCenterFocusIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filterCenterFocusIcon', url: URL_FILTERCENTERFOCUS }, ...properties);
}

/**
 * Creates a filter center focus icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterCenterFocusIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterCenterFocusIcon(element, ...properties);
    return element;
}
