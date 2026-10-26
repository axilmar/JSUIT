import { initIcon } from "./icon.js";

//the url of the filter b and w svg; resolved relative to this module
const URL_FILTERBANDW = new URL('../../assets/icons/filterBAndW.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter b and w icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterBAndW.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterBAndWIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERBANDW }, ...properties);
}

/**
 * Creates a filter b and w icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterBAndWIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterBAndWIcon(element, ...properties);
    return element;
}
