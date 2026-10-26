import { initIcon } from "./icon.js";

//the url of the reset tv svg; resolved relative to this module
const URL_RESETTV = new URL('../../assets/icons/resetTv.svg', import.meta.url).href;

/**
 * Initializes an icon element as a reset tv icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/resetTv.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initResetTvIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RESETTV }, ...properties);
}

/**
 * Creates a reset tv icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const resetTvIcon = (...properties) => {
    const element = document.createElement('div');
    initResetTvIcon(element, ...properties);
    return element;
}
