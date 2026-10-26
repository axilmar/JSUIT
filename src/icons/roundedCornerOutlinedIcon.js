import { initIcon } from "./icon.js";

//the url of the rounded corner outlined svg; resolved relative to this module
const URL_ROUNDEDCORNEROUTLINED = new URL('../../assets/icons/roundedCornerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rounded corner outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/roundedCornerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoundedCornerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROUNDEDCORNEROUTLINED }, ...properties);
}

/**
 * Creates a rounded corner outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roundedCornerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRoundedCornerOutlinedIcon(element, ...properties);
    return element;
}
