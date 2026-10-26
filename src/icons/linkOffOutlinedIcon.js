import { initIcon } from "./icon.js";

//the url of the link off outlined svg; resolved relative to this module
const URL_LINKOFFOUTLINED = new URL('../../assets/icons/linkOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a link off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/linkOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLinkOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LINKOFFOUTLINED }, ...properties);
}

/**
 * Creates a link off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const linkOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLinkOffOutlinedIcon(element, ...properties);
    return element;
}
