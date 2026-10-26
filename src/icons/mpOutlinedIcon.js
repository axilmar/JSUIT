import { initIcon } from "./icon.js";

//the url of the mp outlined svg; resolved relative to this module
const URL_MPOUTLINED = new URL('../../assets/icons/mpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MPOUTLINED }, ...properties);
}

/**
 * Creates a mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMpOutlinedIcon(element, ...properties);
    return element;
}
