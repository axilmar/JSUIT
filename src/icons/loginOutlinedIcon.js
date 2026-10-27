import { initIcon } from "./icon.js";

//the url of the login outlined svg; resolved relative to this module
const URL_LOGINOUTLINED = new URL('../../assets/icons/loginOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a login outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/loginOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLoginOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'loginOutlinedIcon', url: URL_LOGINOUTLINED }, ...properties);
}

/**
 * Creates a login outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const loginOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLoginOutlinedIcon(element, ...properties);
    return element;
}
