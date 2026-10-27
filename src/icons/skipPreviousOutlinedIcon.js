import { initIcon } from "./icon.js";

//the url of the skip previous outlined svg; resolved relative to this module
const URL_SKIPPREVIOUSOUTLINED = new URL('../../assets/icons/skipPreviousOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a skip previous outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/skipPreviousOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSkipPreviousOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'skipPreviousOutlinedIcon', url: URL_SKIPPREVIOUSOUTLINED }, ...properties);
}

/**
 * Creates a skip previous outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const skipPreviousOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSkipPreviousOutlinedIcon(element, ...properties);
    return element;
}
