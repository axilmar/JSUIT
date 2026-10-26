import { initIcon } from "./icon.js";

//the url of the filter drama outlined svg; resolved relative to this module
const URL_FILTERDRAMAOUTLINED = new URL('../../assets/icons/filterDramaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter drama outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterDramaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterDramaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FILTERDRAMAOUTLINED }, ...properties);
}

/**
 * Creates a filter drama outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterDramaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterDramaOutlinedIcon(element, ...properties);
    return element;
}
