import { initIcon } from "./icon.js";

//the url of the password svg; resolved relative to this module
const URL_PASSWORD = new URL('../../assets/icons/password.svg', import.meta.url).href;

/**
 * Initializes an icon element as a password icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/password.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPasswordIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'passwordIcon', url: URL_PASSWORD }, ...properties);
}

/**
 * Creates a password icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const passwordIcon = (...properties) => {
    const element = document.createElement('div');
    initPasswordIcon(element, ...properties);
    return element;
}
