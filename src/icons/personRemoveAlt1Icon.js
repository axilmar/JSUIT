import { initIcon } from "./icon.js";

//the url of the person remove alt1 svg; resolved relative to this module
const URL_PERSONREMOVEALT1 = new URL('../../assets/icons/personRemoveAlt1.svg', import.meta.url).href;

/**
 * Initializes an icon element as a person remove alt1 icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/personRemoveAlt1.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPersonRemoveAlt1Icon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PERSONREMOVEALT1 }, ...properties);
}

/**
 * Creates a person remove alt1 icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const personRemoveAlt1Icon = (...properties) => {
    const element = document.createElement('div');
    initPersonRemoveAlt1Icon(element, ...properties);
    return element;
}
