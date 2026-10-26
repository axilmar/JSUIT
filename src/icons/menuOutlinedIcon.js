import { initIcon } from "./icon.js";

//the url of the menu outlined svg; resolved relative to this module
const URL_MENUOUTLINED = new URL('../../assets/icons/menuOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a menu outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/menuOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMenuOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MENUOUTLINED }, ...properties);
}

/**
 * Creates a menu outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const menuOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMenuOutlinedIcon(element, ...properties);
    return element;
}
