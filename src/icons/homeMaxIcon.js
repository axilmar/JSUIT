import { initIcon } from "./icon.js";

//the url of the home max svg; resolved relative to this module
const URL_HOMEMAX = new URL('../../assets/icons/homeMax.svg', import.meta.url).href;

/**
 * Initializes an icon element as a home max icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/homeMax.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHomeMaxIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'homeMaxIcon', url: URL_HOMEMAX }, ...properties);
}

/**
 * Creates a home max icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const homeMaxIcon = (...properties) => {
    const element = document.createElement('div');
    initHomeMaxIcon(element, ...properties);
    return element;
}
