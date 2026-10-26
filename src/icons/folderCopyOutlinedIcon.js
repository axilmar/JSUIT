import { initIcon } from "./icon.js";

//the url of the folder copy outlined svg; resolved relative to this module
const URL_FOLDERCOPYOUTLINED = new URL('../../assets/icons/folderCopyOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder copy outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderCopyOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderCopyOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOLDERCOPYOUTLINED }, ...properties);
}

/**
 * Creates a folder copy outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderCopyOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderCopyOutlinedIcon(element, ...properties);
    return element;
}
