import { initIcon } from "./icon.js";

//the url of the format textdirection r to l outlined svg; resolved relative to this module
const URL_FORMATTEXTDIRECTIONRTOLOUTLINED = new URL('../../assets/icons/formatTextdirectionRToLOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format textdirection r to l outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatTextdirectionRToLOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatTextdirectionRToLOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FORMATTEXTDIRECTIONRTOLOUTLINED }, ...properties);
}

/**
 * Creates a format textdirection r to l outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatTextdirectionRToLOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatTextdirectionRToLOutlinedIcon(element, ...properties);
    return element;
}
