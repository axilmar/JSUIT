import { initIcon } from "./icon.js";

//the url of the create new folder outlined svg; resolved relative to this module
const URL_CREATENEWFOLDEROUTLINED = new URL('../../assets/icons/createNewFolderOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a create new folder outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/createNewFolderOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCreateNewFolderOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'createNewFolderOutlinedIcon', url: URL_CREATENEWFOLDEROUTLINED }, ...properties);
}

/**
 * Creates a create new folder outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const createNewFolderOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCreateNewFolderOutlinedIcon(element, ...properties);
    return element;
}
