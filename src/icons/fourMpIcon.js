import { initIcon } from "./icon.js";

//the url of the four mp svg; resolved relative to this module
const URL_FOURMP = new URL('../../assets/icons/fourMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a four mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fourMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFourMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOURMP }, ...properties);
}

/**
 * Creates a four mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fourMpIcon = (...properties) => {
    const element = document.createElement('div');
    initFourMpIcon(element, ...properties);
    return element;
}
