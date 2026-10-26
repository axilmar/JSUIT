import { initIcon } from "./icon.js";

//the url of the eleven mp svg; resolved relative to this module
const URL_ELEVENMP = new URL('../../assets/icons/elevenMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eleven mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/elevenMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElevenMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ELEVENMP }, ...properties);
}

/**
 * Creates an eleven mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const elevenMpIcon = (...properties) => {
    const element = document.createElement('div');
    initElevenMpIcon(element, ...properties);
    return element;
}
