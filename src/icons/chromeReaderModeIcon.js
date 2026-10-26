import { initIcon } from "./icon.js";

//the url of the chrome reader mode svg; resolved relative to this module
const URL_CHROMEREADERMODE = new URL('../../assets/icons/chromeReaderMode.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chrome reader mode icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chromeReaderMode.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChromeReaderModeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CHROMEREADERMODE }, ...properties);
}

/**
 * Creates a chrome reader mode icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chromeReaderModeIcon = (...properties) => {
    const element = document.createElement('div');
    initChromeReaderModeIcon(element, ...properties);
    return element;
}
