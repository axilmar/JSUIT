import { initIcon } from "./icon.js";

//the url of the seven mp svg; resolved relative to this module
const URL_SEVENMP = new URL('../../assets/icons/sevenMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a seven mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sevenMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSevenMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SEVENMP }, ...properties);
}

/**
 * Creates a seven mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sevenMpIcon = (...properties) => {
    const element = document.createElement('div');
    initSevenMpIcon(element, ...properties);
    return element;
}
