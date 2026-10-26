import { initIcon } from "./icon.js";

//the url of the more time outlined svg; resolved relative to this module
const URL_MORETIMEOUTLINED = new URL('../../assets/icons/moreTimeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a more time outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/moreTimeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMoreTimeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MORETIMEOUTLINED }, ...properties);
}

/**
 * Creates a more time outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const moreTimeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMoreTimeOutlinedIcon(element, ...properties);
    return element;
}
