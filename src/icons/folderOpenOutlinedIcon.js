import { initIcon } from "./icon.js";

//the url of the folder open outlined svg; resolved relative to this module
const URL_FOLDEROPENOUTLINED = new URL('../../assets/icons/folderOpenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder open outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderOpenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderOpenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'folderOpenOutlinedIcon', url: URL_FOLDEROPENOUTLINED }, ...properties);
}

/**
 * Creates a folder open outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderOpenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderOpenOutlinedIcon(element, ...properties);
    return element;
}
