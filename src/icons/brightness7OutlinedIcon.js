import { initIcon } from "./icon.js";

//the url of the brightness7 outlined svg; resolved relative to this module
const URL_BRIGHTNESS7OUTLINED = new URL('../../assets/icons/brightness7Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness7 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightness7Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightness7OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'brightness7OutlinedIcon', url: URL_BRIGHTNESS7OUTLINED }, ...properties);
}

/**
 * Creates a brightness7 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightness7OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrightness7OutlinedIcon(element, ...properties);
    return element;
}
