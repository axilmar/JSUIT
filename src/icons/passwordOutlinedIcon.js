import { initIcon } from "./icon.js";

//the url of the password outlined svg; resolved relative to this module
const URL_PASSWORDOUTLINED = new URL('../../assets/icons/passwordOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a password outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/passwordOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPasswordOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PASSWORDOUTLINED }, ...properties);
}

/**
 * Creates a password outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const passwordOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPasswordOutlinedIcon(element, ...properties);
    return element;
}
