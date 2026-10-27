import { initIcon } from "./icon.js";

//the url of the store mall directory svg; resolved relative to this module
const URL_STOREMALLDIRECTORY = new URL('../../assets/icons/storeMallDirectory.svg', import.meta.url).href;

/**
 * Initializes an icon element as a store mall directory icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/storeMallDirectory.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStoreMallDirectoryIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'storeMallDirectoryIcon', url: URL_STOREMALLDIRECTORY }, ...properties);
}

/**
 * Creates a store mall directory icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const storeMallDirectoryIcon = (...properties) => {
    const element = document.createElement('div');
    initStoreMallDirectoryIcon(element, ...properties);
    return element;
}
