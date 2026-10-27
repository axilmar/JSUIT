import { initIcon } from "./icon.js";

//the url of the edit location svg; resolved relative to this module
const URL_EDITLOCATION = new URL('../../assets/icons/editLocation.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit location icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editLocation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditLocationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'editLocationIcon', url: URL_EDITLOCATION }, ...properties);
}

/**
 * Creates an edit location icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editLocationIcon = (...properties) => {
    const element = document.createElement('div');
    initEditLocationIcon(element, ...properties);
    return element;
}
