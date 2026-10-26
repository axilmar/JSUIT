import { initIcon } from "./icon.js";

//the url of the sd storage outlined svg; resolved relative to this module
const URL_SDSTORAGEOUTLINED = new URL('../../assets/icons/sdStorageOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a sd storage outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/sdStorageOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSdStorageOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SDSTORAGEOUTLINED }, ...properties);
}

/**
 * Creates a sd storage outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const sdStorageOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSdStorageOutlinedIcon(element, ...properties);
    return element;
}
