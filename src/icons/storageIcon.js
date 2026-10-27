import { initIcon } from "./icon.js";

//the url of the storage svg; resolved relative to this module
const URL_STORAGE = new URL('../../assets/icons/storage.svg', import.meta.url).href;

/**
 * Initializes an icon element as a storage icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/storage.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStorageIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'storageIcon', url: URL_STORAGE }, ...properties);
}

/**
 * Creates a storage icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const storageIcon = (...properties) => {
    const element = document.createElement('div');
    initStorageIcon(element, ...properties);
    return element;
}
