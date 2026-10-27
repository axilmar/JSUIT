import { initIcon } from "./icon.js";

//the url of the dark mode svg; resolved relative to this module
const URL_DARKMODE = new URL('../../assets/icons/darkMode.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dark mode icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/darkMode.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDarkModeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'darkModeIcon', url: URL_DARKMODE }, ...properties);
}

/**
 * Creates a dark mode icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const darkModeIcon = (...properties) => {
    const element = document.createElement('div');
    initDarkModeIcon(element, ...properties);
    return element;
}
