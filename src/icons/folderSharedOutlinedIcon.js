import { initIcon } from "./icon.js";

//the url of the folder shared outlined svg; resolved relative to this module
const URL_FOLDERSHAREDOUTLINED = new URL('../../assets/icons/folderSharedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder shared outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderSharedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderSharedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOLDERSHAREDOUTLINED }, ...properties);
}

/**
 * Creates a folder shared outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderSharedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderSharedOutlinedIcon(element, ...properties);
    return element;
}
