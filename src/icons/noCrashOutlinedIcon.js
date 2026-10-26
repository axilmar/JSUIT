import { initIcon } from "./icon.js";

//the url of the no crash outlined svg; resolved relative to this module
const URL_NOCRASHOUTLINED = new URL('../../assets/icons/noCrashOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no crash outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noCrashOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoCrashOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NOCRASHOUTLINED }, ...properties);
}

/**
 * Creates a no crash outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noCrashOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoCrashOutlinedIcon(element, ...properties);
    return element;
}
