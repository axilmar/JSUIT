import { initIcon } from "./icon.js";

//the url of the chrome reader mode outlined svg; resolved relative to this module
const URL_CHROMEREADERMODEOUTLINED = new URL('../../assets/icons/chromeReaderModeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a chrome reader mode outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/chromeReaderModeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initChromeReaderModeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'chromeReaderModeOutlinedIcon', url: URL_CHROMEREADERMODEOUTLINED }, ...properties);
}

/**
 * Creates a chrome reader mode outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const chromeReaderModeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initChromeReaderModeOutlinedIcon(element, ...properties);
    return element;
}
