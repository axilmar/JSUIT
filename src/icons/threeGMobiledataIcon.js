import { initIcon } from "./icon.js";

//the url of the three g mobiledata svg; resolved relative to this module
const URL_THREEGMOBILEDATA = new URL('../../assets/icons/threeGMobiledata.svg', import.meta.url).href;

/**
 * Initializes an icon element as a three g mobiledata icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/threeGMobiledata.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initThreeGMobiledataIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_THREEGMOBILEDATA }, ...properties);
}

/**
 * Creates a three g mobiledata icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const threeGMobiledataIcon = (...properties) => {
    const element = document.createElement('div');
    initThreeGMobiledataIcon(element, ...properties);
    return element;
}
