import { initIcon } from "./icon.js";

//the url of the format textdirection r to l svg; resolved relative to this module
const URL_FORMATTEXTDIRECTIONRTOL = new URL('../../assets/icons/formatTextdirectionRToL.svg', import.meta.url).href;

/**
 * Initializes an icon element as a format textdirection r to l icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/formatTextdirectionRToL.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFormatTextdirectionRToLIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'formatTextdirectionRToLIcon', url: URL_FORMATTEXTDIRECTIONRTOL }, ...properties);
}

/**
 * Creates a format textdirection r to l icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const formatTextdirectionRToLIcon = (...properties) => {
    const element = document.createElement('div');
    initFormatTextdirectionRToLIcon(element, ...properties);
    return element;
}
