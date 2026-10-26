import { initIcon } from "./icon.js";

//the url of the list outlined svg; resolved relative to this module
const URL_LISTOUTLINED = new URL('../../assets/icons/listOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a list outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/listOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initListOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LISTOUTLINED }, ...properties);
}

/**
 * Creates a list outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const listOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initListOutlinedIcon(element, ...properties);
    return element;
}
