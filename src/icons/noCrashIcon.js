import { initIcon } from "./icon.js";

//the url of the no crash svg; resolved relative to this module
const URL_NOCRASH = new URL('../../assets/icons/noCrash.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no crash icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noCrash.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoCrashIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noCrashIcon', url: URL_NOCRASH }, ...properties);
}

/**
 * Creates a no crash icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noCrashIcon = (...properties) => {
    const element = document.createElement('div');
    initNoCrashIcon(element, ...properties);
    return element;
}
