import { initIcon } from "./icon.js";

//the url of the file copy svg; resolved relative to this module
const URL_FILECOPY = new URL('../../assets/icons/fileCopy.svg', import.meta.url).href;

/**
 * Initializes an icon element as a file copy icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fileCopy.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFileCopyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fileCopyIcon', url: URL_FILECOPY }, ...properties);
}

/**
 * Creates a file copy icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fileCopyIcon = (...properties) => {
    const element = document.createElement('div');
    initFileCopyIcon(element, ...properties);
    return element;
}
