import { initIcon } from "./icon.js";

//the url of the edit off outlined svg; resolved relative to this module
const URL_EDITOFFOUTLINED = new URL('../../assets/icons/editOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an edit off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/editOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEditOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EDITOFFOUTLINED }, ...properties);
}

/**
 * Creates an edit off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const editOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEditOffOutlinedIcon(element, ...properties);
    return element;
}
