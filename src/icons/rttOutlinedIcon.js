import { initIcon } from "./icon.js";

//the url of the rtt outlined svg; resolved relative to this module
const URL_RTTOUTLINED = new URL('../../assets/icons/rttOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rtt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rttOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRttOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RTTOUTLINED }, ...properties);
}

/**
 * Creates a rtt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rttOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRttOutlinedIcon(element, ...properties);
    return element;
}
