import { initIcon } from "./icon.js";

//the url of the all inbox outlined svg; resolved relative to this module
const URL_ALLINBOXOUTLINED = new URL('../../assets/icons/allInboxOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an all inbox outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/allInboxOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAllInboxOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ALLINBOXOUTLINED }, ...properties);
}

/**
 * Creates an all inbox outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const allInboxOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAllInboxOutlinedIcon(element, ...properties);
    return element;
}
