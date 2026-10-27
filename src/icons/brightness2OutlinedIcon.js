import { initIcon } from "./icon.js";

//the url of the brightness2 outlined svg; resolved relative to this module
const URL_BRIGHTNESS2OUTLINED = new URL('../../assets/icons/brightness2Outlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness2 outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightness2Outlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightness2OutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'brightness2OutlinedIcon', url: URL_BRIGHTNESS2OUTLINED }, ...properties);
}

/**
 * Creates a brightness2 outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightness2OutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBrightness2OutlinedIcon(element, ...properties);
    return element;
}
