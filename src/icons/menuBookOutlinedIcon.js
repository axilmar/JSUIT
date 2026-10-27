import { initIcon } from "./icon.js";

//the url of the menu book outlined svg; resolved relative to this module
const URL_MENUBOOKOUTLINED = new URL('../../assets/icons/menuBookOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a menu book outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/menuBookOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMenuBookOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'menuBookOutlinedIcon', url: URL_MENUBOOKOUTLINED }, ...properties);
}

/**
 * Creates a menu book outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const menuBookOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMenuBookOutlinedIcon(element, ...properties);
    return element;
}
