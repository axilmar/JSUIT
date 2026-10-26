import { initIcon } from "./icon.js";

//the url of the brightness2 svg; resolved relative to this module
const URL_BRIGHTNESS2 = new URL('../../assets/icons/brightness2.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness2 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightness2.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightness2Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRIGHTNESS2 }, ...properties);
}

/**
 * Creates a brightness2 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightness2Icon = (...properties) => {
    const element = document.createElement('div');
    initBrightness2Icon(element, ...properties);
    return element;
}
