import { initIcon } from "./icon.js";

//the url of the folder svg; resolved relative to this module
const URL_FOLDER = new URL('../../assets/icons/folder.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folder.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'folderIcon', url: URL_FOLDER }, ...properties);
}

/**
 * Creates a folder icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderIcon(element, ...properties);
    return element;
}
