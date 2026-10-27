import { initIcon } from "./icon.js";

//the url of the logo dev outlined svg; resolved relative to this module
const URL_LOGODEVOUTLINED = new URL('../../assets/icons/logoDevOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a logo dev outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/logoDevOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLogoDevOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'logoDevOutlinedIcon', url: URL_LOGODEVOUTLINED }, ...properties);
}

/**
 * Creates a logo dev outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const logoDevOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLogoDevOutlinedIcon(element, ...properties);
    return element;
}
