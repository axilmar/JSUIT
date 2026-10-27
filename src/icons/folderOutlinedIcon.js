import { initIcon } from "./icon.js";

//the url of the folder outlined svg; resolved relative to this module
const URL_FOLDEROUTLINED = new URL('../../assets/icons/folderOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'folderOutlinedIcon', url: URL_FOLDEROUTLINED }, ...properties);
}

/**
 * Creates a folder outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderOutlinedIcon(element, ...properties);
    return element;
}
