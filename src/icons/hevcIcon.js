import { initIcon } from "./icon.js";

//the url of the hevc svg; resolved relative to this module
const URL_HEVC = new URL('../../assets/icons/hevc.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hevc icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hevc.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHevcIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hevcIcon', url: URL_HEVC }, ...properties);
}

/**
 * Creates a hevc icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hevcIcon = (...properties) => {
    const element = document.createElement('div');
    initHevcIcon(element, ...properties);
    return element;
}
