import { initIcon } from "./icon.js";

//the url of the logo dev svg; resolved relative to this module
const URL_LOGODEV = new URL('../../assets/icons/logoDev.svg', import.meta.url).href;

/**
 * Initializes an icon element as a logo dev icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/logoDev.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLogoDevIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'logoDevIcon', url: URL_LOGODEV }, ...properties);
}

/**
 * Creates a logo dev icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const logoDevIcon = (...properties) => {
    const element = document.createElement('div');
    initLogoDevIcon(element, ...properties);
    return element;
}
