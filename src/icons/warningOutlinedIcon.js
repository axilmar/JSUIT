import { initIcon } from "./icon.js";

//the url of the warning outlined svg; resolved relative to this module
const URL_WARNINGOUTLINED = new URL('../../assets/icons/warningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a warning outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/warningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWarningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WARNINGOUTLINED }, ...properties);
}

/**
 * Creates a warning outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const warningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWarningOutlinedIcon(element, ...properties);
    return element;
}
