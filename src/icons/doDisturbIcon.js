import { initIcon } from "./icon.js";

//the url of the do disturb svg; resolved relative to this module
const URL_DODISTURB = new URL('../../assets/icons/doDisturb.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do disturb icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doDisturb.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoDisturbIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DODISTURB }, ...properties);
}

/**
 * Creates a do disturb icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doDisturbIcon = (...properties) => {
    const element = document.createElement('div');
    initDoDisturbIcon(element, ...properties);
    return element;
}
