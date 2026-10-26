import { initIcon } from "./icon.js";

//the url of the fifteen mp svg; resolved relative to this module
const URL_FIFTEENMP = new URL('../../assets/icons/fifteenMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fifteen mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fifteenMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFifteenMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIFTEENMP }, ...properties);
}

/**
 * Creates a fifteen mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fifteenMpIcon = (...properties) => {
    const element = document.createElement('div');
    initFifteenMpIcon(element, ...properties);
    return element;
}
