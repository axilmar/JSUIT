import { initIcon } from "./icon.js";

//the url of the storage outlined svg; resolved relative to this module
const URL_STORAGEOUTLINED = new URL('../../assets/icons/storageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a storage outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/storageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStorageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_STORAGEOUTLINED }, ...properties);
}

/**
 * Creates a storage outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const storageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStorageOutlinedIcon(element, ...properties);
    return element;
}
