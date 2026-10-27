import { initIcon } from "./icon.js";

//the url of the folder delete outlined svg; resolved relative to this module
const URL_FOLDERDELETEOUTLINED = new URL('../../assets/icons/folderDeleteOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder delete outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderDeleteOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderDeleteOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'folderDeleteOutlinedIcon', url: URL_FOLDERDELETEOUTLINED }, ...properties);
}

/**
 * Creates a folder delete outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderDeleteOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderDeleteOutlinedIcon(element, ...properties);
    return element;
}
