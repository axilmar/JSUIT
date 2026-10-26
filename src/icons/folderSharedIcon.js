import { initIcon } from "./icon.js";

//the url of the folder shared svg; resolved relative to this module
const URL_FOLDERSHARED = new URL('../../assets/icons/folderShared.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder shared icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderShared.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderSharedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOLDERSHARED }, ...properties);
}

/**
 * Creates a folder shared icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderSharedIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderSharedIcon(element, ...properties);
    return element;
}
