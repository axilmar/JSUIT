import { initIcon } from "./icon.js";

//the url of the center focus strong svg; resolved relative to this module
const URL_CENTERFOCUSSTRONG = new URL('../../assets/icons/centerFocusStrong.svg', import.meta.url).href;

/**
 * Initializes an icon element as a center focus strong icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/centerFocusStrong.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCenterFocusStrongIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CENTERFOCUSSTRONG }, ...properties);
}

/**
 * Creates a center focus strong icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const centerFocusStrongIcon = (...properties) => {
    const element = document.createElement('div');
    initCenterFocusStrongIcon(element, ...properties);
    return element;
}
