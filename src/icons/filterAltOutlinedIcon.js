import { initIcon } from "./icon.js";

//the url of the filter alt outlined svg; resolved relative to this module
const URL_FILTERALTOUTLINED = new URL('../../assets/icons/filterAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filterAltOutlinedIcon', url: URL_FILTERALTOUTLINED }, ...properties);
}

/**
 * Creates a filter alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterAltOutlinedIcon(element, ...properties);
    return element;
}
