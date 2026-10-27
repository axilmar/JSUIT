import { initIcon } from "./icon.js";

//the url of the copy all svg; resolved relative to this module
const URL_COPYALL = new URL('../../assets/icons/copyAll.svg', import.meta.url).href;

/**
 * Initializes an icon element as a copy all icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/copyAll.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCopyAllIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'copyAllIcon', url: URL_COPYALL }, ...properties);
}

/**
 * Creates a copy all icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const copyAllIcon = (...properties) => {
    const element = document.createElement('div');
    initCopyAllIcon(element, ...properties);
    return element;
}
