import { initIcon } from "./icon.js";

//the url of the verified outlined svg; resolved relative to this module
const URL_VERIFIEDOUTLINED = new URL('../../assets/icons/verifiedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a verified outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/verifiedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVerifiedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VERIFIEDOUTLINED }, ...properties);
}

/**
 * Creates a verified outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const verifiedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVerifiedOutlinedIcon(element, ...properties);
    return element;
}
