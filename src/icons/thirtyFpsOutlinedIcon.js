import { initIcon } from "./icon.js";

//the url of the thirty fps outlined svg; resolved relative to this module
const URL_THIRTYFPSOUTLINED = new URL('../../assets/icons/thirtyFpsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thirty fps outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thirtyFpsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThirtyFpsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'thirtyFpsOutlinedIcon', url: URL_THIRTYFPSOUTLINED }, ...properties);
}

/**
 * Creates a thirty fps outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thirtyFpsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initThirtyFpsOutlinedIcon(element, ...properties);
    return element;
}
