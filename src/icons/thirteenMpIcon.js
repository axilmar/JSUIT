import { initIcon } from "./icon.js";

//the url of the thirteen mp svg; resolved relative to this module
const URL_THIRTEENMP = new URL('../../assets/icons/thirteenMp.svg', import.meta.url).href;

/**
 * Initializes an icon element as a thirteen mp icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/thirteenMp.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThirteenMpIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THIRTEENMP }, ...properties);
}

/**
 * Creates a thirteen mp icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const thirteenMpIcon = (...properties) => {
    const element = document.createElement('div');
    initThirteenMpIcon(element, ...properties);
    return element;
}
