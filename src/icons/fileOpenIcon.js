import { initIcon } from "./icon.js";

//the url of the file open svg; resolved relative to this module
const URL_FILEOPEN = new URL('../../assets/icons/fileOpen.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file open icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fileOpen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileOpenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fileOpenIcon', url: URL_FILEOPEN }, ...properties);
}

/**
 * Creates a file open icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileOpenIcon = (...properties) => {
    const element = document.createElement('div');
    initFileOpenIcon(element, ...properties);
    return element;
}
