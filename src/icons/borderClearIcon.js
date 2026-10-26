import { initIcon } from "./icon.js";

//the url of the border clear svg; resolved relative to this module
const URL_BORDERCLEAR = new URL('../../assets/icons/borderClear.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border clear icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderClear.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderClearIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BORDERCLEAR }, ...properties);
}

/**
 * Creates a border clear icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderClearIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderClearIcon(element, ...properties);
    return element;
}
