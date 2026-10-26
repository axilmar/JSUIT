import { initIcon } from "./icon.js";

//the url of the folder off svg; resolved relative to this module
const URL_FOLDEROFF = new URL('../../assets/icons/folderOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FOLDEROFF }, ...properties);
}

/**
 * Creates a folder off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderOffIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderOffIcon(element, ...properties);
    return element;
}
