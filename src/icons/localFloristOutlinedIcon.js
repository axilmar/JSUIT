import { initIcon } from "./icon.js";

//the url of the local florist outlined svg; resolved relative to this module
const URL_LOCALFLORISTOUTLINED = new URL('../../assets/icons/localFloristOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local florist outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localFloristOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalFloristOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALFLORISTOUTLINED }, ...properties);
}

/**
 * Creates a local florist outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localFloristOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalFloristOutlinedIcon(element, ...properties);
    return element;
}
