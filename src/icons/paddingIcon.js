import { initIcon } from "./icon.js";

//the url of the padding svg; resolved relative to this module
const URL_PADDING = new URL('../../assets/icons/padding.svg', import.meta.url).href;

/**
 * Initializes an icon element as a padding icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/padding.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPaddingIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PADDING }, ...properties);
}

/**
 * Creates a padding icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const paddingIcon = (...properties) => {
    const element = document.createElement('div');
    initPaddingIcon(element, ...properties);
    return element;
}
