import { initIcon } from "./icon.js";

//the url of the remember me outlined svg; resolved relative to this module
const URL_REMEMBERMEOUTLINED = new URL('../../assets/icons/rememberMeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a remember me outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rememberMeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRememberMeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'rememberMeOutlinedIcon', url: URL_REMEMBERMEOUTLINED }, ...properties);
}

/**
 * Creates a remember me outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rememberMeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRememberMeOutlinedIcon(element, ...properties);
    return element;
}
