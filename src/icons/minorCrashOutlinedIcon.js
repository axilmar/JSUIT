import { initIcon } from "./icon.js";

//the url of the minor crash outlined svg; resolved relative to this module
const URL_MINORCRASHOUTLINED = new URL('../../assets/icons/minorCrashOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a minor crash outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/minorCrashOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMinorCrashOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MINORCRASHOUTLINED }, ...properties);
}

/**
 * Creates a minor crash outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const minorCrashOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMinorCrashOutlinedIcon(element, ...properties);
    return element;
}
