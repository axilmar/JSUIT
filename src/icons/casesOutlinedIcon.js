import { initIcon } from "./icon.js";

//the url of the cases outlined svg; resolved relative to this module
const URL_CASESOUTLINED = new URL('../../assets/icons/casesOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cases outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/casesOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCasesOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CASESOUTLINED }, ...properties);
}

/**
 * Creates a cases outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const casesOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCasesOutlinedIcon(element, ...properties);
    return element;
}
