import { initIcon } from "./icon.js";

//the url of the logout outlined svg; resolved relative to this module
const URL_LOGOUTOUTLINED = new URL('../../assets/icons/logoutOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a logout outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/logoutOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLogoutOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOGOUTOUTLINED }, ...properties);
}

/**
 * Creates a logout outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const logoutOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLogoutOutlinedIcon(element, ...properties);
    return element;
}
