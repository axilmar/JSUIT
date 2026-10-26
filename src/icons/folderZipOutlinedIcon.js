import { initIcon } from "./icon.js";

//the url of the folder zip outlined svg; resolved relative to this module
const URL_FOLDERZIPOUTLINED = new URL('../../assets/icons/folderZipOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder zip outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderZipOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderZipOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOLDERZIPOUTLINED }, ...properties);
}

/**
 * Creates a folder zip outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderZipOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderZipOutlinedIcon(element, ...properties);
    return element;
}
