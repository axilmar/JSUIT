import { initIcon } from "./icon.js";

//the url of the folder zip svg; resolved relative to this module
const URL_FOLDERZIP = new URL('../../assets/icons/folderZip.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder zip icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderZip.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderZipIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOLDERZIP }, ...properties);
}

/**
 * Creates a folder zip icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderZipIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderZipIcon(element, ...properties);
    return element;
}
