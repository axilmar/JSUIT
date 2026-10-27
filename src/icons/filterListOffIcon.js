import { initIcon } from "./icon.js";

//the url of the filter list off svg; resolved relative to this module
const URL_FILTERLISTOFF = new URL('../../assets/icons/filterListOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter list off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterListOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterListOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filterListOffIcon', url: URL_FILTERLISTOFF }, ...properties);
}

/**
 * Creates a filter list off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterListOffIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterListOffIcon(element, ...properties);
    return element;
}
