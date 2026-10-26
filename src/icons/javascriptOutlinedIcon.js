import { initIcon } from "./icon.js";

//the url of the javascript outlined svg; resolved relative to this module
const URL_JAVASCRIPTOUTLINED = new URL('../../assets/icons/javascriptOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a javascript outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/javascriptOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initJavascriptOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_JAVASCRIPTOUTLINED }, ...properties);
}

/**
 * Creates a javascript outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const javascriptOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initJavascriptOutlinedIcon(element, ...properties);
    return element;
}
