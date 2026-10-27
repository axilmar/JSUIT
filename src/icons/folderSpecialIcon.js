import { initIcon } from "./icon.js";

//the url of the folder special svg; resolved relative to this module
const URL_FOLDERSPECIAL = new URL('../../assets/icons/folderSpecial.svg', import.meta.url).href;

/**
 * Initializes an icon element as a folder special icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/folderSpecial.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFolderSpecialIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'folderSpecialIcon', url: URL_FOLDERSPECIAL }, ...properties);
}

/**
 * Creates a folder special icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const folderSpecialIcon = (...properties) => {
    const element = document.createElement('div');
    initFolderSpecialIcon(element, ...properties);
    return element;
}
