import { initIcon } from "./icon.js";

//the url of the do disturb on svg; resolved relative to this module
const URL_DODISTURBON = new URL('../../assets/icons/doDisturbOn.svg', import.meta.url).href;

/**
 * Initializes an icon element as a do disturb on icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/doDisturbOn.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDoDisturbOnIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DODISTURBON }, ...properties);
}

/**
 * Creates a do disturb on icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const doDisturbOnIcon = (...properties) => {
    const element = document.createElement('div');
    initDoDisturbOnIcon(element, ...properties);
    return element;
}
