import { initIcon } from "./icon.js";

//the url of the key off outlined svg; resolved relative to this module
const URL_KEYOFFOUTLINED = new URL('../../assets/icons/keyOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a key off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/keyOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initKeyOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_KEYOFFOUTLINED }, ...properties);
}

/**
 * Creates a key off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const keyOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initKeyOffOutlinedIcon(element, ...properties);
    return element;
}
