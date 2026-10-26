import { initIcon } from "./icon.js";

//the url of the menu book svg; resolved relative to this module
const URL_MENUBOOK = new URL('../../assets/icons/menuBook.svg', import.meta.url).href;

/**
 * Initializes an icon element as a menu book icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/menuBook.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMenuBookIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MENUBOOK }, ...properties);
}

/**
 * Creates a menu book icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const menuBookIcon = (...properties) => {
    const element = document.createElement('div');
    initMenuBookIcon(element, ...properties);
    return element;
}
