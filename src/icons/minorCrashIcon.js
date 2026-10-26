import { initIcon } from "./icon.js";

//the url of the minor crash svg; resolved relative to this module
const URL_MINORCRASH = new URL('../../assets/icons/minorCrash.svg', import.meta.url).href;

/**
 * Initializes an icon element as a minor crash icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/minorCrash.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMinorCrashIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MINORCRASH }, ...properties);
}

/**
 * Creates a minor crash icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const minorCrashIcon = (...properties) => {
    const element = document.createElement('div');
    initMinorCrashIcon(element, ...properties);
    return element;
}
