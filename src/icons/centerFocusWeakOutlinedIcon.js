import { initIcon } from "./icon.js";

//the url of the center focus weak outlined svg; resolved relative to this module
const URL_CENTERFOCUSWEAKOUTLINED = new URL('../../assets/icons/centerFocusWeakOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a center focus weak outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/centerFocusWeakOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCenterFocusWeakOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'centerFocusWeakOutlinedIcon', url: URL_CENTERFOCUSWEAKOUTLINED }, ...properties);
}

/**
 * Creates a center focus weak outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const centerFocusWeakOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCenterFocusWeakOutlinedIcon(element, ...properties);
    return element;
}
