import { initIcon } from "./icon.js";

//the url of the auto awesome outlined svg; resolved relative to this module
const URL_AUTOAWESOMEOUTLINED = new URL('../../assets/icons/autoAwesomeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto awesome outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoAwesomeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoAwesomeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_AUTOAWESOMEOUTLINED }, ...properties);
}

/**
 * Creates an auto awesome outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoAwesomeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoAwesomeOutlinedIcon(element, ...properties);
    return element;
}
