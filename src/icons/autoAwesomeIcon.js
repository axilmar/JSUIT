import { initIcon } from "./icon.js";

//the url of the auto awesome svg; resolved relative to this module
const URL_AUTOAWESOME = new URL('../../assets/icons/autoAwesome.svg', import.meta.url).href;

/**
 * Initializes an icon element as an auto awesome icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/autoAwesome.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAutoAwesomeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'autoAwesomeIcon', url: URL_AUTOAWESOME }, ...properties);
}

/**
 * Creates an auto awesome icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const autoAwesomeIcon = (...properties) => {
    const element = document.createElement('div');
    initAutoAwesomeIcon(element, ...properties);
    return element;
}
