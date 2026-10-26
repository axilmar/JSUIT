import { initIcon } from "./icon.js";

//the url of the menu open outlined svg; resolved relative to this module
const URL_MENUOPENOUTLINED = new URL('../../assets/icons/menuOpenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a menu open outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/menuOpenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMenuOpenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MENUOPENOUTLINED }, ...properties);
}

/**
 * Creates a menu open outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const menuOpenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMenuOpenOutlinedIcon(element, ...properties);
    return element;
}
