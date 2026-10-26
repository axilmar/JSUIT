import { initIcon } from "./icon.js";

//the url of the border horizontal svg; resolved relative to this module
const URL_BORDERHORIZONTAL = new URL('../../assets/icons/borderHorizontal.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border horizontal icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderHorizontal.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderHorizontalIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BORDERHORIZONTAL }, ...properties);
}

/**
 * Creates a border horizontal icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderHorizontalIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderHorizontalIcon(element, ...properties);
    return element;
}
