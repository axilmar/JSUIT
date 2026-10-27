import { initIcon } from "./icon.js";

//the url of the navigate next svg; resolved relative to this module
const URL_NAVIGATENEXT = new URL('../../assets/icons/navigateNext.svg', import.meta.url).href;

/**
 * Initializes an icon element as a navigate next icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/navigateNext.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNavigateNextIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'navigateNextIcon', url: URL_NAVIGATENEXT }, ...properties);
}

/**
 * Creates a navigate next icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const navigateNextIcon = (...properties) => {
    const element = document.createElement('div');
    initNavigateNextIcon(element, ...properties);
    return element;
}
