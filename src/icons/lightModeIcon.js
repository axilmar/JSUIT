import { initIcon } from "./icon.js";

//the url of the light mode svg; resolved relative to this module
const URL_LIGHTMODE = new URL('../../assets/icons/lightMode.svg', import.meta.url).href;

/**
 * Initializes an icon element as a light mode icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/lightMode.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLightModeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LIGHTMODE }, ...properties);
}

/**
 * Creates a light mode icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const lightModeIcon = (...properties) => {
    const element = document.createElement('div');
    initLightModeIcon(element, ...properties);
    return element;
}
