import { initIcon } from "./icon.js";

//the url of the center focus strong outlined svg; resolved relative to this module
const URL_CENTERFOCUSSTRONGOUTLINED = new URL('../../assets/icons/centerFocusStrongOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a center focus strong outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/centerFocusStrongOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCenterFocusStrongOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'centerFocusStrongOutlinedIcon', url: URL_CENTERFOCUSSTRONGOUTLINED }, ...properties);
}

/**
 * Creates a center focus strong outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const centerFocusStrongOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCenterFocusStrongOutlinedIcon(element, ...properties);
    return element;
}
