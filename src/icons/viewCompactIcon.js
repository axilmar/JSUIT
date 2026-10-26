import { initIcon } from "./icon.js";

//the url of the view compact svg; resolved relative to this module
const URL_VIEWCOMPACT = new URL('../../assets/icons/viewCompact.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view compact icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewCompact.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewCompactIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWCOMPACT }, ...properties);
}

/**
 * Creates a view compact icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewCompactIcon = (...properties) => {
    const element = document.createElement('div');
    initViewCompactIcon(element, ...properties);
    return element;
}
