import { initIcon } from "./icon.js";

//the url of the add to drive svg; resolved relative to this module
const URL_ADDTODRIVE = new URL('../../assets/icons/addToDrive.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add to drive icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addToDrive.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddToDriveIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDTODRIVE }, ...properties);
}

/**
 * Creates an add to drive icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addToDriveIcon = (...properties) => {
    const element = document.createElement('div');
    initAddToDriveIcon(element, ...properties);
    return element;
}
