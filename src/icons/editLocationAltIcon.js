import { initIcon } from "./icon.js";

//the url of the edit location alt svg; resolved relative to this module
const URL_EDITLOCATIONALT = new URL('../../assets/icons/editLocationAlt.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit location alt icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editLocationAlt.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditLocationAltIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDITLOCATIONALT }, ...properties);
}

/**
 * Creates an edit location alt icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editLocationAltIcon = (...properties) => {
    const element = document.createElement('div');
    initEditLocationAltIcon(element, ...properties);
    return element;
}
