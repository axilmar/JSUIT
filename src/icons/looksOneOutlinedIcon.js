import { initIcon } from "./icon.js";

//the url of the looks one outlined svg; resolved relative to this module
const URL_LOOKSONEOUTLINED = new URL('../../assets/icons/looksOneOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a looks one outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/looksOneOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLooksOneOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'looksOneOutlinedIcon', url: URL_LOOKSONEOUTLINED }, ...properties);
}

/**
 * Creates a looks one outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const looksOneOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLooksOneOutlinedIcon(element, ...properties);
    return element;
}
