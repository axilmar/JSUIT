import { initIcon } from "./icon.js";

//the url of the navigate next outlined svg; resolved relative to this module
const URL_NAVIGATENEXTOUTLINED = new URL('../../assets/icons/navigateNextOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a navigate next outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/navigateNextOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNavigateNextOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NAVIGATENEXTOUTLINED }, ...properties);
}

/**
 * Creates a navigate next outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const navigateNextOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNavigateNextOutlinedIcon(element, ...properties);
    return element;
}
