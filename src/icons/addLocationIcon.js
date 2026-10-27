import { initIcon } from "./icon.js";

//the url of the add location svg; resolved relative to this module
const URL_ADDLOCATION = new URL('../../assets/icons/addLocation.svg', import.meta.url).href;

/**
 * Initializes an icon element as an add location icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addLocation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddLocationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'addLocationIcon', url: URL_ADDLOCATION }, ...properties);
}

/**
 * Creates an add location icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addLocationIcon = (...properties) => {
    const element = document.createElement('div');
    initAddLocationIcon(element, ...properties);
    return element;
}
