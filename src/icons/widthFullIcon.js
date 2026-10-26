import { initIcon } from "./icon.js";

//the url of the width full svg; resolved relative to this module
const URL_WIDTHFULL = new URL('../../assets/icons/widthFull.svg', import.meta.url).href;

/**
 * Initializes an icon element as a width full icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/widthFull.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWidthFullIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_WIDTHFULL }, ...properties);
}

/**
 * Creates a width full icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const widthFullIcon = (...properties) => {
    const element = document.createElement('div');
    initWidthFullIcon(element, ...properties);
    return element;
}
