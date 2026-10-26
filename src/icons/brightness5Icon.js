import { initIcon } from "./icon.js";

//the url of the brightness5 svg; resolved relative to this module
const URL_BRIGHTNESS5 = new URL('../../assets/icons/brightness5.svg', import.meta.url).href;

/**
 * Initializes an icon element as a brightness5 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/brightness5.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBrightness5Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BRIGHTNESS5 }, ...properties);
}

/**
 * Creates a brightness5 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const brightness5Icon = (...properties) => {
    const element = document.createElement('div');
    initBrightness5Icon(element, ...properties);
    return element;
}
