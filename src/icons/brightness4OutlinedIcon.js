import { initIcon } from "./icon.js";

//the url of the brightness4 outlined svg; resolved relative to this module
const URL_BRIGHTNESS4OUTLINED = new URL('../../assets/icons/brightness4Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness4 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightness4Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightness4OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'brightness4OutlinedIcon', url: URL_BRIGHTNESS4OUTLINED }, ...properties);
}

/**
 * Creates a brightness4 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightness4OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrightness4OutlinedIcon(element, ...properties);
    return element;
}
