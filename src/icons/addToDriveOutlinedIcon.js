import { initIcon } from "./icon.js";

//the url of the add to drive outlined svg; resolved relative to this module
const URL_ADDTODRIVEOUTLINED = new URL('../../assets/icons/addToDriveOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add to drive outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addToDriveOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddToDriveOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addToDriveOutlinedIcon', url: URL_ADDTODRIVEOUTLINED }, ...properties);
}

/**
 * Creates an add to drive outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addToDriveOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddToDriveOutlinedIcon(element, ...properties);
    return element;
}
