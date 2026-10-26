import { initIcon } from "./icon.js";

//the url of the stop outlined svg; resolved relative to this module
const URL_STOPOUTLINED = new URL('../../assets/icons/stopOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a stop outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/stopOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStopOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STOPOUTLINED }, ...properties);
}

/**
 * Creates a stop outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const stopOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStopOutlinedIcon(element, ...properties);
    return element;
}
