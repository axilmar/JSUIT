import { initIcon } from "./icon.js";

//the url of the menu open svg; resolved relative to this module
const URL_MENUOPEN = new URL('../../assets/icons/menuOpen.svg', import.meta.url).href;

/**
 * Initializes an icon element as a menu open icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/menuOpen.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMenuOpenIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'menuOpenIcon', url: URL_MENUOPEN }, ...properties);
}

/**
 * Creates a menu open icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const menuOpenIcon = (...properties) => {
    const element = document.createElement('div');
    initMenuOpenIcon(element, ...properties);
    return element;
}
