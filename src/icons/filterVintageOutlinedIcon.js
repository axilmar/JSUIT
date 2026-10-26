import { initIcon } from "./icon.js";

//the url of the filter vintage outlined svg; resolved relative to this module
const URL_FILTERVINTAGEOUTLINED = new URL('../../assets/icons/filterVintageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter vintage outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterVintageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterVintageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERVINTAGEOUTLINED }, ...properties);
}

/**
 * Creates a filter vintage outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterVintageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterVintageOutlinedIcon(element, ...properties);
    return element;
}
