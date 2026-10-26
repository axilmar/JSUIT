import { initIcon } from "./icon.js";

//the url of the tour outlined svg; resolved relative to this module
const URL_TOUROUTLINED = new URL('../../assets/icons/tourOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tour outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tourOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTourOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TOUROUTLINED }, ...properties);
}

/**
 * Creates a tour outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tourOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTourOutlinedIcon(element, ...properties);
    return element;
}
