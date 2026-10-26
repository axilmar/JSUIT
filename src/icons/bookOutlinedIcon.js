import { initIcon } from "./icon.js";

//the url of the book outlined svg; resolved relative to this module
const URL_BOOKOUTLINED = new URL('../../assets/icons/bookOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a book outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bookOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBookOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BOOKOUTLINED }, ...properties);
}

/**
 * Creates a book outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bookOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBookOutlinedIcon(element, ...properties);
    return element;
}
