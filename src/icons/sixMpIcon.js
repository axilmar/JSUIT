import { initIcon } from "./icon.js";

//the url of the six mp svg; resolved relative to this module
const URL_SIXMP = new URL('../../assets/icons/sixMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a six mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sixMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSixMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIXMP }, ...properties);
}

/**
 * Creates a six mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sixMpIcon = (...properties) => {
    const element = document.createElement('div');
    initSixMpIcon(element, ...properties);
    return element;
}
