import { initIcon } from "./icon.js";

//the url of the sd storage svg; resolved relative to this module
const URL_SDSTORAGE = new URL('../../assets/icons/sdStorage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sd storage icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sdStorage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSdStorageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SDSTORAGE }, ...properties);
}

/**
 * Creates a sd storage icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sdStorageIcon = (...properties) => {
    const element = document.createElement('div');
    initSdStorageIcon(element, ...properties);
    return element;
}
