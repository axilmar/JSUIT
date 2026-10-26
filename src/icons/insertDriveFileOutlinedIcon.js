import { initIcon } from "./icon.js";

//the url of the insert drive file outlined svg; resolved relative to this module
const URL_INSERTDRIVEFILEOUTLINED = new URL('../../assets/icons/insertDriveFileOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an insert drive file outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/insertDriveFileOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initInsertDriveFileOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_INSERTDRIVEFILEOUTLINED }, ...properties);
}

/**
 * Creates an insert drive file outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const insertDriveFileOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initInsertDriveFileOutlinedIcon(element, ...properties);
    return element;
}
