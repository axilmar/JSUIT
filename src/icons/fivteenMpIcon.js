import { initIcon } from "./icon.js";

//the url of the fivteen mp svg; resolved relative to this module
const URL_FIVTEENMP = new URL('../../assets/icons/fivteenMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fivteen mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fivteenMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFivteenMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FIVTEENMP }, ...properties);
}

/**
 * Creates a fivteen mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fivteenMpIcon = (...properties) => {
    const element = document.createElement('div');
    initFivteenMpIcon(element, ...properties);
    return element;
}
