import { initIcon } from "./icon.js";

//the url of the list svg; resolved relative to this module
const URL_LIST = new URL('../../assets/icons/list.svg', import.meta.url).href;

/**
 * Initializes an icon element as a list icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/list.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initListIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LIST }, ...properties);
}

/**
 * Creates a list icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const listIcon = (...properties) => {
    const element = document.createElement('div');
    initListIcon(element, ...properties);
    return element;
}
