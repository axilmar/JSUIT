import { initIcon } from "./icon.js";

//the url of the border color svg; resolved relative to this module
const URL_BORDERCOLOR = new URL('../../assets/icons/borderColor.svg', import.meta.url).href;

/**
 * Initializes an icon element as a border color icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/borderColor.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBorderColorIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BORDERCOLOR }, ...properties);
}

/**
 * Creates a border color icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const borderColorIcon = (...properties) => {
    const element = document.createElement('div');
    initBorderColorIcon(element, ...properties);
    return element;
}
