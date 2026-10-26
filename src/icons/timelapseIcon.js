import { initIcon } from "./icon.js";

//the url of the timelapse svg; resolved relative to this module
const URL_TIMELAPSE = new URL('../../assets/icons/timelapse.svg', import.meta.url).href;

/**
 * Initializes an icon element as a timelapse icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/timelapse.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTimelapseIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TIMELAPSE }, ...properties);
}

/**
 * Creates a timelapse icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const timelapseIcon = (...properties) => {
    const element = document.createElement('div');
    initTimelapseIcon(element, ...properties);
    return element;
}
