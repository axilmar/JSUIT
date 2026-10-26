import { initIcon } from "./icon.js";

//the url of the menu svg; resolved relative to this module
const URL_MENU = new URL('../../assets/icons/menu.svg', import.meta.url).href;

/**
 * Initializes an icon element as a menu icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/menu.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMenuIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MENU }, ...properties);
}

/**
 * Creates a menu icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const menuIcon = (...properties) => {
    const element = document.createElement('div');
    initMenuIcon(element, ...properties);
    return element;
}
