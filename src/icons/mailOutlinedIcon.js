import { initIcon } from "./icon.js";

//the url of the mail outlined svg; resolved relative to this module
const URL_MAILOUTLINED = new URL('../../assets/icons/mailOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mail outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mailOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMailOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mailOutlinedIcon', url: URL_MAILOUTLINED }, ...properties);
}

/**
 * Creates a mail outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mailOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMailOutlinedIcon(element, ...properties);
    return element;
}
