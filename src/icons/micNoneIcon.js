import { initIcon } from "./icon.js";

//the url of the mic none svg; resolved relative to this module
const URL_MICNONE = new URL('../../assets/icons/micNone.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mic none icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/micNone.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMicNoneIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MICNONE }, ...properties);
}

/**
 * Creates a mic none icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const micNoneIcon = (...properties) => {
    const element = document.createElement('div');
    initMicNoneIcon(element, ...properties);
    return element;
}
