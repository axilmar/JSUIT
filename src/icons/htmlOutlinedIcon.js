import { initIcon } from "./icon.js";

//the url of the html outlined svg; resolved relative to this module
const URL_HTMLOUTLINED = new URL('../../assets/icons/htmlOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a html outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/htmlOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHtmlOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_HTMLOUTLINED }, ...properties);
}

/**
 * Creates a html outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const htmlOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHtmlOutlinedIcon(element, ...properties);
    return element;
}
