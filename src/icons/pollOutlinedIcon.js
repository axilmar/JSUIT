import { initIcon } from "./icon.js";

//the url of the poll outlined svg; resolved relative to this module
const URL_POLLOUTLINED = new URL('../../assets/icons/pollOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a poll outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pollOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPollOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_POLLOUTLINED }, ...properties);
}

/**
 * Creates a poll outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pollOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPollOutlinedIcon(element, ...properties);
    return element;
}
