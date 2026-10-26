import { initIcon } from "./icon.js";

//the url of the g mobiledata svg; resolved relative to this module
const URL_GMOBILEDATA = new URL('../../assets/icons/gMobiledata.svg', import.meta.url).href;

/**
 * Initializes an icon element as a g mobiledata icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gMobiledata.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGMobiledataIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_GMOBILEDATA }, ...properties);
}

/**
 * Creates a g mobiledata icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gMobiledataIcon = (...properties) => {
    const element = document.createElement('div');
    initGMobiledataIcon(element, ...properties);
    return element;
}
