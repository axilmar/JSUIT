import { initIcon } from "./icon.js";

//the url of the mobile off outlined svg; resolved relative to this module
const URL_MOBILEOFFOUTLINED = new URL('../../assets/icons/mobileOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mobile off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mobileOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMobileOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mobileOffOutlinedIcon', url: URL_MOBILEOFFOUTLINED }, ...properties);
}

/**
 * Creates a mobile off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mobileOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMobileOffOutlinedIcon(element, ...properties);
    return element;
}
