import { initIcon } from "./icon.js";

//the url of the add location alt outlined svg; resolved relative to this module
const URL_ADDLOCATIONALTOUTLINED = new URL('../../assets/icons/addLocationAltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add location alt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addLocationAltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddLocationAltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDLOCATIONALTOUTLINED }, ...properties);
}

/**
 * Creates an add location alt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addLocationAltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddLocationAltOutlinedIcon(element, ...properties);
    return element;
}
