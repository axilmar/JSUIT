import { initIcon } from "./icon.js";

//the url of the wc outlined svg; resolved relative to this module
const URL_WCOUTLINED = new URL('../../assets/icons/wcOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wc outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wcOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWcOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wcOutlinedIcon', url: URL_WCOUTLINED }, ...properties);
}

/**
 * Creates a wc outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wcOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWcOutlinedIcon(element, ...properties);
    return element;
}
