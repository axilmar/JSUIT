import { initIcon } from "./icon.js";

//the url of the mail outline outlined svg; resolved relative to this module
const URL_MAILOUTLINEOUTLINED = new URL('../../assets/icons/mailOutlineOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mail outline outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mailOutlineOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMailOutlineOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mailOutlineOutlinedIcon', url: URL_MAILOUTLINEOUTLINED }, ...properties);
}

/**
 * Creates a mail outline outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mailOutlineOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMailOutlineOutlinedIcon(element, ...properties);
    return element;
}
