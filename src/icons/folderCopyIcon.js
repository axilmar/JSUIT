import { initIcon } from "./icon.js";

//the url of the folder copy svg; resolved relative to this module
const URL_FOLDERCOPY = new URL('../../assets/icons/folderCopy.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder copy icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderCopy.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderCopyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'folderCopyIcon', url: URL_FOLDERCOPY }, ...properties);
}

/**
 * Creates a folder copy icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderCopyIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderCopyIcon(element, ...properties);
    return element;
}
