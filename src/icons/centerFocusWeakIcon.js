import { initIcon } from "./icon.js";

//the url of the center focus weak svg; resolved relative to this module
const URL_CENTERFOCUSWEAK = new URL('../../assets/icons/centerFocusWeak.svg', import.meta.url).href;

/**
 * Initializes an icon element as a center focus weak icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/centerFocusWeak.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCenterFocusWeakIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'centerFocusWeakIcon', url: URL_CENTERFOCUSWEAK }, ...properties);
}

/**
 * Creates a center focus weak icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const centerFocusWeakIcon = (...properties) => {
    const element = document.createElement('div');
    initCenterFocusWeakIcon(element, ...properties);
    return element;
}
