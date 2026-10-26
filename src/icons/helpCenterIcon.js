import { initIcon } from "./icon.js";

//the url of the help center svg; resolved relative to this module
const URL_HELPCENTER = new URL('../../assets/icons/helpCenter.svg', import.meta.url).href;

/**
 * Initializes an icon element as a help center icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/helpCenter.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHelpCenterIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HELPCENTER }, ...properties);
}

/**
 * Creates a help center icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const helpCenterIcon = (...properties) => {
    const element = document.createElement('div');
    initHelpCenterIcon(element, ...properties);
    return element;
}
