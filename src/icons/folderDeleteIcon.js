import { initIcon } from "./icon.js";

//the url of the folder delete svg; resolved relative to this module
const URL_FOLDERDELETE = new URL('../../assets/icons/folderDelete.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder delete icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderDelete.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderDeleteIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'folderDeleteIcon', url: URL_FOLDERDELETE }, ...properties);
}

/**
 * Creates a folder delete icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderDeleteIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderDeleteIcon(element, ...properties);
    return element;
}
