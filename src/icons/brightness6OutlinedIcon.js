import { initIcon } from "./icon.js";

//the url of the brightness6 outlined svg; resolved relative to this module
const URL_BRIGHTNESS6OUTLINED = new URL('../../assets/icons/brightness6Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness6 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightness6Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightness6OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRIGHTNESS6OUTLINED }, ...properties);
}

/**
 * Creates a brightness6 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightness6OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrightness6OutlinedIcon(element, ...properties);
    return element;
}
