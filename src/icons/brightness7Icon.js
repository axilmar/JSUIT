import { initIcon } from "./icon.js";

//the url of the brightness7 svg; resolved relative to this module
const URL_BRIGHTNESS7 = new URL('../../assets/icons/brightness7.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness7 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightness7.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightness7Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRIGHTNESS7 }, ...properties);
}

/**
 * Creates a brightness7 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightness7Icon = (...properties) => {
    const element = document.createElement('div');
    initBrightness7Icon(element, ...properties);
    return element;
}
