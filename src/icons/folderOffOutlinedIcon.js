import { initIcon } from "./icon.js";

//the url of the folder off outlined svg; resolved relative to this module
const URL_FOLDEROFFOUTLINED = new URL('../../assets/icons/folderOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'folderOffOutlinedIcon', url: URL_FOLDEROFFOUTLINED }, ...properties);
}

/**
 * Creates a folder off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderOffOutlinedIcon(element, ...properties);
    return element;
}
