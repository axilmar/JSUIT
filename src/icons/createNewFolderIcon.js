import { initIcon } from "./icon.js";

//the url of the create new folder svg; resolved relative to this module
const URL_CREATENEWFOLDER = new URL('../../assets/icons/createNewFolder.svg', import.meta.url).href;

/**
 * Initializes an icon element as a create new folder icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/createNewFolder.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCreateNewFolderIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'createNewFolderIcon', url: URL_CREATENEWFOLDER }, ...properties);
}

/**
 * Creates a create new folder icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const createNewFolderIcon = (...properties) => {
    const element = document.createElement('div');
    initCreateNewFolderIcon(element, ...properties);
    return element;
}
