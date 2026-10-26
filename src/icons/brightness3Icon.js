import { initIcon } from "./icon.js";

//the url of the brightness3 svg; resolved relative to this module
const URL_BRIGHTNESS3 = new URL('../../assets/icons/brightness3.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness3 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightness3.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightness3Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRIGHTNESS3 }, ...properties);
}

/**
 * Creates a brightness3 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightness3Icon = (...properties) => {
    const element = document.createElement('div');
    initBrightness3Icon(element, ...properties);
    return element;
}
