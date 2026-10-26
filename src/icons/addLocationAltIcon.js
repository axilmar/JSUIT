import { initIcon } from "./icon.js";

//the url of the add location alt svg; resolved relative to this module
const URL_ADDLOCATIONALT = new URL('../../assets/icons/addLocationAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add location alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addLocationAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddLocationAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDLOCATIONALT }, ...properties);
}

/**
 * Creates an add location alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addLocationAltIcon = (...properties) => {
    const element = document.createElement('div');
    initAddLocationAltIcon(element, ...properties);
    return element;
}
