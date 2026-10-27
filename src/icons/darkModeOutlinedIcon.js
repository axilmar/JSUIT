import { initIcon } from "./icon.js";

//the url of the dark mode outlined svg; resolved relative to this module
const URL_DARKMODEOUTLINED = new URL('../../assets/icons/darkModeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dark mode outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/darkModeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDarkModeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'darkModeOutlinedIcon', url: URL_DARKMODEOUTLINED }, ...properties);
}

/**
 * Creates a dark mode outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const darkModeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDarkModeOutlinedIcon(element, ...properties);
    return element;
}
