import { initIcon } from "./icon.js";

//the url of the miscellaneous services svg; resolved relative to this module
const URL_MISCELLANEOUSSERVICES = new URL('../../assets/icons/miscellaneousServices.svg', import.meta.url).href;

/**
 * Initializes an icon element as a miscellaneous services icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/miscellaneousServices.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMiscellaneousServicesIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MISCELLANEOUSSERVICES }, ...properties);
}

/**
 * Creates a miscellaneous services icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const miscellaneousServicesIcon = (...properties) => {
    const element = document.createElement('div');
    initMiscellaneousServicesIcon(element, ...properties);
    return element;
}
