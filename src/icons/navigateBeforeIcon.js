import { initIcon } from "./icon.js";

//the url of the navigate before svg; resolved relative to this module
const URL_NAVIGATEBEFORE = new URL('../../assets/icons/navigateBefore.svg', import.meta.url).href;

/**
 * Initializes an icon element as a navigate before icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/navigateBefore.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNavigateBeforeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_NAVIGATEBEFORE }, ...properties);
}

/**
 * Creates a navigate before icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const navigateBeforeIcon = (...properties) => {
    const element = document.createElement('div');
    initNavigateBeforeIcon(element, ...properties);
    return element;
}
