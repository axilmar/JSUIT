import { initIcon } from "./icon.js";

//the url of the folder open svg; resolved relative to this module
const URL_FOLDEROPEN = new URL('../../assets/icons/folderOpen.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder open icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderOpen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderOpenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOLDEROPEN }, ...properties);
}

/**
 * Creates a folder open icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderOpenIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderOpenIcon(element, ...properties);
    return element;
}
