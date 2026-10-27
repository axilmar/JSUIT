import { initIcon } from "./icon.js";

//the url of the multiple stop outlined svg; resolved relative to this module
const URL_MULTIPLESTOPOUTLINED = new URL('../../assets/icons/multipleStopOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a multiple stop outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/multipleStopOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMultipleStopOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'multipleStopOutlinedIcon', url: URL_MULTIPLESTOPOUTLINED }, ...properties);
}

/**
 * Creates a multiple stop outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const multipleStopOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMultipleStopOutlinedIcon(element, ...properties);
    return element;
}
