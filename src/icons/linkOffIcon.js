import { initIcon } from "./icon.js";

//the url of the link off svg; resolved relative to this module
const URL_LINKOFF = new URL('../../assets/icons/linkOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a link off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/linkOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLinkOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LINKOFF }, ...properties);
}

/**
 * Creates a link off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const linkOffIcon = (...properties) => {
    const element = document.createElement('div');
    initLinkOffIcon(element, ...properties);
    return element;
}
