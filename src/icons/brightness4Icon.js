import { initIcon } from "./icon.js";

//the url of the brightness4 svg; resolved relative to this module
const URL_BRIGHTNESS4 = new URL('../../assets/icons/brightness4.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness4 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightness4.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightness4Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRIGHTNESS4 }, ...properties);
}

/**
 * Creates a brightness4 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightness4Icon = (...properties) => {
    const element = document.createElement('div');
    initBrightness4Icon(element, ...properties);
    return element;
}
