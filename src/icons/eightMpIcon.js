import { initIcon } from "./icon.js";

//the url of the eight mp svg; resolved relative to this module
const URL_EIGHTMP = new URL('../../assets/icons/eightMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eight mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eightMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEightMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eightMpIcon', url: URL_EIGHTMP }, ...properties);
}

/**
 * Creates an eight mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eightMpIcon = (...properties) => {
    const element = document.createElement('div');
    initEightMpIcon(element, ...properties);
    return element;
}
