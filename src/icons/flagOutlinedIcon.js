import { initIcon } from "./icon.js";

//the url of the flag outlined svg; resolved relative to this module
const URL_FLAGOUTLINED = new URL('../../assets/icons/flagOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flag outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flagOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlagOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLAGOUTLINED }, ...properties);
}

/**
 * Creates a flag outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flagOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlagOutlinedIcon(element, ...properties);
    return element;
}
