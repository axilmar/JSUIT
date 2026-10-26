import { initIcon } from "./icon.js";

//the url of the mail lock outlined svg; resolved relative to this module
const URL_MAILLOCKOUTLINED = new URL('../../assets/icons/mailLockOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mail lock outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mailLockOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMailLockOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_MAILLOCKOUTLINED }, ...properties);
}

/**
 * Creates a mail lock outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mailLockOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMailLockOutlinedIcon(element, ...properties);
    return element;
}
