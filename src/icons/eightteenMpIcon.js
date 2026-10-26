import { initIcon } from "./icon.js";

//the url of the eightteen mp svg; resolved relative to this module
const URL_EIGHTTEENMP = new URL('../../assets/icons/eightteenMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eightteen mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eightteenMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEightteenMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EIGHTTEENMP }, ...properties);
}

/**
 * Creates an eightteen mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eightteenMpIcon = (...properties) => {
    const element = document.createElement('div');
    initEightteenMpIcon(element, ...properties);
    return element;
}
