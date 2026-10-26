import { initIcon } from "./icon.js";

//the url of the archive svg; resolved relative to this module
const URL_ARCHIVE = new URL('../../assets/icons/archive.svg', import.meta.url).href;

/**
 * Initializes an icon element as an archive icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/archive.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initArchiveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ARCHIVE }, ...properties);
}

/**
 * Creates an archive icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const archiveIcon = (...properties) => {
    const element = document.createElement('div');
    initArchiveIcon(element, ...properties);
    return element;
}
