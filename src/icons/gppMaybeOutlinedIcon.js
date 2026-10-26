import { initIcon } from "./icon.js";

//the url of the gpp maybe outlined svg; resolved relative to this module
const URL_GPPMAYBEOUTLINED = new URL('../../assets/icons/gppMaybeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a gpp maybe outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gppMaybeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGppMaybeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GPPMAYBEOUTLINED }, ...properties);
}

/**
 * Creates a gpp maybe outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gppMaybeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGppMaybeOutlinedIcon(element, ...properties);
    return element;
}
