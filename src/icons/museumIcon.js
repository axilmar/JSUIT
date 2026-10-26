import { initIcon } from "./icon.js";

//the url of the museum svg; resolved relative to this module
const URL_MUSEUM = new URL('../../assets/icons/museum.svg', import.meta.url).href;

/**
 * Initializes an icon element as a museum icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/museum.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMuseumIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MUSEUM }, ...properties);
}

/**
 * Creates a museum icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const museumIcon = (...properties) => {
    const element = document.createElement('div');
    initMuseumIcon(element, ...properties);
    return element;
}
