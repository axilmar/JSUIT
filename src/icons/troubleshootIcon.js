import { initIcon } from "./icon.js";

//the url of the troubleshoot svg; resolved relative to this module
const URL_TROUBLESHOOT = new URL('../../assets/icons/troubleshoot.svg', import.meta.url).href;

/**
 * Initializes an icon element as a troubleshoot icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/troubleshoot.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTroubleshootIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TROUBLESHOOT }, ...properties);
}

/**
 * Creates a troubleshoot icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const troubleshootIcon = (...properties) => {
    const element = document.createElement('div');
    initTroubleshootIcon(element, ...properties);
    return element;
}
