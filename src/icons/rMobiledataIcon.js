import { initIcon } from "./icon.js";

//the url of the r mobiledata svg; resolved relative to this module
const URL_RMOBILEDATA = new URL('../../assets/icons/rMobiledata.svg', import.meta.url).href;

/**
 * Initializes an icon element as a r mobiledata icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rMobiledata.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRMobiledataIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_RMOBILEDATA }, ...properties);
}

/**
 * Creates a r mobiledata icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rMobiledataIcon = (...properties) => {
    const element = document.createElement('div');
    initRMobiledataIcon(element, ...properties);
    return element;
}
