import { initIcon } from "./icon.js";

//the url of the filter alt off outlined svg; resolved relative to this module
const URL_FILTERALTOFFOUTLINED = new URL('../../assets/icons/filterAltOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a filter alt off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/filterAltOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFilterAltOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'filterAltOffOutlinedIcon', url: URL_FILTERALTOFFOUTLINED }, ...properties);
}

/**
 * Creates a filter alt off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const filterAltOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFilterAltOffOutlinedIcon(element, ...properties);
    return element;
}
