import { initIcon } from "./icon.js";

//the url of the filter hdr outlined svg; resolved relative to this module
const URL_FILTERHDROUTLINED = new URL('../../assets/icons/filterHdrOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter hdr outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterHdrOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterHdrOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERHDROUTLINED }, ...properties);
}

/**
 * Creates a filter hdr outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterHdrOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterHdrOutlinedIcon(element, ...properties);
    return element;
}
